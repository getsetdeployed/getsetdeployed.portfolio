import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { formatDate } from "@/utils/formatDate";

interface FormData {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    name: "",
    email: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]); // State to store uploaded files
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files); // Convert FileList to array
      setFiles((prev) => [...prev, ...newFiles]); // Add new files to the existing files array
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Convert files to base64
      const attachments = await Promise.all(
        files.map(async (file) => {
          const base64Content = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
          });
          return {
            filename: file.name,
            content: base64Content.split(",")[1], // Extract base64 content
            content_type: file.type,
          };
        }),
      );

      const firstLetter = formData.name.charAt(0).toUpperCase();
      const emailTemplate = `
<div style="max-width: 600px; margin: 0 auto; font-family: 'Arial', sans-serif; background-color: #ffffff; color: #333333; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); overflow: hidden;">
  <!-- Header with Name Initial Circle -->
  <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="color: #ffffff; margin: 0; font-size: 48px; font-weight: 700; letter-spacing: 1px;">${formData.name}</h1>
    <p style="color: #e2e8f0; margin-top: 12px; font-size: 16px;">${formatDate(new Date())}</p>
  </div>

  <!-- Main Content -->
  <div style="background-color: #f9fafb; padding: 40px; border-radius: 0 0 12px 12px;">
    <!-- Contact Details -->
    <div style="margin-bottom: 32px;">
      <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 16px 0; font-weight: 700;">Contact Details</h2>
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 6px solid #6366f1; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
        <p style="color: #4b5563; margin: 8px 0; font-size: 16px;">
          <strong style="color: #6366f1;">Email:</strong> ${formData.email}
        </p>
      </div>
    </div>

    <!-- Message -->
    <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; margin-top: 24px; border-left: 6px solid #6366f1; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
      <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 16px 0; font-weight: 700;">Message</h2>
      <p style="color: #4b5563; line-height: 1.7; white-space: pre-wrap; font-size: 16px;">${formData.message}</p>
    </div>

    <!-- Attachments -->
    ${
      files.length > 0
        ? `
      <div style="margin-top: 24px;">
        <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 16px 0; font-weight: 700;">Attachments</h2>
        <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; border-left: 6px solid #6366f1; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${files
              .map(
                (file) => `
              <li style="color: #4b5563; margin-bottom: 8px;">
                <strong style="color: #6366f1;">File:</strong> ${file.name} (${(file.size / 1024).toFixed(2)} KB)
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
      </div>
      `
        : ""
    }

    <!-- Footer -->
    <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #e5e7eb; text-align: center;">
      <p style="color: #9ca3af; font-size: 14px;">
        Sent via <span style="color: #6366f1; font-weight: 700;">GetSetDeployed</span> Contact Form
      </p>
    </div>
  </div>
</div>
      `;

      const emailData = {
        id: process.env.NEXT_PUBLIC_EMAIL_ID,
        subject: `New Message from ${formData.email}`,
        body: emailTemplate,
        recipient_list: JSON.parse(
          process.env.NEXT_PUBLIC_RECIPIENT_LIST || "[]",
        ),
        smtp_host: "smtp.gmail.com",
        smtp_port: 465,
        use_tls: false,
        use_ssl: true,
        email_host_user: process.env.NEXT_PUBLIC_EMAIL_HOST_USER,
        email_host_password: process.env.NEXT_PUBLIC_EMAIL_HOST_PASSWORD,
        attachments: attachments,
      };

      // Send the email with attachments
      const response = await axios.post(
        "https://email-client-paddlelift.onrender.com/send/",
        emailData,
      );

      console.log("Email sent successfully:", response.data);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setFiles([]); // Clear the files array after successful submission
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        setError("Failed to send message. Please try again.");
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    files,
    handleChange,
    handleFileChange,
    handleSubmit,
    isLoading,
    error,
  };
};

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailData = {
      id: "6ab3723b-4544-4e0b-8148-12a91865d2b3",
      subject: `New Message from ${formData.email}`,
      body: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
          <h1 style="color: #333;">${formData.name}</h1>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">${formData.message}</p>
        </div>
      `,
      recipient_list: ["mandalsneh97@gmail.com"],
      smtp_host: "smtp.gmail.com",
      smtp_port: 465,
      use_tls: false,
      use_ssl: true,
      email_host_user: "getsetdeployed@gmail.com",
      email_host_password: "smhawqdpzvyyefji",
    };

    try {
      const response = await axios.post(
        "https://email.getsetdeployed.com/send",
        emailData,
        {
          headers: {
            "Content-Type": "application/json",
            // Uncomment the following line if CSRF token is required
            // "X-CSRFToken": getCsrfToken(),
          },
        },
      );
      console.log("Email sent successfully:", response.data);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        alert("Failed to send message. Please try again.");
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return { formData, handleChange, handleSubmit };
};

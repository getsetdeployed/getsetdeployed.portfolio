import { useContactForm } from "./useContactForm";
import { useState } from "react";

const ContactForm = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    setError(null);
    try {
      await handleSubmit(e);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-2xl">
      <h3 className="mb-8 text-3xl font-bold text-[#e4ded7] tracking-tight">
        Let&apos;s Talk
      </h3>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative group">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/[0.03] rounded-xl placeholder-gray-500 text-[#e4ded7] focus:outline-none focus:ring-1 focus:ring-[#e4ded7]/30 border border-white/[0.05] transition-all duration-300 group-hover:bg-white/[0.05]"
              required
              aria-required="true"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e4ded7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          <div className="relative group">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/[0.03] rounded-xl placeholder-gray-500 text-[#e4ded7] focus:outline-none focus:ring-1 focus:ring-[#e4ded7]/30 border border-white/[0.05] transition-all duration-300 group-hover:bg-white/[0.05]"
              required
              aria-required="true"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e4ded7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
        <div className="relative group">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-white/[0.03] rounded-xl placeholder-gray-500 text-[#e4ded7] focus:outline-none focus:ring-1 focus:ring-[#e4ded7]/30 border border-white/[0.05] transition-all duration-300 group-hover:bg-white/[0.05] resize-none"
            required
            aria-required="true"
          ></textarea>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e4ded7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full px-8 py-4 text-[#0E1016] bg-[#e4ded7] rounded-xl hover:bg-[#e4ded7]/90 transition-all duration-300 font-semibold text-lg relative overflow-hidden group"
          disabled={isLoading}
        >
          <span className="relative z-10">
            {isLoading ? "Sending..." : "Send Message"}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#e4ded7]/0 via-[#e4ded7]/50 to-[#e4ded7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import { useContactForm } from "./useContactForm";

const ContactForm = () => {
  const {
    formData,
    files,
    handleChange,
    handleFileChange,
    handleSubmit,
    isLoading,
    error,
  } = useContactForm();

  return (
    <div className="p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-2xl">
      <h3 className="mb-8 text-3xl font-bold text-[#e4ded7] tracking-tight">
        Let&apos;s Talk
      </h3>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative group">
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/[0.03] rounded-xl placeholder-gray-500 text-[#e4ded7] focus:outline-none focus:ring-1 focus:ring-[#e4ded7]/30 border border-white/[0.05] transition-all duration-300 group-hover:bg-white/[0.05]"
              required
              aria-required="true"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e4ded7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          <div className="relative group">
            <label htmlFor="lastName" className="sr-only">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/[0.03] rounded-xl placeholder-gray-500 text-[#e4ded7] focus:outline-none focus:ring-1 focus:ring-[#e4ded7]/30 border border-white/[0.05] transition-all duration-300 group-hover:bg-white/[0.05]"
              required
              aria-required="true"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e4ded7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          <div className="relative group">
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
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
        {/* File Attachment Section */}
        <div className="relative group">
          <label
            htmlFor="attachment"
            className="flex flex-col items-center justify-center p-6 bg-white/[0.03] rounded-xl border border-white/[0.05] cursor-pointer hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mx-auto text-[#e4ded7] mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span className="text-[#e4ded7] text-sm">Send any document</span>
            </div>
            <input
              type="file"
              id="attachment"
              name="attachment"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
              multiple
            />
          </label>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#e4ded7]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
        {/* Display Uploaded Files */}
        {files.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2 bg-white/[0.03] rounded-lg border border-white/[0.05] w-20 h-20"
              >
                <span className="text-[#e4ded7] text-sm truncate max-w-[80px]">
                  {file.name}
                </span>
              </div>
            ))}
          </div>
        )}
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

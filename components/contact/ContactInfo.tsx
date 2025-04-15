import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6 text-[#e4ded7]" />,
      title: "Kolkata, West Bengal",
      subtitle: "India",
    },
    {
      icon: <Phone className="w-6 h-6 text-[#e4ded7]" />,
      title: "+91 98756 09901",
      subtitle: "Mon-Fri 9am-6pm",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#e4ded7]" />,
      title: "mail@getsetdeployed.com",
      subtitle: "Get in touch via email",
    },
  ];

  return (
    <div className="flex flex-col justify-center space-y-10 p-8">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-[#e4ded7] tracking-tight">
          Contact Information
        </h3>
        <p className="text-gray-400 max-w-md text-lg">
          Ready to bring your vision to life? Reach out through any of these
          channels.
        </p>
      </div>

      <div className="space-y-8">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center space-x-6 group">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] transition-all duration-300 group-hover:bg-white/[0.08]">
              {detail.icon}
            </div>
            <div>
              <p className="text-[#e4ded7] text-lg font-medium">
                {detail.title}
              </p>
              <p className="text-gray-400 mt-1">{detail.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;

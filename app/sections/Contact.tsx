import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#0E1016] py-20">
      {/* Background with enhanced overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1016] via-[#0E1016]/95 to-[#0E1016]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <AnimatedTitle
          text="GET IN TOUCH"
          className="mb-16 text-left text-5xl font-bold tracking-tight text-[#e4ded7] sm:text-6xl lg:text-7xl"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>

        {/* Copyright */}
        <div className="mt-20 pb-20 pt-8 border-t border-white/[0.05]">
          <p className="text-center text-gray-400">
            ©2024 GetSetDeployed. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

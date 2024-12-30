"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedTitle from "../animations/AnimatedTitle";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="relative bg-[#0E1016]">
      {/* Background overlay with image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#0E1016]/90 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl">
        <AnimatedTitle
          text="CONTACT"
          className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <h3 className="mb-6 text-2xl font-bold text-[#e4ded7]">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-400 text-[#e4ded7] focus:outline-none focus:ring-2 focus:ring-[#e4ded7]/50 border border-white/10"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-400 text-[#e4ded7] focus:outline-none focus:ring-2 focus:ring-[#e4ded7]/50 border border-white/10"
                />
              </div>
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 rounded-lg placeholder-gray-400 text-[#e4ded7] focus:outline-none focus:ring-2 focus:ring-[#e4ded7]/50 border border-white/10"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 text-[#0E1016] bg-gradient-to-r from-[#e4ded7] to-[#e4ded7]/80 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8 p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#e4ded7]">
                Contact Information
              </h3>
              <p className="text-gray-400 max-w-md">
                Ready to get started? Reach out to us through any of these
                channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-[#e4ded7]/10">
                  <MapPin className="w-6 h-6 text-[#e4ded7]" />
                </div>
                <div>
                  <p className="text-[#e4ded7]">123 Innovation Drive</p>
                  <p className="text-gray-400">San Francisco, CA 94107</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-[#e4ded7]/10">
                  <Phone className="w-6 h-6 text-[#e4ded7]" />
                </div>
                <div>
                  <p className="text-[#e4ded7]">+1 (555) 123-4567</p>
                  <p className="text-gray-400">Mon-Fri 9am-6pm</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-[#e4ded7]/10">
                  <Mail className="w-6 h-6 text-[#e4ded7]" />
                </div>
                <div>
                  <p className="text-[#e4ded7]">hello@company.com</p>
                  <p className="text-gray-400">Get in touch via email</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

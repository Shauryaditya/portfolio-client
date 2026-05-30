"use client";

import { motion } from "framer-motion";
import { Camera, Briefcase, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#d70422] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex justify-center items-end pointer-events-none">
        <div className="w-[800px] h-[400px] bg-white/20 blur-[150px] rounded-t-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Text & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Let's Grow <br />
              <span className="text-[#fff5ea]">Your Brand.</span>
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-md">
              Ready to turn your content into conversions? Drop a message below and let's discuss how we can scale your social presence.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Briefcase />, href: "#" },
                { icon: <MessageSquare />, href: "#" },
                { icon: <Camera />, href: "#" },
                { icon: <Mail />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:border-white hover:text-[#d70422] transition-all hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form className="p-8 md:p-10 rounded-3xl bg-white border border-red-100 shadow-[0_30px_80px_-35px_rgba(92,0,12,0.55)]">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-[#5c000c]/80">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-[#fffaf3] border border-red-100 text-[#5c000c] placeholder:text-[#5c000c]/35 focus:border-[#d70422] focus:ring-1 focus:ring-[#d70422] outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-[#5c000c]/80">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#fffaf3] border border-red-100 text-[#5c000c] placeholder:text-[#5c000c]/35 focus:border-[#d70422] focus:ring-1 focus:ring-[#d70422] outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[#5c000c]/80">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-[#fffaf3] border border-red-100 text-[#5c000c] placeholder:text-[#5c000c]/35 focus:border-[#d70422] focus:ring-1 focus:ring-[#d70422] outline-none transition-all resize-none"
                />
              </div>

              <button
                type="button"
                className="mt-4 w-full py-4 bg-[#d70422] hover:bg-[#b6001a] text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

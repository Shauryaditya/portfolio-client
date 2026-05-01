"use client";

import { motion } from "framer-motion";
import { Camera, Briefcase, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex justify-center items-end pointer-events-none">
        <div className="w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-t-full" />
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
              <span className="text-primary">Your Brand.</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-md">
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
                  className="w-12 h-12 rounded-full border border-card-border flex items-center justify-center text-foreground hover:bg-primary hover:border-primary hover:text-white transition-all hover:-translate-y-1"
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
            <form className="p-8 md:p-10 rounded-3xl bg-card-bg border border-card-border flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <button
                type="button"
                className="mt-4 w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
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

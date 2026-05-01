"use client";

import { motion } from "framer-motion";
import { LineChart, Megaphone, Palette, Smartphone } from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    description: "End-to-end community building, daily engagement, and platform optimization to keep your brand top-of-mind.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "Paid Ads Strategy",
    description: "High-converting performance marketing across Meta, TikTok, and LinkedIn. Maximizing ROI and lowering CAC.",
    icon: <LineChart className="w-8 h-8" />
  },
  {
    title: "Content Strategy",
    description: "Data-backed content pillars and calendar planning. I tell your brand's story through engaging, shareable formats.",
    icon: <Megaphone className="w-8 h-8" />
  },
  {
    title: "Branding & Identity",
    description: "Visual and tonal brand development ensuring a cohesive, premium presence across all digital touchpoints.",
    icon: <Palette className="w-8 h-8" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Capabilities & <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            A full-stack approach to digital growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group relative p-8 rounded-3xl bg-card-bg border border-card-border overflow-hidden hover:border-primary/50 transition-colors duration-300 h-full flex flex-col"
              data-cursor="LEARN"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 mb-6 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="relative z-10 text-xl font-bold mb-3">{service.title}</h3>
              <p className="relative z-10 text-foreground/60 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            Capabilities & <span className="text-[#d70422]">Services</span>
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

        <div className="relative mt-12 py-16 px-4 md:px-12 bg-white rounded-[3rem] shadow-sm border border-red-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="group relative p-8 md:p-10 rounded-3xl bg-white border border-red-100 shadow-[0_10px_40px_-10px_rgba(92,0,12,0.12)] hover:shadow-[0_20px_50px_-10px_rgba(92,0,12,0.22)] hover:border-[#d70422]/40 transition-all duration-500 h-full flex flex-col hover:-translate-y-2 hover:z-10"
                data-cursor="LEARN"
              >
                <div className="relative z-10 mb-6 flex items-center text-[#d70422] group-hover:scale-110 group-hover:text-[#b6001a] transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="relative z-10 text-xl font-bold mb-3 text-[#5c000c] group-hover:text-[#d70422] transition-colors">{service.title}</h3>
                <p className="relative z-10 text-[#5c000c]/65 leading-relaxed flex-grow text-sm font-medium">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

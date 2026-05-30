"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CMO, TechNova",
    text: "Working with this strategist completely transformed our organic acquisition. We saw a 3x ROI in just three months. They don't just understand trends; they understand human psychology.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Marcus Aurelius",
    role: "Founder, StoicBrand",
    text: "The best social media hire we've ever made. Our community engagement skyrocketed by 250% and our customer acquisition cost dropped by half. A true professional.",
    gradient: "from-red-600 to-orange-500"
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Marketing, FinServe",
    text: "Unbelievable attention to detail and data. They completely rebuilt our LinkedIn presence from scratch, leading to a 5x increase in inbound enterprise leads.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "David Chen",
    role: "Creator & Influencer",
    text: "They helped me monetize my audience without selling out. The merch launch strategy was flawless and resulted in a record-breaking month for my brand.",
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function Testimonials() {
  // Duplicate array for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          What <span className="text-primary">Clients Say</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        <motion.div
          className="flex gap-6 py-4 whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[400px] md:w-[500px] p-8 rounded-3xl bg-card-bg border border-card-border shrink-0 flex flex-col justify-between whitespace-normal hover:border-primary/50 transition-colors cursor-default"
              data-cursor="DRAG"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-6" />
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

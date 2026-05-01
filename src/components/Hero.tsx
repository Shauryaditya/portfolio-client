"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-[1000px]">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 absolute inset-0 z-0">
        <motion.div style={{ y: textY, opacity }} className="container relative z-20 px-6 md:px-12 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Senior Social Media Specialist</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 max-w-4xl relative z-20"
          >
            I Turn Content Into <span className="text-gradient">Conversions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-10 relative z-20"
          >
            Data-driven social media strategist specializing in high-impact campaigns, community growth, and performance marketing that scales brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#work"
              data-cursor="SCROLL"
              className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span className="relative z-10">View Work</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-primary-hover transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            
            <a
              href="#contact"
              data-cursor="CONTACT"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>
      </BackgroundLines>
    </section>
  );
}

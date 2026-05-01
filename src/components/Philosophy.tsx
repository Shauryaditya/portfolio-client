"use client";

import React from "react";
import { TextFlippingBoard } from "./ui/text-flipping-board";
import { motion } from "framer-motion";

export function TextFlippingBoardDemo() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 py-20" data-cursor="READ">
      <TextFlippingBoard text={"STAY HUNGRY \nSTAY IN BED \n- STEVE JOBS"} />
    </div>
  );
}

export default function Philosophy() {
  return (
    <section className="py-24 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-sm tracking-[0.2em] text-foreground/50 uppercase font-semibold">
            Daily Reminders
          </h2>
        </motion.div>
        
        <TextFlippingBoardDemo />
      </div>
    </section>
  );
}


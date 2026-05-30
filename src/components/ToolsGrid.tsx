"use client";

import { motion } from "framer-motion";
import { BarChart3, PenTool, Layers, Briefcase, Palette, Target, Video, BookOpen } from "lucide-react";

const tools = [
  { name: "Meta Ads", icon: <Target className="w-6 h-6" /> },
  { name: "Google Analytics", icon: <BarChart3 className="w-6 h-6" /> },
  { name: "TikTok", icon: <Video className="w-6 h-6" /> },
  { name: "LinkedIn", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Canva", icon: <Palette className="w-6 h-6" /> },
  { name: "Figma", icon: <PenTool className="w-6 h-6" /> },
  { name: "Hootsuite", icon: <Layers className="w-6 h-6" /> },
  { name: "Notion", icon: <BookOpen className="w-6 h-6" /> }
];

export default function ToolsGrid() {
  return (
    <section className="py-24 border-t border-red-100 bg-white text-[#5c000c]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-12"
        >
          My Growth <span className="text-[#d70422]">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-white border border-red-100 shadow-[0_10px_30px_-18px_rgba(92,0,12,0.35)] hover:border-[#d70422]/45 hover:bg-[#fff5ea] transition-all cursor-default group"
            >
              <div className="text-[#d70422]/55 group-hover:text-[#d70422] transition-colors">
                {tool.icon}
              </div>
              <span className="font-semibold text-[#5c000c]/80 group-hover:text-[#d70422] transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

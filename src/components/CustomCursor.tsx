"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement;
      
      if (cursorTarget) {
        setIsHovering(true);
        setHoverText(cursorTarget.getAttribute("data-cursor") || "Explore");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center text-white font-bold tracking-widest text-xs uppercase"
      animate={{
        x: position.x - (isHovering ? 50 : 10),
        y: position.y - (isHovering ? 50 : 10),
        width: isHovering ? 100 : 20,
        height: isHovering ? 100 : 20,
        backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)",
        mixBlendMode: isHovering ? "normal" : "difference",
        color: isHovering ? "black" : "transparent"
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5
      }}
      style={{
        borderRadius: "50%",
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        className="pointer-events-none"
      >
        {hoverText}
      </motion.span>
    </motion.div>
  );
}

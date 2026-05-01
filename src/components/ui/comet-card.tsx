"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export const CometCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2rem] bg-card-border p-[2px] transition-all duration-300",
        className
      )}
    >
      <div className="absolute inset-0 z-0 h-[200%] w-[200%] animate-[spin_6s_linear_infinite] opacity-50">
        <div className="h-full w-full bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--primary)_360deg)]" />
      </div>

      <motion.div
        className="absolute z-10 rounded-[2rem] bg-primary/20 blur-2xl"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        style={{ width: 300, height: 300 }}
      />

      <div className="relative z-20 flex h-full w-full flex-col rounded-[2rem] bg-card-bg">
        {children}
      </div>
    </div>
  );
};

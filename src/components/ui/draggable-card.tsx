"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/utils/cn";

export const DraggableCardContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* We pass the containerRef to children if we wanted bounded drag, but unbounded is fine here */}
      {children}
    </div>
  );
};

export const DraggableCardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
      whileHover={{ scale: 1.02, cursor: "grab" }}
      className={cn(
        "absolute cursor-grab bg-white p-4 pb-6 rounded-xl shadow-2xl border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

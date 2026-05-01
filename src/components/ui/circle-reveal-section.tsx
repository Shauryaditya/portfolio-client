"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/utils/cn";

export const CircleRevealSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("relative w-full z-10", className)}
    >
      {children}
    </motion.div>
  );
};

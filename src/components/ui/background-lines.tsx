"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/utils/cn";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div
      className={cn(
        "relative h-screen w-full overflow-hidden bg-background flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 1440 800"
          className="w-full h-full min-w-[1440px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths.map((path, idx) => (
            <motion.path
              key={`path-${idx}`}
              d={path}
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: svgOptions?.duration || 10,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 5,
              }}
            />
          ))}
          <defs>
            <linearGradient
              id="gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

const paths = [
  "M0 100 Q 360 300 720 100 T 1440 100",
  "M0 200 Q 360 400 720 200 T 1440 200",
  "M0 300 Q 360 500 720 300 T 1440 300",
  "M0 400 Q 360 600 720 400 T 1440 400",
  "M0 500 Q 360 700 720 500 T 1440 500",
  "M0 600 Q 360 800 720 600 T 1440 600",
  "M0 700 Q 360 900 720 700 T 1440 700",
  "M100 0 Q 300 360 100 720 T 100 1440",
  "M200 0 Q 400 360 200 720 T 200 1440",
  "M300 0 Q 500 360 300 720 T 300 1440",
  "M400 0 Q 600 360 400 720 T 400 1440",
  "M500 0 Q 700 360 500 720 T 500 1440",
  "M600 0 Q 800 360 600 720 T 600 1440",
  "M700 0 Q 900 360 700 720 T 700 1440",
];

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CometCard } from "@/components/ui/comet-card";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-8deg"]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#d70422] pt-20 font-sans text-white perspective-[1000px]"
    >
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(45deg,#fff_25%,transparent_25%),linear-gradient(-45deg,#fff_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#fff_75%),linear-gradient(-45deg,transparent_75%,#fff_75%)] [background-position:0_0,0_12px,12px_-12px,-12px_0] [background-size:24px_24px]" />
      <div className="relative z-20 flex w-full items-center justify-center px-4">
        <div className="container mx-auto flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-10 md:px-10">
          <div className="relative flex min-h-[42rem] w-full items-start justify-center pt-16 sm:min-h-[45rem] sm:pt-20 lg:min-h-[48rem] lg:pt-24">
            <motion.h1
              style={{ y: textY, opacity }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative z-10 select-none text-center font-[family-name:var(--font-display)] text-[clamp(5rem,18vw,15rem)] font-normal leading-[0.78] tracking-normal text-white drop-shadow-[0_10px_0_rgba(106,0,15,0.22)]"
            >
              Portfolio
            </motion.h1>

            <motion.div
              style={{ y: cardY, rotate: cardRotate, scale: cardScale, opacity }}
              initial={{ opacity: 0, y: 46, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
              className="absolute left-1/2 top-[11.5rem] z-30 w-[min(82vw,20.5rem)] -translate-x-1/2 sm:top-[11rem] md:w-[22rem] lg:top-[21.5rem]"
            >
              <motion.div
                whileHover={{
                  y: [0, -12, 6, -5, 0],
                  rotate: [0, 4, -4, 2, 0],
                }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="relative cursor-grab active:cursor-grabbing"
              >
                <div className="absolute left-1/2 top-[-7.25rem] h-56 w-4 -translate-x-1/2 rounded-b-2xl border-x border-white/40 bg-[repeating-linear-gradient(45deg,#ffffff_0_12px,#d70422_12px_24px)] shadow-2xl sm:top-[-8rem] sm:h-36" />
                <div className="absolute left-1/2 top-[-0.95rem] z-30 h-11 w-11 -translate-x-1/2 rounded-full border-[6px] border-zinc-100 bg-white shadow-xl" />

              <CometCard className="rounded-[2rem] bg-white/70 p-[1px]">
                <article
                  className="relative overflow-hidden rounded-[2rem] bg-white px-6 pb-7 pt-10 text-slate-950 shadow-2xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute left-1/2 top-3 z-20 h-5 w-5 -translate-x-1/2 rounded-full border border-red-950/10 bg-white shadow-inner" />
                  <div className="absolute -left-10 top-10 rotate-[-6deg] font-[family-name:var(--font-display)] text-6xl font-normal leading-none text-red-600/10 sm:text-7xl">
                    Portfolio
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <p className="font-[family-name:var(--font-display)] text-5xl font-normal leading-none text-[#d70422]">
                      Portfolio
                    </p>
                    <p className="mt-1 text-2xl font-semibold italic text-slate-900">Priyanka</p>

                    <div className="relative mt-7 h-40 w-32 overflow-hidden rounded-[18px] border border-red-100 bg-white shadow-xl">
                      <Image
                        src="/priyanka-portrait.jpeg"
                        alt="Priyanka portrait"
                        fill
                        priority
                        sizes="128px"
                        className="object-cover object-[54%_24%]"
                      />
                    </div>

                    <p className="mt-7 text-center text-sm font-black uppercase tracking-[0.2em] text-slate-800">
                      Social Media Specialist
                    </p>
                    <div className="mt-4 flex h-12 w-36 items-end justify-center gap-[3px] border-y border-slate-200 py-1">
                      {Array.from({ length: 28 }).map((_, index) => (
                        <span
                          key={index}
                          className="bg-slate-800"
                          style={{
                            height: `${18 + ((index * 13) % 24)}px`,
                            width: index % 4 === 0 ? "4px" : "2px",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              </CometCard>

              <div className="mx-auto mt-4 flex w-[88%] items-center justify-between rounded-md border border-white/40 bg-white/95 px-4 py-3 text-slate-900 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="relative h-8 w-8 overflow-hidden rounded-full">
                    <Image
                      src="/priyanka-portrait.jpeg"
                      alt=""
                      fill
                      sizes="32px"
                      className="object-cover object-[54%_24%]"
                    />
                  </div>
                  <span className="text-xs font-semibold">Available for hire</span>
                </div>
                <a
                  href="#contact"
                  className="rounded-full bg-[#d70422] px-3 py-1 text-[10px] font-bold text-white shadow-md transition-transform hover:scale-105"
                  data-cursor="CONTACT"
                >
                  Hire Me
                </a>
              </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

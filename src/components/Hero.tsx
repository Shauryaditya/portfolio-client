"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CometCard } from "@/components/ui/comet-card";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-8deg"]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-20 perspective-[1000px]">
      <BackgroundLines className="absolute inset-0 z-0 flex w-full items-center justify-center px-4">
        <div className="container relative z-20 mx-auto grid min-h-[calc(100vh-5rem)] items-center gap-12 px-6 py-12 md:px-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div style={{ y: textY, opacity }} className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Senior Social Media Specialist</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-20 mb-6 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
            >
              <EncryptedText
                text="Hi I am Priyanka, Welcome to my Portfolio."
                encryptedClassName="text-neutral-500"
                revealedClassName="text-white"
                revealDelayMs={45}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative z-20 mb-10 max-w-2xl text-lg text-foreground/60 md:text-xl"
            >
              I turn content into conversions through high-impact campaigns, community growth, and performance marketing that scales brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-start gap-4 sm:flex-row"
            >
              <a
                href="#work"
                data-cursor="SCROLL"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">View Work</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 origin-left scale-x-0 bg-primary-hover transition-transform duration-300 group-hover:scale-x-100" />
              </a>

              <a
                href="#contact"
                data-cursor="CONTACT"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: cardY, rotate: cardRotate, scale: cardScale, opacity }}
            initial={{ opacity: 0, y: 36, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[23rem] lg:max-w-[25rem]"
          >
            <div className="absolute left-1/2 top-[-8rem] h-36 w-14 -translate-x-1/2 rounded-b-2xl border-x border-cyan-200/60 bg-[repeating-linear-gradient(45deg,#06b6d4_0_12px,#67e8f9_12px_14px,#06b6d4_14px_26px,#ffffff_26px_28px)] shadow-2xl" />
            <div className="absolute left-1/2 top-[-1.25rem] z-30 h-12 w-12 -translate-x-1/2 rounded-full border-[6px] border-zinc-300 bg-transparent shadow-xl" />

            <CometCard className="rounded-[2rem] bg-white/15 p-[1px]">
              <article
                className="relative overflow-hidden rounded-[2rem] bg-[#cdeef5] px-6 pb-7 pt-10 text-slate-950 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute left-1/2 top-3 z-20 h-5 w-5 -translate-x-1/2 rounded-full border border-cyan-900/20 bg-white/80 shadow-inner" />
                <div className="absolute -left-10 top-10 rotate-[-6deg] text-6xl font-black uppercase leading-none text-cyan-500/20 sm:text-7xl">
                  Portfolio
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <p className="font-serif text-4xl font-black uppercase leading-none text-cyan-500">
                    Portfolio
                  </p>
                  <p className="mt-1 text-2xl font-light italic text-cyan-600">Priyanka</p>

                  <div className="relative mt-7 h-40 w-32 overflow-hidden rounded-[18px] border border-white/70 bg-white shadow-xl">
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
                  <div className="mt-4 flex h-12 w-36 items-end justify-center gap-[3px] border-y border-slate-900/20 py-1">
                    {Array.from({ length: 28 }).map((_, index) => (
                      <span
                        key={index}
                        className="bg-slate-950"
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

            <div className="mx-auto mt-4 flex w-[88%] items-center justify-between rounded-md border border-white/10 bg-slate-950/80 px-4 py-3 text-white shadow-xl backdrop-blur">
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
                <span className="text-xs font-semibold">Priyanka is available for hire</span>
              </div>
              <a
                href="#contact"
                className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-slate-950 transition-transform hover:scale-105"
                data-cursor="CONTACT"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </div>
      </BackgroundLines>
    </section>
  );
}

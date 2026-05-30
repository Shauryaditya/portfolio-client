"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Megaphone, Sparkles, Stethoscope, Target } from "lucide-react";
import Image from "next/image";
import { ReactNode, useRef } from "react";

type Project = {
  id: number;
  title: string;
  kicker: string;
  summary: string;
  image: string;
  imageAlt: string;
  stats: Array<{ label: string; value: string }>;
  tags: string[];
  icon: ReactNode;
  theme: "red" | "cream";
  animation: "float" | "fan" | "stack" | "tilt";
};

const projects: Project[] = [
  {
    id: 1,
    title: "ISDIN India",
    kicker: "Skincare Launch",
    summary: "A clean product-led content system for premium skincare visibility.",
    image: "/isdinportfolio.webp",
    imageAlt: "ISDIN India portfolio creative",
    stats: [
      { label: "Format", value: "Reels" },
      { label: "Focus", value: "Launch" },
      { label: "Style", value: "Clean" },
    ],
    tags: ["Skincare", "Product Stories", "Campaign Design"],
    icon: <Sparkles className="h-5 w-5" />,
    theme: "red",
    animation: "float",
  },
  {
    id: 2,
    title: "The Minds Journal",
    kicker: "Community Network",
    summary: "Multi-platform content built for quotes, psychology, and daily engagement.",
    image: "/mindjournal_insta.webp",
    imageAlt: "The Minds Journal Instagram showcase",
    stats: [
      { label: "Channels", value: "6+" },
      { label: "Output", value: "Daily" },
      { label: "Reach", value: "High" },
    ],
    tags: ["Facebook", "Instagram", "Community"],
    icon: <Megaphone className="h-5 w-5" />,
    theme: "cream",
    animation: "stack",
  },
  {
    id: 3,
    title: "Palsonsderma",
    kicker: "Derma Brands",
    summary: "Aesthetic social presence for skincare, haircare, and clinic brands.",
    image: "/insta-handle.jpg",
    imageAlt: "Palsonsderma Instagram handle",
    stats: [
      { label: "Brands", value: "4" },
      { label: "Tone", value: "Trust" },
      { label: "Care", value: "Skin" },
    ],
    tags: ["NMFe", "Q-Sera", "Neolayr Pro"],
    icon: <Stethoscope className="h-5 w-5" />,
    theme: "red",
    animation: "fan",
  },

];

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headlineX = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative overflow-hidden bg-[#fff5ea] py-24 text-[#d70422] md:py-32"
    >
      <div className="pointer-events-none sticky top-0 z-0 h-screen overflow-hidden">
        <motion.div
          style={{ x: headlineX }}
          className="absolute top-20 whitespace-nowrap font-[family-name:var(--font-display)] text-[28vw] leading-none text-[#d70422]/10"
        >
          projects projects projects
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fff5ea] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto -mt-[100vh] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-4xl md:mb-24"
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.28em]">
            Selected work
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(5rem,14vw,12rem)] font-normal leading-[0.78] tracking-normal">
            projects
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  progress,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / projects.length;
  const end = (index + 1) / projects.length;
  const y = useTransform(progress, [start, end], [80, -40]);
  const rotate = useTransform(progress, [start, end], [index % 2 ? -2 : 2, 0]);
  const isRed = project.theme === "red";

  return (
    <motion.article
      style={{ y, rotate }}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`group relative min-h-[72vh] overflow-hidden rounded-[1.75rem] border shadow-[0_30px_80px_-35px_rgba(92,0,12,0.45)] md:rounded-[2.5rem] ${
        isRed
          ? "border-red-200/30 bg-[#d70422] text-white"
          : "border-red-200 bg-[#fffaf3] text-[#d70422]"
      }`}
    >
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative grid min-h-[72vh] gap-8 p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
        <div className="flex flex-col gap-6">
          <div>
            <div
              className={`mb-8 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.22em] ${
                isRed ? "border-white/35 bg-white/10" : "border-red-200 bg-white"
              }`}
            >
              {project.icon}
              {project.kicker}
            </div>

            <h3 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(4rem,9vw,8rem)] font-normal leading-[0.78] tracking-normal">
              {project.title}
            </h3>
            <p className={`max-w-md text-lg font-semibold ${isRed ? "text-white/82" : "text-red-950/70"}`}>
              {project.summary}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {project.stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, rotate: -1 }}
                className={`rounded-2xl border p-4 ${
                  isRed
                    ? "border-white/20 bg-white/10"
                    : "border-red-100 bg-[#d70422] text-white"
                }`}
              >
                <p className="text-2xl font-black md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] opacity-70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <ProjectVisual project={project} isRed={isRed} />

        <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2 md:bottom-4 md:left-10 md:right-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
                isRed ? "bg-white text-[#d70422]" : "bg-[#d70422] text-white"
              }`}
            >
              {tag}
            </span>
          ))}
          <ArrowUpRight className="ml-auto hidden h-8 w-8 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:block" />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectVisual({ project, isRed }: { project: Project; isRed: boolean }) {
  if (project.animation === "fan") {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        className="relative flex min-h-[26rem] items-center justify-center pb-16 lg:pb-0"
      >
        {["/nmfe-ig.jpg", project.image, "/qsera-ig.jpg"].map((src, index) => (
          <motion.div
            key={src}
            variants={{
              rest: {
                x: `${(index - 1) * 18}%`,
                rotate: (index - 1) * 8,
                y: index === 1 ? 0 : 28,
              },
              hover: {
                x: `${(index - 1) * 42}%`,
                rotate: (index - 1) * 14,
                y: index === 1 ? -20 : 16,
              },
            }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute aspect-[9/16] w-[42%] max-w-[15rem] overflow-hidden rounded-[1.6rem] border-[6px] border-white bg-white shadow-2xl"
            style={{ zIndex: index === 1 ? 3 : 2 }}
          >
            <Image src={src} alt="" fill sizes="240px" className="object-cover" />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (project.animation === "stack") {
    return (
      <motion.div
        whileHover="hover"
        className="relative flex min-h-[26rem] items-center justify-center pb-16 lg:pb-0"
      >
        <motion.div
          variants={{ hover: { rotate: -6, x: -34, y: -22 } }}
          className="absolute aspect-video w-[78%] overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-white shadow-2xl"
        >
          <Image src={project.image} alt={project.imageAlt} fill sizes="700px" className="object-cover" />
        </motion.div>
        <motion.div
          variants={{ hover: { rotate: 7, x: 42, y: 32 } }}
          className="absolute aspect-video w-[58%] translate-y-20 overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-white shadow-2xl"
        >
          <Image src="/work-3.png" alt="" fill sizes="520px" className="object-cover" />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={project.animation === "tilt" ? { rotateX: 6, rotateY: -8, scale: 1.03 } : { y: -18, rotate: -2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative flex min-h-[26rem] items-center justify-center pb-16 [transform-style:preserve-3d] lg:pb-0"
    >
      <div
        className={`absolute h-[72%] w-[72%] rounded-full blur-3xl ${
          isRed ? "bg-white/20" : "bg-[#d70422]/15"
        }`}
      />
      <div className="relative aspect-[4/5] w-[76%] max-w-[31rem] overflow-hidden rounded-[1.75rem] border-[8px] border-white bg-white shadow-2xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 520px, 80vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </motion.div>
  );
}

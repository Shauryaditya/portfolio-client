"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Sparkles, Megaphone, Stethoscope, LineChart } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "My Journey & Strategy",
    icon: <LineChart className="w-6 h-6 text-primary" />,
    content: (
      <div className="space-y-6 text-lg md:text-xl text-foreground/80 font-medium">
        <p>
          As{" "}
          <strong className="text-foreground">
            Social Media Manager at Minds Journal
          </strong>
          , I lead 360-degree campaigns across platforms, create engaging
          content, and build influencer networks to drive brand growth and
          engagement.
        </p>
        <p>
          My role involves analytics reporting, SEO optimization, and strategic
          content planning to boost user interaction on Facebook, Instagram,
          YouTube, Pinterest, and more.
        </p>
        <p>
          Previously, as a{" "}
          <strong className="text-foreground">Social Media Executive</strong>, I
          focused on brand consistency and audience growth, laying the
          groundwork for my advanced skills in social media strategy and content
          innovation.
        </p>
      </div>
    ),
    visual: (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2rem] backdrop-blur-3xl" />
        <div className="relative w-[50%] md:w-[40%] lg:w-[45%] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] border-white z-30 bg-white group hover:scale-105 transition-transform duration-500">
          <Image
            src="/minds-journal-ig.jpg"
            alt="Minds Journal Instagram"
            fill
            className="object-cover"
          />
        </div>
      </div>
    ),
    color: "bg-[#fff5f8]",
  },
  {
    id: 2,
    title: "The Minds Journal Network",
    icon: <Megaphone className="w-6 h-6 text-blue-500" />,
    content: (
      <div className="space-y-6 text-lg md:text-xl text-foreground/80 font-medium">
        <p>
          Managed large-scale digital communities and publishing platforms,
          driving millions of impressions and high engagement rates.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          {[
            "TheMindsJournal",
            "Zodiac Signs 'N Secrets",
            "Hey Introvert",
            "The Quest Within",
            "2am",
            "I Believe",
          ].map((brand) => (
            <span
              key={brand}
              className="px-4 py-2 bg-white/60 border border-blue-200 rounded-full text-blue-900 text-sm font-bold shadow-sm"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    ),
    visual: (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/40 mb-6 group">
          <Image
            src="/facebook-brands.png"
            alt="Facebook Brands"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="relative w-3/4 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/40 group ml-auto -mt-16 z-10">
          <Image
            src="/work-3.png"
            alt="Pinterest and YouTube"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    ),
    color: "bg-[#f0f9ff]",
  },
  {
    id: 3,
    title: "Palsonsderma Skincare",
    icon: <Stethoscope className="w-6 h-6 text-teal-500" />,
    content: (
      <div className="space-y-6 text-lg md:text-xl text-foreground/80 font-medium">
        <p>
          Led social media strategies for premium dermatology and skincare
          brands under the{" "}
          <strong className="text-foreground">Palsonsderma</strong> umbrella.
        </p>
        <p>
          Managed content creation, product highlights, and brand identity
          across Instagram to build trust and aesthetic appeal for skin and hair
          clinics.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          {["Neolayr Pro", "NMFe", "Q-Sera", "Wizderm Clinic"].map((brand) => (
            <span
              key={brand}
              className="px-4 py-2 bg-white/60 border border-teal-200 rounded-full text-teal-900 text-sm font-bold shadow-sm"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    ),
    visual: (
      <motion.div
        initial="initial"
        whileInView="animate"
        whileHover="hover"
        viewport={{ once: true }}
        className="relative w-full h-full flex items-center justify-center p-4 perspective-[1200px] cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* NMFe Phone (Left) */}
        <motion.div
          variants={{
            initial: { rotateY: -20, x: 60, z: -100 },
            animate: { rotateY: -15, x: 30, z: -50 },
            hover: { rotateY: -5, x: "-85%", z: 20, rotateZ: -6, scale: 1.05 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute w-[45%] md:w-[40%] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10"
        >
          <Image
            src="/nmfe-ig.jpg"
            alt="NMFe Instagram"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Qsera Phone (Right) */}
        <motion.div
          variants={{
            initial: { rotateY: 20, x: -60, z: -100 },
            animate: { rotateY: 15, x: -30, z: -50 },
            hover: { rotateY: 5, x: "85%", z: 20, rotateZ: 6, scale: 1.05 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute w-[45%] md:w-[40%] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20"
        >
          <Image
            src="/qsera-ig.jpg"
            alt="Qsera Instagram"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Neolayr Pro Phone (Center) */}
        <motion.div
          variants={{
            initial: { y: 50, z: 0 },
            animate: { y: 0, z: 50 },
            hover: { y: "-5%", z: 80, scale: 1.1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-[50%] md:w-[45%] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] border-white z-30 bg-white"
        >
          <Image
            src="/insta-handle.jpg"
            alt="Neolayr Pro Instagram"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    ),
    color: "bg-[#f0fdf4]",
  },
];

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative bg-white pb-[30vh]"
    >
      {/* Background that stays sticky */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="sticky top-0 h-screen w-full">
          <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-pink-100 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-purple-100 blur-[120px] rounded-full" />
        </div>
      </div>

      {experiences.map((exp, index) => {
        return (
          <Card
            key={exp.id}
            exp={exp}
            index={index}
            progress={scrollYProgress}
            total={experiences.length}
          />
        );
      })}
    </section>
  );
}

function Card({
  exp,
  index,
  progress,
  total,
}: {
  exp: any;
  index: number;
  progress: any;
  total: number;
}) {
  // Each card becomes sticky when its top reaches the viewport
  // We offset the top by index * 40px to create a stacked deck effect

  const targetScale = 1 - (total - index) * 0.05;

  const range = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.5]);

  return (
    <div
      className="sticky flex items-center justify-center w-full h-screen"
      style={{ top: `0px` }}
    >
      <motion.div
        style={{ scale, opacity, top: `calc(5vh + ${index * 25}px)` }}
        className={`relative flex flex-col lg:flex-row w-[90vw] max-w-6xl h-[85vh] lg:h-[75vh] ${exp.color} rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden transform-origin-top p-6 md:p-12 gap-8 lg:gap-16`}
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/50 px-4 py-2 rounded-full border border-white shadow-sm w-fit">
            {exp.icon}
            <span className="text-sm font-bold text-foreground uppercase tracking-wider">
              Experience 0{exp.id}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-black mb-8 text-foreground tracking-tight drop-shadow-sm">
            {exp.title}
          </h3>

          {exp.content}
        </div>

        {/* Right Visuals */}
        <div className="flex-1 relative h-full min-h-[300px]">{exp.visual}</div>
      </motion.div>
    </div>
  );
}

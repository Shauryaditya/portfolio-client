"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Camera, Briefcase, Play } from "lucide-react";
import React, { useRef } from "react";
import { CometCard } from "@/components/ui/comet-card";

const caseStudies = [
  {
    id: 1,
    client: "TechNova App",
    platform: "Instagram & TikTok",
    icon: <Camera className="w-5 h-5" />,
    problem: "Low user acquisition cost and stagnant organic growth post-launch.",
    strategy: "Shifted focus from polished ads to UGC-style authentic content and influencer whitelisting.",
    execution: "Launched a 4-week challenge campaign utilizing trending audio and micro-influencers.",
    metrics: [
      { label: "Engagement", value: "+320%" },
      { label: "New Followers", value: "+150K" },
      { label: "CAC Reduction", value: "45%" }
    ],
    color: "from-red-600/20 to-orange-500/20",
    border: "group-hover:border-red-500/50"
  },
  {
    id: 2,
    client: "FinServe B2B",
    platform: "LinkedIn",
    icon: <Briefcase className="w-5 h-5" />,
    problem: "Zero thought leadership presence and weak inbound lead generation.",
    strategy: "Developed a founder-led content strategy focusing on contrarian industry takes and data reports.",
    execution: "Published weekly deep-dive carousels and hosted bi-weekly live audio events.",
    metrics: [
      { label: "Inbound Leads", value: "5x" },
      { label: "Profile Views", value: "+800%" },
      { label: "Network Growth", value: "+12K" }
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: 3,
    client: "CreatorBrand",
    platform: "YouTube",
    icon: <Play className="w-5 h-5" />,
    problem: "High subscriber count but low watch time and poor conversion to merch sales.",
    strategy: "Restructured video pacing, implemented high-retention editing, and optimized community tabs.",
    execution: "Introduced integrated, story-driven merch drops instead of standard ad reads.",
    metrics: [
      { label: "Merch ROI", value: "4.2x" },
      { label: "Avg View Time", value: "+65%" },
      { label: "CTR Increase", value: "+12%" }
    ],
    color: "from-red-600/20 to-orange-500/20",
    border: "group-hover:border-red-500/50"
  }
];

function TiltCard({ study, index }: { study: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-[2rem] transition-colors duration-500 ${study.border}`}
      data-cursor="VIEW"
    >
      <CometCard>
        <div className="p-8 md:p-12">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none rounded-[2rem]`} 
            style={{ transform: "translateZ(-20px)" }}
          />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-20" style={{ transform: "translateZ(30px)" }}>
            {/* Left side: Context */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 text-white shadow-xl">
                  {study.icon}
                </span>
                <div>
                  <h3 className="text-2xl font-bold">{study.client}</h3>
                  <p className="text-sm text-foreground/60 font-medium">{study.platform}</p>
                </div>
              </div>

              <div className="space-y-6 text-foreground/80">
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-white mb-2">The Problem</h4>
                  <p>{study.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-white mb-2">The Strategy</h4>
                  <p>{study.strategy}</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-white mb-2">The Execution</h4>
                  <p>{study.execution}</p>
                </div>
              </div>
            </div>

            {/* Right side: Results */}
            <div className="flex flex-col justify-center" style={{ transform: "translateZ(40px)" }}>
              <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/5 shadow-2xl">
                <h4 className="text-lg font-semibold text-white mb-8 flex items-center gap-2">
                  <ArrowUpRight className="text-primary" />
                  Campaign Results
                </h4>
                
                <div className="grid gap-6">
                  {study.metrics.map((metric: any, i: number) => (
                    <div key={i} className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-foreground/70">{metric.label}</span>
                      <span className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CometCard>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-[#0a0a0a] perspective-[2000px]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Case Studies</span></h2>
          <p className="text-lg text-foreground/60 max-w-2xl">Real problems. Strategic execution. Measurable impact.</p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {caseStudies.map((study, index) => (
            <TiltCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

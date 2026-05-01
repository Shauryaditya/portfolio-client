"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Target, TrendingUp, Users } from "lucide-react";

const skills = [
  "Meta Ads", "Google Analytics", "TikTok Strategy", "LinkedIn Growth", 
  "SEO/SEM", "Content Creation", "Hootsuite", "Figma", "Copywriting", "A/B Testing"
];

const stats = [
  { icon: <Users />, value: "10M+", label: "Reach Generated" },
  { icon: <TrendingUp />, value: "3x", label: "Average ROI" },
  { icon: <Target />, value: "50+", label: "Campaigns Led" },
  { icon: <BadgeCheck />, value: "6+", label: "Years Experience" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              More than just metrics. <br />
              <span className="text-primary">I build communities.</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              With over 6 years of experience in digital marketing and social media strategy, 
              I specialize in bridging the gap between creative content and data-driven results. 
              I've helped startups and enterprise brands scale their presence, engage their audiences, 
              and drive meaningful conversions.
            </p>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              My approach isn't about chasing viral moments—it's about building sustainable 
              growth systems through deep analytics, audience psychology, and relentless optimization.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="px-4 py-2 bg-card-bg border border-card-border rounded-full text-sm font-medium text-foreground hover:border-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                className="p-8 rounded-3xl bg-card-bg border border-card-border flex flex-col items-center text-center group hover:border-primary transition-colors hover:-translate-y-2 duration-300 shadow-lg hover:shadow-primary/20"
                data-cursor="IMPACT"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-extrabold mb-2">{stat.value}</h3>
                <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

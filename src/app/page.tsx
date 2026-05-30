import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import DraggableGallery from "@/components/DraggableGallery";
import ToolsGrid from "@/components/ToolsGrid";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import { CircleRevealSection } from "@/components/ui/circle-reveal-section";
import MacbookScrollDemo from "@/components/MacbookDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      {/* <CircleRevealSection><Philosophy /></CircleRevealSection> */}
      {/* <CircleRevealSection>
        <About />
      </CircleRevealSection> */}
      <WorkExperience />
      <CircleRevealSection>
        <Services />
      </CircleRevealSection>
      <CircleRevealSection>
        <Testimonials />
      </CircleRevealSection>
      {/* <CircleRevealSection>
        <MacbookScrollDemo />
      </CircleRevealSection> */}
      {/* <CircleRevealSection>
        <DraggableGallery />
      </CircleRevealSection> */}
      <CircleRevealSection>
        <ToolsGrid />
      </CircleRevealSection>
      <CircleRevealSection>
        <Contact />
      </CircleRevealSection>

      <footer className="py-8 text-center text-sm text-foreground/40 border-t border-white/5 relative z-20 bg-background">
        <p>© {new Date().getFullYear()} SocialPro. All rights reserved.</p>
      </footer>
    </main>
  );
}

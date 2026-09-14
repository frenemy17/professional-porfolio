"use client";

import Image from "next/image";
import Hero from "@/components/ui/neural-network-hero";
import DotGrid from "@/components/DotGrid";
import { CometCard } from "@/components/ui/comet-card";
import GradualBlur from "@/components/GradualBlur";
import { MarqueeDemo } from "@/components/marqueewrap";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function Portfolio() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    
    <div className="bg-black text-white relative">

       {/* Navigation */}
      
       <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-light text-white" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Portfolio</div>
            <div className="flex space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-all duration-300 text-sm px-4 py-2 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
                  style={{fontFamily: 'var(--font-jetbrains-mono)'}}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10">
        <Hero 
          title="Siddhanth Raikar"
          description={<LayoutTextFlip text="Aspiring AI Engineer" words={["Applied AI & Agentic Systems", "Multi-Agent Orchestration", "RAG Pipelines & ChromaDB", "FastAPI & LangGraph Expert"]} duration={2500} />}
          badgeText="Portfolio"
          badgeLabel="2026"
          ctaButtons={[
            { text: "Download Resume", href: "/resume.pdf", primary: true, download: true },
            { text: "Contact Me", href: "#contact" }
          ]}
          microDetails={["Python", "LangGraph", "FastAPI", "Gemini API"]}
        />
      </section>

      {/* Tech Stack Marquee */}
      <section className="relative py-16 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <MarqueeDemo/>
        </div>
      </section>
      

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center px-6 py-32 z-10">
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={4}
            gap={12}
            baseColor="#1a1a1a"
            activeColor="#3b82f6"
            proximity={100}
            shockRadius={200}
            shockStrength={4}
            resistance={800}
            returnDuration={1.2}
          />
        </div>
        <div className="relative max-w-7xl mx-auto z-10">
          <h2 className="text-5xl font-thin mb-16 text-center" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="z-10">
              <CometCard className="w-auto h-auto">
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-full">
                  <Image
                    src="/pic2.jpeg"
                    alt="Profile"
                    width={800}
                    height={800}
                    className="w-full h-128 object-cover opacity-70"
                    priority
                  />
                </div>
              </CometCard>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-3" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                  Applied AI &amp; Agentic Systems Focus
                </p>
                <p className="text-lg text-white/90 leading-relaxed mb-4" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                  <b>AI/Data Science undergraduate with hands-on experience designing end-to-end agentic AI workflows, multi-agent orchestration systems, and RAG pipelines.</b>
                </p>
                <p className="text-base text-white/70 leading-relaxed mb-6" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                  Proficient in Python, LangGraph, Scikit-learn, and vector databases (ChromaDB), paired with solid backend API development (FastAPI, Node.js). Looking to apply this production-oriented AI/ML experience as an AI/ML Intern.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <p className="text-xs uppercase tracking-widest text-white/40" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                  Education
                </p>
                <div>
                  <div className="flex justify-between items-baseline text-sm text-white/90 font-medium" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                    <span>Bachelor of Technology, Data Science</span>
                    <span className="text-xs text-white/50">2024 – 2028</span>
                  </div>
                  <div className="text-xs text-white/60 mt-0.5" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                    Newton School of Technology, Rishihood University | CGPA: 7.64 / 10.0
                  </div>
                </div>
                <div className="text-xs text-white/50 flex flex-wrap gap-x-4 gap-y-1" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
                  <span>Intermediate (Class XII): TLC PU College, Mangalore (91.0%)</span>
                  <span>Matriculation (Class X): Sharada Vidyanikethana (95.6%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* Footer */}
      <footer className="relative bg-black/50 backdrop-blur-sm border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-light text-white mb-2" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Siddhanth Raikar</h3>
            <p className="text-white/60 text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
              Aspiring AI Engineer · Applied AI &amp; Agentic Systems
            </p>
          </div>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#home" className="text-white/50 hover:text-white transition-colors text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Home</a>
            <a href="#about" className="text-white/50 hover:text-white transition-colors text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>About</a>
            <a href="#projects" className="text-white/50 hover:text-white transition-colors text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Projects</a>
            <a href="#contact" className="text-white/50 hover:text-white transition-colors text-sm" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Contact</a>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/40 text-xs" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
              © 2026 Siddhanth Raikar. Built with Next.js, Framer Motion & Three.js
            </p>
          </div>
        </div>
      </footer>
      
      {/* Bottom Gradual Blur */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-50">
        <GradualBlur
          target="parent"
          position="bottom"
          height="4rem"
          strength={3}
          divCount={6}
          curve="bezier"
          exponential={true}
          opacity={0.8}
        />
      </div>
    </div>
  );
}
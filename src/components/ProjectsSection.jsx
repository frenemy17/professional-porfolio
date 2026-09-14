"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { PinContainer } from "./ui/3d-pin";

export default function ProjectsSection() {
  const features = [
    {
      title: "EstateX",
      tagline: "AI-Powered Real Estate Lead Management Platform",
      bullets: [
        "Architected a multi-agent orchestration system with LangGraph and the Google Gemini API — a state-machine pipeline with conditional routing and human-in-the-loop interrupts that autonomously qualifies, scores, and nurtures real estate leads.",
        "Engineered an LLM-driven supervisor agent that delegates work across specialized nodes (qualification, sentiment analysis, follow-ups), with async checkpointing and persistent memory via MongoDB Atlas.",
        "Shipped a production-grade FastAPI backend — 138+ automated tests, JWT authentication, deployed across Vercel and Render with CI/CD."
      ],
      tech: ["Python", "LangGraph", "Google Gemini API", "FastAPI", "MongoDB Atlas", "JWT", "Pytest"],
      github: "https://github.com/frenemy17/estatex.git",
      demo: "https://estatex-dun.vercel.app/",
      skeleton: (
        <ProjectPin
          title="EstateX Demo"
          href="https://estatex-dun.vercel.app/"
          image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
        />
      ),
      className: "col-span-1 lg:col-span-3 border-b lg:border-r border-white/10",
    },
    {
      title: "GemTrack",
      tagline: "Full-Stack POS & Inventory Platform",
      date: "November 2025",
      bullets: [
        "Built a production full-stack POS and inventory system for active jewelry retail users, integrating real-time GoldAPI market pricing into live billing and settlement.",
        "Optimized server-side search and data pipelines to handle 10,000+ inventory items with live purity, weight, and HUID tracking.",
        "Delivered a CRM and analytics layer with detailed customer profiles and sales logs to support data-driven business decisions."
      ],
      tech: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "GoldAPI"],
      github: "https://github.com/frenemy17/gemTrack",
      demo: "https://gem-track-five.vercel.app/",
      skeleton: (
        <ProjectPin
          title="GemTrack Demo"
          href="https://gem-track-five.vercel.app/"
          image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
        />
      ),
      className: "col-span-1 lg:col-span-3 border-b border-white/10",
    },
    {
      title: "Wraft",
      tagline: "AI-Powered Chatbot SaaS Platform",
      bullets: [
        "Built a multi-tenant SaaS platform enabling businesses to create custom AI chatbots trained on their own data (PDFs, URLs, sitemaps), with RAG-based retrieval, vector similarity search, and automated knowledge-base retraining via cron pipelines.",
        "Engineered real-time chat across web widget and WhatsApp (Meta Cloud API) channels, with conversation analytics, lead capture, usage-based billing via Razorpay, and quiet-hour-aware owner notifications.",
        "Implemented a full ingestion pipeline (extraction → chunking → embedding → vector storage) with Gemini embeddings, Redis-backed response caching, rate limiting, and an admin analytics dashboard."
      ],
      tech: ["Next.js", "FastAPI", "Supabase", "Redis", "Gemini AI", "Razorpay"],
      github: null,
      demo: "https://wraft-website-phi.vercel.app/",
      skeleton: (
        <ProjectPin
          title="Wraft Demo"
          href="https://wraft-website-phi.vercel.app/"
          image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
        />
      ),
      className: "col-span-1 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-white/10",
    },
    {
      title: "Intelligent Exam Question Analysis & Agentic Assessment Design",
      tagline: "ML & Agentic Assessment Design",
      bullets: [
        "Built a Bloom’s Taxonomy classifier (91.19% accuracy, Logistic Regression + Random Forest Voting Ensemble) and a TF-IDF-based difficulty predictor (Easy/Moderate/Hard).",
        "Built a 5-node LangGraph agent for autonomous gap analysis, identifying learning gaps and generating targeted assessment recommendations.",
        "Implemented an evidence-based RAG pipeline with ChromaDB, grounded in 10+ educational frameworks for context-aware outputs."
      ],
      tech: ["Python", "Streamlit", "Scikit-learn", "LangGraph", "ChromaDB", "Groq AI", "TF-IDF", "Voting Ensembles"],
      github: "https://github.com/frenemy17/genAI-project.git",
      demo: "https://genai-project-3tze9npwg4iz22mhjssdq3.streamlit.app/",
      skeleton: (
        <ProjectPin
          title="Exam Intelligence Demo"
          href="https://genai-project-3tze9npwg4iz22mhjssdq3.streamlit.app/"
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
        />
      ),
      className: "col-span-1 lg:col-span-3",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="relative z-20 py-20 lg:py-40 max-w-7xl mx-auto">
        <div className="px-8">
          <h2 className="text-4xl lg:text-6xl font-thin leading-tight max-w-5xl mx-auto text-center tracking-tight text-white mb-4" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
            Featured Projects
          </h2>
          <p className="text-lg lg:text-xl max-w-2xl my-4 mx-auto text-white/70 text-center font-light" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
            A showcase of my recent work across agentic AI workflows, multi-agent orchestration, and production-grade full-stack systems.
          </p>
        </div>
        <div className="relative px-6">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 border rounded-2xl border-white/10 overflow-hidden backdrop-blur-sm bg-white/[0.02]">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    {feature.date && (
                      <span className="text-xs text-white/40 font-mono whitespace-nowrap">{feature.date}</span>
                    )}
                  </div>
                  {feature.tagline && (
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-3 font-mono">
                      {feature.tagline}
                    </p>
                  )}

                  <ul className="text-xs text-white/65 space-y-2 mb-4 font-mono leading-relaxed list-disc list-outside pl-4">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {feature.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Embedded Links */}
                  <div className="flex items-center gap-4 mb-6 text-xs font-mono">
                    {feature.github && (
                      <a
                        href={feature.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white flex items-center gap-1.5 transition-colors underline decoration-white/30 underline-offset-4"
                      >
                        <span>GitHub ↗</span>
                      </a>
                    )}
                    {feature.demo && (
                      <a
                        href={feature.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white flex items-center gap-1.5 transition-colors underline decoration-white/30 underline-offset-4"
                      >
                        <span>Live Demo ↗</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-6 sm:p-8 relative overflow-hidden hover:bg-white/[0.02] transition-all duration-500 flex flex-col justify-between`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <h3 className="text-xl md:text-2xl font-light tracking-tight text-white mb-1 leading-snug" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
      {children}
    </h3>
  );
};

const ProjectPin = ({ title, href, image }) => {
  return (
    <div className="h-[380px] w-full flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 w-[300px] h-[300px]">
          <h3 className="max-w-xs !pb-2 !m-0 font-light text-xl text-slate-100" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
            {title}
          </h3>

          {image ? (
            <div className="flex flex-1 w-full rounded-xl overflow-hidden mt-2">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="flex flex-1 w-full rounded-xl bg-gradient-to-br from-violet-500/80 via-purple-500/80 to-blue-500/80 mt-2" />
          )}
        </div>
      </PinContainer>
    </div>
  );
};
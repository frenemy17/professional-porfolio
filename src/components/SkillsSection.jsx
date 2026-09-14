"use client";
import { useRef, useEffect } from 'react';
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Meteors } from "@/components/ui/meteors";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const marqueeRef = useRef(null);

  const techStack = [
    "/icons/python.svg",
    "/icons/fastapi.svg",
    "/icons/react.svg",
    "/icons/nextjs.svg",
    "/icons/typescript.svg",
    "/icons/javascript.svg",
    "/icons/nodejs.svg",
    "/icons/tailwindcss.svg",
    "/icons/postgresql.svg",
    "/icons/mongodb.svg",
    "/icons/redis.svg",
    "/icons/supabase.svg",
    "/icons/docker.svg",
    "/icons/git.svg",
    "/icons/figma.svg",
    "/icons/framer.svg",
    "/icons/html5.svg",
    "/icons/css3.svg",
    "/icons/firebase.svg",
    "/icons/python.svg",
    "/icons/fastapi.svg",
    "/icons/react.svg",
    "/icons/nextjs.svg",
    "/icons/postgresql.svg"
  ];

  useGSAP(() => {
    if (!titleRef.current || !marqueeRef.current) return;

    gsap.set([titleRef.current, marqueeRef.current], {
      autoAlpha: 0,
      y: 50
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(titleRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(marqueeRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4");

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>Skills & Technologies</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>
            Technologies I work with to build modern, scalable applications
          </p>
        </div>
        
        <div ref={marqueeRef} className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-4 shadow-2xl shadow-black/50 overflow-hidden">
          <Meteors number={15} />
          <Meteors number={12} reverse={true} />
          <ThreeDMarquee images={techStack} />
        </div>
      </div>
    </section>
  );
}


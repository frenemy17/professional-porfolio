import { Marquee } from "@/components/ui/marquee"

const techLogos = [
  { name: "Python", src: "/icons/python.svg" },
  { name: "FastAPI", src: "/icons/fastapi.svg" },
  { name: "React", src: "/icons/react.svg" },
  { name: "Next.js", src: "/icons/nextjs.svg" },
  { name: "TypeScript", src: "/icons/typescript.svg" },
  { name: "Node.js", src: "/icons/nodejs.svg" },
  { name: "Tailwind CSS", src: "/icons/tailwindcss.svg" },
  { name: "PostgreSQL", src: "/icons/postgresql.svg" },
  { name: "MongoDB", src: "/icons/mongodb.svg" },
  { name: "Redis", src: "/icons/redis.svg" },
  { name: "Supabase", src: "/icons/supabase.svg" },
  { name: "Docker", src: "/icons/docker.svg" },
  { name: "Git", src: "/icons/git.svg" },
  { name: "Figma", src: "/icons/figma.svg" },
  { name: "Framer", src: "/icons/framer.svg" },
  { name: "HTML5", src: "/icons/html5.svg" },
  { name: "CSS3", src: "/icons/css3.svg" }
];

export function MarqueeDemo() {
  return (
    <div className="relative bg-black/10 backdrop-blur-md rounded-2xl p-6 overflow-hidden z-100">
      {/* Left fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 via-black/10 to-transparent pointer-events-none z-10" />
      {/* Right fade effect */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
      
      <Marquee className="py-4 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        {techLogos.map((tech, index) => (
          <div
            key={index}
            className="mx-8 flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
          >
            <img 
              src={tech.src} 
              alt={tech.name}
              className="h-8 w-8 object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
            />
            <span className="font-medium" style={{fontFamily: 'var(--font-jetbrains-mono)'}}>{tech.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
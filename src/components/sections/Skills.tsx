import React from "react";
import BlurText from "@/components/BlurText.tsx";
import TiltedCard from "@/components/TiltedCard.tsx";

const skills = [
  {
    id: "01",
    category: "CORE\nARCHITECTURE",
    description: "Building scalable front-end foundations.",
    tech: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vite", "Node.js"],
    status: "MASTERY",
  },
  {
    id: "02",
    category: "CREATIVE\nENGINEERING",
    description: "Bridging the gap between design and code.",
    tech: ["WebGL / Three.js", "Framer Motion", "GLSL Shaders", "Tailwind CSS", "GSAP", "Canvas API"],
    status: "HIGH_FIDELITY",
  },
  {
    id: "03",
    category: "SYSTEM\nINTELLIGENCE",
    description: "Expanding into AI and automation pipelines.",
    tech: ["Python", "TensorFlow", "RAG Pipelines", "LLM Integration", "OpenAI API", "HuggingFace"],
    status: "LOADING",
  },
];

const Skills: React.FC = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10 flex flex-col max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-white uppercase leading-[0.85] tracking-tighter">
            <BlurText
              text={"SYSTEM\nMODULES"}
              delay={110}
              animateBy="words"
              direction="bottom"
              className="whitespace-pre-line"
            />
          </div>

          <div className="max-w-xs font-mono text-xs text-zinc-500 leading-relaxed border-t border-zinc-800 pt-4 md:border-t-0 md:pt-0">
             // INITIALIZING SUBSYSTEMS...
            <br />
             // LOADING SKILL MATRICES...
            <br />
             // READY.
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill) => (
            <TiltedCard
              key={skill.id}
              imageSrc="https://placehold.co/600x800/050505/050505.png"
              altText={skill.category}
              captionText={`// ${skill.id} - ${skill.status}`}
              containerHeight="500px"
              containerWidth="100%"
              imageHeight="500px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="w-full h-full p-8 flex flex-col justify-between bg-black/40 backdrop-blur-sm border border-white/10 hover:border-crimson/50 transition-colors duration-500">

                  {/* Holographic Scanline Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none z-0" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <span className="font-mono text-sm text-crimson tracking-widest font-bold">
                        {skill.id} // {skill.status}
                      </span>
                      <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/20" />
                    </div>

                    <h3 className="font-display text-5xl font-bold text-zinc-400 mb-6 leading-[0.85] tracking-tighter uppercase whitespace-pre-line break-all group-hover:text-white transition-colors duration-300">
                      <BlurText
                        text={skill.category}
                        delay={110}
                        animateBy="words"
                        direction="bottom"
                        className="whitespace-pre-line"
                      />
                    </h3>

                    <div className="border-l-2 border-zinc-800 pl-4 py-1 mb-8">
                      <p className="font-mono text-sm text-zinc-500">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {skill.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

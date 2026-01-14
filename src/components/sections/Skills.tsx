import React, { useState } from "react";
import { motion } from "framer-motion";
import BlurText from "@/components/BlurText.tsx";

const skills = [
  {
    id: "01",
    category: "CORE ARCHITECTURE",
    description: "Building scalable front-end foundations.",
    tech: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js"],
    status: "MASTERY",
  },
  {
    id: "02",
    category: "CREATIVE ENGINEERING",
    description: "Bridging the gap between design and code.",
    tech: ["WebGL / Three.js", "Framer Motion", "GLSL Shaders", "Tailwind CSS"],
    status: "HIGH_FIDELITY",
  },
  {
    id: "03",
    category: "SYSTEM INTELLIGENCE",
    description: "Expanding into AI and automation pipelines.",
    tech: ["Python", "TensorFlow", "RAG Pipelines", "LLM Integration"],
    status: "LOADING",
  },
];

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-black">
      <div className="flex flex-col">
        <div className="flex items-end gap-6 mb-16">
          {/* Instead of raw h2 text, use BlurText */}
          <div className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-white/10 uppercase leading-[0.85]">
            <BlurText
              text={"CAPA\nBILITY"}
              delay={110}
              animateBy="words"
              direction="top"
              className="whitespace-pre-line"
            />
          </div>

          <div className="mb-2 font-mono text-crimson text-[10px] sm:text-xs tracking-widest">
            // TECH_STACK_INIT
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-10 top-0 bottom-0 w-px bg-white/10" />

          <div className="flex flex-col gap-12">
            {skills.map((skill, index) => {
              const isEven = index % 2 === 0;
              const cardWidth = index === 1 ? "md:max-w-3xl" : "md:max-w-2xl";
              const offsetClass = isEven ? "md:translate-x-16" : "md:-translate-x-8";
              const nodeSize = index === 2 ? "w-5 h-5" : "w-4 h-4";
              const dotSize = index === 2 ? "w-2.5 h-2.5" : "w-2 h-2";
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
                className={`group relative pl-12 md:pl-20 ${offsetClass}`}
              >
                <div className="absolute left-2 md:left-8 top-3">
                  <div className={`${nodeSize} rounded-full border border-white/30 bg-black group-hover:border-crimson transition-colors`} />
                  <div className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${dotSize} rounded-full bg-crimson scale-0 group-hover:scale-100 transition-transform`} />
                </div>

                <div className={`relative border border-white/10 bg-surface/40 backdrop-blur-sm p-5 sm:p-6 md:p-8 overflow-hidden ${cardWidth}`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-r from-crimson/10 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative z-10">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] sm:text-xs text-crimson opacity-70">/{skill.id}</span>
                      <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                        <BlurText
                          text={skill.category}
                          delay={35}
                          animateBy="words"
                          direction="top"
                          className="inline-block"
                        />
                      </div>
                    </div>

                    <div className="md:max-w-md text-dim text-xs sm:text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <BlurText
                        text={`[${skill.description}]`}
                        delay={12}
                        animateBy="words"
                        direction="top"
                        className="inline-block"
                      />
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {skill.tech.map((item, i) => (
                      <span
                        key={i}
                        className={`font-mono text-xs sm:text-sm transition-colors duration-300 ${
                          activeSkill === index ? "text-white" : "text-white/40"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeSkill === index ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-crimson origin-left"
                  />
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

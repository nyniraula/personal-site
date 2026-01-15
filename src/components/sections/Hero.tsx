import React from "react";
import { motion } from "motion/react";
import TopoBackground from "@/components/TopoBackground";
import GradualBlur from '@/components/GradualBlur';


const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-24 bg-white/5 overflow-hidden">

      {/* === Topo Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <TopoBackground />

        {/* <Suspense fallback={<div className="w-full h-full" />}>
          <Dither
            colorNum={15.1}
            waveAmplitude={1}
            waveFrequency={1.7}
             waveSpeed={0.09}
            enableMouseInteraction={false}
          />
        </Suspense> */}

        {/* Contrast / vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/20" />
      </div>

      {/* === Header / Identity Status === */}
      <div className="absolute top-6 sm:top-8 md:top-12 left-6 sm:left-10 md:left-12 flex items-center gap-4 text-xs md:text-sm font-mono text-zinc-600 tracking-widest z-20">
        <span className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
        <span>SYSTEM ONLINE</span>
        <span className="hidden md:inline text-zinc-400"> // V.2026.1</span>
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 flex flex-col gap-2">

        {/* Role Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-crimson text-sm md:text-base tracking-[0.2em] mb-4"
        >
          DESIGN TECHNOLOGIST
        </motion.div>

        {/* Titles */}
        <div className="relative mt-8 sm:mt-0">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(4rem,15vw,10rem)] font-bold leading-[0.85] tracking-tighter text-black"
          >
            NIYAM
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display font-semibold text-zinc-800 tracking-[0.3em] uppercase
             text-[clamp(0.7rem,1.5vw,0.95rem)] mt-3 sm:mt-2 pl-1"
          >
            NIRAULA
          </motion.div>



          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-[clamp(4rem,15vw,10rem)] font-bold leading-[0.85] tracking-tighter text-transparent opacity-30 pl-4 sm:pl-10 md:pl-32 absolute top-0 left-0 w-full pointer-events-none mix-blend-multiply"
            style={{ WebkitTextStroke: "1px rgba(0, 0, 0, 0.3)" }}
          >
            ROOT
          </motion.h1>
        </div>

        {/* Second BETA */}
        <div className="-mt-[0.6em] sm:-mt-[0.9em] pl-4 sm:pl-10 md:pl-32 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-[clamp(4rem,15vw,10rem)] font-bold leading-[0.85] tracking-tighter text-transparent opacity-30"
            style={{ WebkitTextStroke: "1px rgba(0, 0, 0, 0.3)" }}
          >
            ALPHA //
          </motion.h1>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 md:mt-12 max-w-xl flex flex-col gap-4"
        >
          <p className="font-mono text-sm md:text-base text-zinc-600 leading-relaxed">
            {/* OPERATING AT THE INTERSECTION OF HIGH-FIDELITY UI SYSTEMS, MOTION, AND ARTIFICIAL INTELLIGENCE. */}
          </p>

          <div className="flex gap-4 text-xs font-mono text-zinc-500">
            <span>[ JS ]</span>
            <span>[ PYTHON ]</span>
            <span>[ DESIGN ]</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Index */}
      <div className="absolute right-0 bottom-0 p-12 hidden md:block opacity-20 z-10">
        <div className="text-[clamp(5rem,12vw,10rem)] font-display font-bold leading-none text-right text-black">
          01
        </div>
      </div>

      {/* Bottom Fade Gradient */}


      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />

    </section>
  );
};

export default Hero;




import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
// import Silk from "@/components/Silk";

const Dither = lazy(() => import("@/components/Dither.tsx"));


const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-24 bg-black overflow-hidden">

      {/* === Silk Background === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <Silk 
          speed={5}
          scale={1}
          color="#fcbdbd"
          noiseIntensity={0}
          rotation={0}
        /> */}

        <Suspense fallback={<div className="w-full h-full" />}>
          <Dither
            colorNum={15.1}
            waveAmplitude={1}
            waveFrequency={1.7}
             waveSpeed={0.09}
            enableMouseInteraction={false}
          />
        </Suspense>

        {/* Contrast / vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />
      </div>

      {/* === Header / Identity Status === */}
      <div className="absolute top-6 sm:top-8 md:top-12 left-6 sm:left-10 md:left-12 flex items-center gap-4 text-xs md:text-sm font-mono text-dim tracking-widest z-20">
        <span className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
        <span>SYSTEM ONLINE</span>
        <span className="hidden md:inline text-dim/50"> // V.2026.1</span>
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
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3.25rem,10vw,10rem)] font-bold leading-[0.9] tracking-tighter"
          >
            NIYAM
          </motion.h1>

          <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.35 }}
  className="font-display font-semibold text-white/90 tracking-[0.3em] uppercase
             text-[clamp(0.6rem,1.4vw,0.95rem)] mt-2"
>
NIRAULA
</motion.div>



          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-[clamp(3.25rem,10vw,10rem)] font-bold leading-[0.9] tracking-tighter text-transparent opacity-50 pl-6 sm:pl-10 md:pl-32 absolute top-0 left-0 w-full pointer-events-none"
            style={{ WebkitTextStroke: "2px rgba(237, 237, 237, 0.3)" }}
          >
            ROOT
          </motion.h1>
        </div>

        {/* Second BETA */}
        <div className="-mt-[0.8em] sm:-mt-[0.9em] pl-6 sm:pl-10 md:pl-32 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display text-[clamp(3.25rem,10vw,10rem)] font-bold leading-[0.9] tracking-tighter text-transparent"
            style={{ WebkitTextStroke: "2px rgba(237, 237, 237, 0.3)" }}
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
          <p className="font-mono text-sm md:text-base text-dim leading-relaxed">
            {/* OPERATING AT THE INTERSECTION OF HIGH-FIDELITY UI SYSTEMS, MOTION, AND ARTIFICIAL INTELLIGENCE. */}
          </p>

          <div className="flex gap-4 text-xs font-mono text-white/60">
            <span>[ JS ]</span>
            <span>[ PYTHON ]</span>
            <span>[ DESIGN ]</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Index */}
        <div className="absolute right-0 bottom-0 p-12 hidden md:block opacity-20 z-10">
        <div className="text-[clamp(5rem,12vw,10rem)] font-display font-bold leading-none text-right">
          01
        </div>
      </div>
    
 
    </section>
  );
};

export default Hero;


 

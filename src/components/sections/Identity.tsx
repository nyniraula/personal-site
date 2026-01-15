import React from "react";
import DecryptionText from '@/components/ui/DecryptionText';


const Identity: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center bg-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden">

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Side: Massive Typography */}
                <div className="flex flex-col select-none leading-[0.8]">
                    <h2 className="font-display font-bold text-white text-[clamp(5rem,18vw,12rem)] tracking-tighter">
                        <DecryptionText text="IDEN" speed={100} className="text-white" />
                    </h2>
                    <h2 className="font-display font-bold text-white text-[clamp(5rem,18vw,12rem)] tracking-tighter">
                        <DecryptionText text="TITY" speed={100} className="text-white" />
                    </h2>
                </div>

                {/* Right Side: Content & Stats */}
                <div className="flex flex-col gap-12">

                    {/* Bio Box */}
                    <div className="border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
                        <div className="font-mono text-crimson text-xs tracking-widest mb-6">
                            [ BIO_SUMMARY ]
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-8">
                            I am a Design Technologist operating at the intersection of high-fidelity UI systems, motion, and Artificial Intelligence.
                        </h3>

                        <div className="font-mono text-xs md:text-sm text-zinc-500 leading-relaxed uppercase">
                            Currently engineering scalable frontend architectures and AI integrated tools. Formerly optimizing banking delivery systems.
                            <br />
                            <span className="opacity-50 mt-2 block">[CITE: JS, PY, UI]</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        {/* Stat 1 */}
                        <div className="border border-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                            <div className="font-display text-2xl md:text-3xl font-bold text-white mb-2">04+</div>
                            <div className="font-mono text-[10px] text-zinc-500 tracking-wider">EXP_YEARS</div>
                        </div>

                        {/* Stat 2 */}
                        <div className="border border-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                            <div className="font-display text-2xl md:text-3xl font-bold text-white mb-2">+35%</div>
                            <div className="font-mono text-[10px] text-zinc-500 tracking-wider">AVG_SPEED_UP</div>
                        </div>

                        {/* Stat 3 */}
                        <div className="border border-white/10 p-6 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                            <div className="font-display text-2xl md:text-3xl font-bold text-white mb-2">BLR_IN</div>
                            <div className="font-mono text-[10px] text-zinc-500 tracking-wider">LOC_ORIGIN</div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Identity;

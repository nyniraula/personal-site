import React from 'react';
import DecryptionText from '../ui/DecryptionText';

const Identity: React.FC = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 border-t border-white/10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">

                {/* Left Column: Header */}
                <div className="w-full md:w-1/3">
                    <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
                        <DecryptionText text="IDENTITY" />
                    </h2>
                    <div className="font-mono text-dim text-xs tracking-widest uppercase">
             // SYSTEM_PROFILE_V2.2
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="w-full md:w-2/3 flex flex-col gap-8">

                    {/* Bio Card */}
                    <div className="p-6 md:p-8 border border-white/10 bg-surface/50 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-crimson transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                        <div className="font-mono text-xs text-crimson mb-2">[ BIO_SUMMARY ]</div>
                        <p className="font-urban font-semibold text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                            I am a Design Technologist operating at the intersection of high-fidelity UI systems, motion, and Artificial Intelligence.
                        </p>
                        <div className="mt-8 font-mono text-xs text-dim max-w-lg leading-relaxed">
                            CURRENTLY ENGINEERING SCALABLE FRONTEND ARCHITECTURES AND AI INTEGRATED TOOLS. FORMERLY OPTIMIZING BANKING DELIVERY SYSTEMS.
                            <br />
                            [CITE: JS, PY, UI]
                        </div>
                    </div>

                    {/* Stats / Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                            <div className="font-display text-2xl font-bold">04+</div>
                            <div className="font-mono text-[10px] text-dim tracking-widest">EXP_YEARS</div>
                        </div>
                        <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                            <div className="font-display text-2xl font-bold">+35%</div>
                            <div className="font-mono text-[10px] text-dim tracking-widest">AVG_SPEED_UP</div>
                        </div>
                        <div className="border border-white/10 p-6 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                            <div className="font-display text-2xl font-bold">BLR_IN</div>
                            <div className="font-mono text-[10px] text-dim tracking-widest">LOC_ORIGIN</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Identity;

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: "01",
        title: "NEURAL_INTERFACE",
        description: "Visualizing high-dimensional data streams using WebGL instancing.",
        tech: ["REACT", "THREE.JS", "GLSL"],
        link: "#"
    },
    {
        id: "02",
        title: "QUANTUM_DASHBOARD",
        description: "Real-time analytics platform for distributed systems monitoring.",
        tech: ["NEXT.JS", "TAILWIND", "WEBSOCKETS"],
        link: "#"
    },
    {
        id: "03",
        title: "SYNTH_ARCHITECT",
        description: "Browser-based modular synthesizer and audio visualization engine.",
        tech: ["WEB AUDIO API", "CANVAS", "TYPESCRIPT"],
        link: "#"
    }
];

const Projects: React.FC = () => {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 border-t border-white/10">
            <div className="flex flex-col gap-16">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-none">
                        SELECTED<br /><span className="text-dim">WORKS</span>
                    </h2>
                    <div className="font-mono text-[10px] sm:text-xs text-crimson mb-2">
                        [ DEPLOYED_SYSTEMS ]
                    </div>
                </div>

                {/* Projects List */}
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative border-t border-white/10 py-10 sm:py-12 flex flex-col md:flex-row gap-8 md:items-center justify-between hover:bg-white/5 transition-colors px-4 -mx-4"
                        >
                            {/* ID & Title */}
                            <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-center flex-1">
                                <span className="font-mono text-xs sm:text-sm text-dim group-hover:text-crimson transition-colors">
                                    /{project.id}
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-bold group-hover:translate-x-2 transition-transform duration-300 break-words">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Description & Tech */}
                            <div className="flex flex-col md:flex-row gap-8 md:items-center md:flex-1 justify-end">
                                <p className="font-urban font-semibold text-dim text-sm max-w-xs text-right hidden md:block">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 justify-end">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 border border-white/20 text-[10px] font-mono rounded-full uppercase text-white/60 group-hover:border-crimson/50 group-hover:text-crimson transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Arrow Icon */}
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-crimson group-hover:border-crimson transition-all duration-300 transform -rotate-45 group-hover:rotate-0">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;

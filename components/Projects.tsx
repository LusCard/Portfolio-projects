import React from 'react';
import Section from './Section';

export default function Projects() {
    const projects = [
        {
            title: "Plataforma de Análisis de Marketing (Server MCP)",
            category: "Backend Development",
            tech: "MCP • Backend",
            description: [
                "Desarrollo de un servidor basado en el Model Context Protocol (MCP) para optimizar estrategias de marketing mediante la comparación automatizada de búsquedas web."
            ],
            video: null
        },
        {
            title: "Plataforma de Administración Agropecuaria",
            category: "Web Platform",
            tech: "SOA • Full Stack",
            description: [
                "Diseño y desarrollo de una plataforma modular siguiendo una Arquitectura Orientada a Servicios (SOA) para la gestión integral de explotaciones agropecuarias."
            ],
            video: null
        }
    ];

    return (
        <Section id="projects" title="Projects">
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-8 bg-[#112240] p-6 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300">
                        {/* Text Content */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-[#ccd6f6]">{project.title}</h3>
                            <p className="text-lg text-[#64ffda] mb-4">{project.category}</p>
                            <p className="text-sm text-[#8892b0] mb-4 font-mono">{project.tech}</p>
                            <ul className="list-none space-y-2">
                                {project.description.map((item, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-[#64ffda] mt-1.5">▹</span>
                                        <span className="text-[#8892b0]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Video Card */}
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="aspect-video bg-[#0a192f] rounded-lg overflow-hidden border border-[#233554] shadow-lg flex items-center justify-center relative group">
                                {/* Placeholder for actual video or thumbnail */}
                                {project.video ? (
                                    <>
                                        <div className="absolute inset-0 flex items-center justify-center text-[#64ffda] opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                            <span className="text-4xl">▶</span>
                                        </div>
                                        <video
                                            src={project.video}
                                            className="w-full h-full object-cover"
                                            controls
                                            muted
                                            loop
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-[#8892b0]">
                                        <span className="text-4xl mb-2">💻</span>
                                        <span className="text-sm">No Preview</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-center text-sm text-[#8892b0] mt-2 italic text-[#64ffda]">
                                {project.video ? "Watch Demo" : "Screenshot Coming Soon"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

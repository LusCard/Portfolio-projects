import React from 'react';
import Section from './Section';

export default function Experience() {
    const experiences = [
        {
            title: "Desarrollador Mobile (Pasantía)",
            company: "Subsecretaría de Recursos Humanos, Formosa",
            period: "Abril 2025 - Diciembre 2025",
            description: [
                "Responsable de la implementación y desarrollo de una aplicación móvil.",
                "Desarrollo de módulos de autenticación de usuarios y gestión de sesiones seguras.",
                "Implementación de funcionalidades de tiempo real (foros y chat) con Socket.io e integración de servicios de Inteligencia Artificial para un módulo de trivia.",
                "Desarrollo de la sección 'Perfil de Usuario' con métricas de gamificación y gestión de datos bibliográficos."
            ],
            video: null // Placeholder for future use
        }
    ];

    return (
        <Section id="experience" title="Experience">
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-8 bg-[#112240] p-6 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300">
                        {/* Text Content */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-[#ccd6f6]">{exp.title}</h3>
                            <p className="text-lg text-[#64ffda] mb-4">{exp.company} • {exp.period}</p>
                            <ul className="list-none space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-[#64ffda] mt-1.5">▹</span>
                                        <span className="text-[#8892b0]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Video Card */}
                        {exp.video && (
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <div className="aspect-video bg-[#0a192f] rounded-lg overflow-hidden border border-[#233554] shadow-lg flex items-center justify-center relative group">
                                    {/* Placeholder for actual video or thumbnail */}
                                    <div className="absolute inset-0 flex items-center justify-center text-[#64ffda] opacity-50 group-hover:opacity-100 transition-opacity">
                                        <span className="text-4xl">▶</span>
                                    </div>
                                    <video
                                        src={exp.video}
                                        className="w-full h-full object-cover"
                                        controls
                                        muted
                                        loop
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <p className="text-center text-sm text-[#8892b0] mt-2 italic">Feature Demo</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

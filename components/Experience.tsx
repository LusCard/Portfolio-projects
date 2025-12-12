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
            video: "/assets/videos/LediMob.mp4"
        }
    ];

    return (
        <Section id="experience" title="Mi Experiencia">
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

                        {exp.video && (
                            <div className="w-full md:w-auto flex-shrink-0 flex flex-col items-center">
                                <div className="w-64 aspect-[9/16] bg-[#0a192f] rounded-2xl overflow-hidden border-4 border-[#233554] shadow-lg flex items-center justify-center relative group">
                                    <video
                                        autoPlay
                                        src={exp.video}
                                        className="w-full h-full object-cover"
                                        controls
                                        muted
                                        loop
                                    >
                                        Tu navegador no soporta el tag de video.
                                    </video>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}

import React from 'react';
import Section from './Section';

export default function Education() {
    return (
        <Section id="education" title="Educación">
            <div className="space-y-10">
                <div className="relative border-l-2 border-[#233554] pl-8 py-2">
                    <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-[#64ffda]"></div>
                    <h3 className="text-xl font-bold text-[#ccd6f6]">Tecnicatura Superior en Desarrollo de Software Multiplataforma</h3>
                    <p className="text-[#64ffda] italic mb-2">Instituto Politécnico Formosa | 2023 - 2025</p>
                    <p>
                        Temas Relevantes: Desarrollo Web y Mobile, Trabajo en Equipo con metodologías ágiles (SCRUM), Arquitecturas de software, Sistemas de Base de Datos, Aplicación de Inteligencia Artificial, Desarrollo Seguro y Ciberseguridad
                    </p>
                </div>

            </div>
        </Section>
    );
}

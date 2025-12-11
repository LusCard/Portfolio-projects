import React from 'react';
import Section from './Section';

export default function About() {
    return (
        <Section id="about" title="Un poco sobre mí">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                    <p className="mb-4">
                        Hola! Soy un desarrollador Full Stack y Técnico Superior en Desarrollo de Software , residente en Formosa, Argentina. Cuento con 2 años de experiencia enfocada en soluciones Web y Mobile                    </p>
                    <p className="mb-4">
                        Mi Stack Tecnológico es robusto:
                        Frontend: React, Next.js, React Native/Expo. Backend: Node.js, NestJS, Python/Django. Bases de Datos: PostgreSQL y MongoDB                    </p>
                    <p className="mb-4">
                        Este variado historial me permite adaptarme a una amplia gama de necesidades de proyectos, ya sea construyendo APIs escalables, optimizando el rendimiento de sistemas o contribuyendo a soluciones full-stack
                    </p>
                    <p className="mb-4">
                        ¡Espero con interés colaborar contigo!
                    </p>
                </div>
            </div>
        </Section>
    );
}

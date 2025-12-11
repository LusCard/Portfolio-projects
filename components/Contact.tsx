import React from 'react';
import Section from './Section';
// Importamos los iconos específicos que se necesitan
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6"; // Asumo que quieres este para Instagram

// Datos de contacto de Lucas Cárdenas, ahora con el componente de icono
const contactItems = [
    {
        title: "Email",
        value: "luquiscardenas@gmail.com",
        link: "mailto:luquiscardenas@gmail.com",
        IconComponent: FaEnvelope, // Usamos el componente como propiedad
        description: "Envíame un correo directamente."
    },
    {
        title: "Teléfono",
        value: "+54 3718 521146",
        link: "tel:+543718521146",
        IconComponent: FaPhone,
        description: "Contáctame por llamada o WhatsApp."
    },
    {
        title: "LinkedIn",
        value: "linkedin.com/in/lucas-cárdenas-370255297",
        link: "https://linkedin.com/in/lucas-cárdenas-370255297",
        IconComponent: FaLinkedin,
        description: "Mi perfil profesional y red de contactos."
    },
    {
        title: "GitHub",
        value: "github.com/LusCard",
        link: "https://github.com/LusCard",
        IconComponent: FaGithub,
        description: "Revisa mis proyectos y código fuente."
    },
    {
        title: "Instagram",
        value: "@luscard_placeholder", // Reemplaza con tu usuario real
        link: "https://instagram.com/luscard_placeholder", // Reemplaza con tu link real
        IconComponent: FaInstagram,
        description: "Sígueme en redes sociales."
    }
];

export default function Contact() {
    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-4xl mx-auto text-center">
                <p className="mb-10 text-lg text-[#ccd6f6]">
                    I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, feel free to reach out using any of these channels!
                </p>

                {/* Grid de dos columnas para las tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactItems.map((item, index) => {
                        // Desestructuramos el componente del ícono
                        const Icon = item.IconComponent;

                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-6 rounded-lg border border-[#303c55] bg-[#112240] hover:border-[#64ffda] transition-all duration-300 transform hover:-translate-y-1 text-left"
                            >
                                <div className="flex items-start space-x-4">
                                    {/* Renderizamos el componente del ícono aquí */}
                                    {Icon && <Icon className="w-8 h-8 text-[#64ffda] min-w-[2rem]" />}
                                    <div>
                                        <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">{item.title}</h3>
                                        <p className="text-lg text-[#8892b0] font-mono break-all">{item.value}</p>
                                        <p className="mt-2 text-sm text-[#8892b0]">{item.description}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                <p className="mt-16 text-sm text-[#8892b0]">
                    Designed and Built by Lucas Cárdenas
                </p>
            </div>
        </Section>
    );
}
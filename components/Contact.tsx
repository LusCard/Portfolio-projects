import React from 'react';
import Section from './Section';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const contactDetails = [
    {
        title: "Email",
        value: "luquiscardenas@gmail.com",
        link: "mailto:luquiscardenas@gmail.com",
        IconComponent: FaEnvelope,
        description: "Envíame un correo directamente."
    },
    {
        title: "Teléfono",
        value: "+54 3718 521146",
        link: "tel:+543718521146",
        IconComponent: FaPhone,
        description: "Contáctame por llamada o WhatsApp."
    }
];

const socialLinks = [
    {
        title: "LinkedIn",
        link: "https://linkedin.com/in/lucas-cárdenas-370255297",
        IconComponent: FaLinkedin,
    },
    {
        title: "GitHub",
        link: "https://github.com/LusCard",
        IconComponent: FaGithub,
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/lucascardenas01/",
        IconComponent: FaInstagram,
    }
];

export default function Contact() {
    return (
        <Section id="contact" title="Mis redes">
            <div className="max-w-4xl mx-auto text-center">
                <p className="mb-10 text-lg text-[#ccd6f6]">
                    Estoy disponible para nuevos proyectos, y mi bandeja de entrada siempre está abierta. Si tienes alguna pregunta o solo quieres saludarme, no dudes en contactarme por cualquiera de estos canales!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {contactDetails.map((item, index) => {
                        const Icon = item.IconComponent;
                        return (
                            <a
                                key={index}
                                href={item.link}
                                className="block p-6 rounded-lg border border-[#303c55] bg-[#112240] hover:border-[#64ffda] transition-all duration-300 transform hover:-translate-y-1 text-left group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-[#1d2d50] rounded-full group-hover:text-[#64ffda] transition-colors">
                                        <Icon className="w-6 h-6 text-[#64ffda]" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">{item.title}</h3>
                                        <p className="text-lg text-[#8892b0] font-mono break-all group-hover:text-[#64ffda] transition-colors">{item.value}</p>
                                        <p className="mt-2 text-sm text-[#8892b0]">{item.description}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                <div className="flex flex-wrap justify-center gap-6 relative z-10">
                    {socialLinks.map((item, index) => {
                        const Icon = item.IconComponent;
                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-[#112240] border border-[#303c55] rounded-lg text-[#ccd6f6] hover:text-[#0a192f] hover:bg-[#64ffda] hover:border-[#64ffda] transition-all duration-300 transform hover:-translate-y-1 shadow-lg relative z-20 cursor-pointer"
                            >
                                <Icon className="w-6 h-6" />
                                <span className="text-lg font-medium">{item.title}</span>
                            </a>
                        );
                    })}
                </div>

                <p className="mt-16 text-sm text-[#8892b0]">
                    Diseñado y construido por Lucas Cárdenas
                </p>
            </div>
        </Section>
    );
}
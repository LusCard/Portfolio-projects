"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const navItems = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Educación', href: '#education' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="md:hidden fixed top-4 right-4 z-[60] bg-[#112240] text-[#64ffda] p-2 rounded-md shadow-lg border border-[#64ffda] hover:bg-[#233554] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-[45] md:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`fixed top-0 left-0 h-screen w-64 bg-[#151932] flex flex-col items-center py-10 shadow-xl z-50 border-r border-[#2d3748] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#64ffda] mb-8 shadow-[0_0_20px_rgba(100,255,218,0.3)] bg-gray-800 flex items-center justify-center">
                    <Image src="/assets/images/AES_0085_1.jpg" alt="Profile" width={128} height={128} className="object-cover" />
                </div>

                <nav className="flex-1 w-full">
                    <ul className="flex flex-col w-full text-center">
                        {navItems.map((item) => (
                            <li key={item.name} className="w-full">
                                <Link
                                    href={item.href}
                                    className="block py-4 text-gray-300 hover:text-[#64ffda] hover:bg-[#1d2342] transition-colors duration-300 text-lg tracking-wide uppercase font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto px-6 text-center text-xs text-gray-500">
                    <p>&copy; 2025 Mi Portfolio</p>
                </div>
            </aside>
        </>
    );
}

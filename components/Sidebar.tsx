import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const navItems = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Educación', href: '#education' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
];

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-[#151932] flex flex-col items-center py-10 shadow-xl z-50 hidden md:flex border-r border-[#2d3748]">
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
    );
}

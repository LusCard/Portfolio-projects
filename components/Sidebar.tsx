import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-[#151932] flex flex-col items-center py-10 shadow-xl z-50 hidden md:flex border-r border-[#2d3748]">
            {/* Profile Picture Placeholder */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#64ffda] mb-8 shadow-[0_0_20px_rgba(100,255,218,0.3)] bg-gray-800 flex items-center justify-center">
                {/* User can replace this image */}
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
                <p>&copy 2025 My Portfolio</p>
            </div>
        </aside>
    );
}

import React, { ReactNode } from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
    className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
    return (
        <section id={id} className={`min-h-screen w-full flex flex-col justify-center px-8 md:px-16 py-20 border-b border-[#1d2342] last:border-0 ${className}`}>
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#ccd6f6] flex items-center">
                    <span className="text-[#64ffda] mr-4">#</span>
                    {title}
                    <div className="ml-6 h-[1px] bg-[#233554] flex-1 max-w-[300px]"></div>
                </h2>
                <div className="text-[#8892b0] text-lg leading-relaxed">
                    {children}
                </div>
            </div>
        </section>
    );
}

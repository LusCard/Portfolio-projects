import React from 'react';
import Section from './Section';

const categorizedSkills = {
    "Frontend & Mobile": [
        "React",
        "Next.js",
        "React Native",
        "Expo"
    ],
    "Backend & Core": [
        "Node.js",
        "Express",
        "NestJS",
        "TypeScript",
        "Python",
        "PHP"
    ],
    "Bases de Datos": [
        "PostgreSQL",
        "MongoDB",
        "MySQL"
    ],
    "Data Science & ML/AI": [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "PyTorch",
        "NLP",
        "Langchain",
        "MCP"
    ]
    ,
    "Idiomas": [
        "Español: Nativo",
        "Inglés: Nivel B2",

    ]
};

export default function Skills() {
    return (
        <Section id="skills" title="Habilidades">
            <p className="mb-8 text-lg text-[#ccd6f6]">
                Here are the core technologies and domains I leverage for building full-stack and data-driven solutions:
            </p>

            {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category} className="mb-8">
                    <h3 className="text-xl font-bold text-[#64ffda] mb-4 border-b border-[#303c55] pb-1">
                        {category}
                    </h3>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <span className="text-[#64ffda] text-sm">◆</span>
                                <span className="text-[#ccd6f6]">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Section>
    );
}
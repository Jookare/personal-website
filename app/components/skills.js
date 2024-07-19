import React from 'react';
import Image from 'next/image';

const skillstyle = `
flex flex-col aspect-square w-full 
bg-accent rounded-xl transition-all 
duration-200 hover:scale-105 cursor-pointer 
items-center justify-center text-zinc-400 overflow-hidden `

const skills = [
    { name: 'Python', icon: '/logos/python.svg' },
    { name: 'Matlab', icon: '/logos/matlab.svg' },
    { name: 'Github', icon: '/logos/github.svg' },
    { name: 'PyTorch', icon: '/logos/pytorch.svg' },
    { name: 'React', icon: '/logos/react.svg' },
    { name: 'Tailwind CSS', icon: '/logos/tailwindcss.svg' },
    { name: 'CUDA', icon: '/logos/cuda.svg' },
    { name: 'C++', icon: '/logos/cpp.svg' },
    { name: 'Linux', icon: '/logos/linux.svg' },
];

const Skills = () => {
    return (
        <div className="font-sans max-w-[650px] w-full flex flex-col gap-4 px-4">
            <h1 className="text-2xl font-semibold">Skills</h1>
            <div className="bg-[#141414] p-4 w-full ">
                <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className={`${skillstyle} hover:grayscale-0 group`} >
                            <Image src={skill.icon} alt={skill.name} width={64} height={64} className='sm:h-16 sm:w-16 h-8 w-8'/>
                            <p className='group-hover:text-zinc-200 transition-all duration-200'>{skill.name}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
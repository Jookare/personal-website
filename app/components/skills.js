import React from 'react';
import Image from 'next/image';

const skillstyle = `
flex flex-col aspect-square w-full 
 ring-2 ring-accent rounded-xl transition-all 
duration-200 hover:scale-105 cursor-pointer 
items-center justify-center text-zinc-400 overflow-hidden `

const skills = [
    { name: 'Python', icon: '/logos/python.svg' },
    { name: 'Matlab', icon: '/logos/matlab.svg' },
    { name: 'PyTorch', icon: '/logos/pytorch.svg' },
    { name: 'Lightning', icon: '/logos/lightning.svg' },
    { name: 'Keras', icon: '/logos/keras.svg' },
    { name: 'React', icon: '/logos/react.svg' },
    { name: 'Next.js', icon: '/logos/nextdotjs.svg' },
    { name: 'Tailwind CSS', icon: '/logos/tailwindcss.svg' },
    { name: 'CUDA', icon: '/logos/cuda.svg' },
    { name: 'C++', icon: '/logos/cpp.svg' },
    { name: 'Linux', icon: '/logos/linux.svg' },
    { name: 'Git', icon: '/logos/git.svg' }
];

const Skills = () => {
    return (
        <div className="font-sans max-w-[650px] w-full flex flex-col gap-4 px-4">
            <h1 className="text-2xl font-semibold">Highlighted Skills</h1>
            <div className="bg-[#141414] p-4 w-full ">
                <div className="grid sm:grid-cols-4 xs:grid-cols-3 grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className={`${skillstyle} hover:grayscale-0 group p-1`} >
                            <Image src={skill.icon} alt={skill.name} width={64} height={64} className='sm:h-12 sm:w-12 h-8 w-8' />
                            <p className='group-hover:text-zinc-200 transition-all duration-200 sm:text-base xs:text-[14px] text-[12px] text-center'>{skill.name}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

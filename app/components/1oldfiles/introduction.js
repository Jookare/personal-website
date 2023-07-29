import Image from 'next/image';
import kuva from "../../../public/kuva2.png"

export default function Introduction() {
    return (
        <div className='font-mont rounded-xl  p-4 text-stone-950 '>
            <div className='flex items-center space-x-6'>
                <div className='rounded-full bg-gradient-to-tl from-red-700/60 to-sky-400/40 shadow-lg p-[3px] ring-[5px] ring-red-500/10'>
                    <div className='rounded-full p-px h-[72px] w-[72px]'>
                        <Image className="rounded-full" src={kuva} />
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-medium sm:text-4xl'>Hi, I'm Joona</h1>
                    <h2 className='align-middle text-lg leading-6 '>Data-Centric Engineering student</h2>
                </div>
            </div>
            <p className='mt-7 text-xl sm:mt-9'>
               I'm a motivated MSc candidate with a focus on computer vision and pattern recognition. My passion extends to areas such as high-performance computing (HPC), machine learning, and effective computation.
            </p>
            <div className='mt-8 sm:mt-12'>
                <div className='flex items-center space-x-7 text-base font-semibold '>
                    <a href='https://www.linkedin.com/in/joona-kareinen-b44150199/' target='_blank'>
                        <button>LinkedIn</button>
                    </a>

                    <button>LinkedIn</button>
                    <button>LinkedIn</button>
                    <button>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}
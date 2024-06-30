import Image from "next/image"
import { useState } from "react"

const skillstyle = `
flex flex-col aspect-square w-full 
bg-accent rounded-xl transition-all 
duration-200 hover:scale-105 cursor-pointer 
items-center`

const Projects = () => {

    const [hover, setHover] = useState(false)


    return (

        <div className="font-sans max-w-[650px] gap-4 flex flex-col">
            <h1 className="text-2xl font-semibold">Projects</h1>
            <div className="bg-[#141414] w-[650px]">
                <div className="grid grid-cols-2 gap-4">
                    <div className={`${skillstyle}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <div className="image-container h-3/4 p-2 rounded-t-lg">
                            <Image src="/plankton.png" width={1080} height={1080} alt="profile picture" className={`rounded-lg duration-500 ${hover ? "scale-110" : "scale-1"}`} />
                        </div>
                        <div className="divider -mb-2 -mt-[2px]" />

                        <div className="text-container h-1/4 m-2 items-start w-full">
                            <div className="mx-2 h-full flex flex-col items-start justify-evenly">
                                <div className="flex gap-2">
                                    <div className="rounded-lg border-2 p-1 border-violet-400 ">
                                        <p className="text-xs">Computer Vision</p>
                                    </div>
                                    <div className="rounded-lg border-2 p-1 border-yellow-400">
                                        <p className="text-xs">Python</p>
                                    </div>
                                    <div className="rounded-lg border-2 p-1 border-red-400">
                                        <p className="text-xs">PyTorch</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Open-set plankton detector</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${skillstyle} hover:grayscale-0`}>

                        <p>Project #2</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Projects;
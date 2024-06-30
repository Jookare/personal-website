import Image from "next/image"
import { useState } from "react"
import Item from "./item"


const Projects = () => {

    const [hover, setHover] = useState(false)


    return (

        <div className="font-sans max-w-[650px] gap-4 flex flex-col">
            <h1 className="text-2xl font-semibold">Projects</h1>
            <div className="bg-[#141414] w-[650px]">
                <div className="grid grid-cols-2 gap-4">
                    <Item img={"/plankton.png"} name="Open-set plankton detector" skills={["Computer Vision", "Python", "PyTorch"]}
                        colors={["border-violet-400", "border-yellow-400", "border-red-400"]} />
                    <Item img={"/project.jpg"} name="Portfolio website" skills={["Web design", "React"]}
                        colors={["border-indigo-400", "border-blue-400"]} />

                </div>
            </div>
        </div>
    )

}

export default Projects;
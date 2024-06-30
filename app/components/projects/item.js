import Image from "next/image"
import { useState } from "react"

const skillstyle = `
flex flex-col aspect-square w-full 
bg-accent rounded-xl transition-all 
duration-200 hover:scale-105 cursor-pointer 
items-center`

const Item = (props) => {
    const { img, name, skills, colors = []  } = props
    const [hover, setHover] = useState(false)


    return (
        <div
            className={`${skillstyle}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <div className="image-container h-3/4 p-2 rounded-t-lg">
                <Image src={img} width={1080} height={1080} alt="profile picture" className={`rounded-lg duration-500 ${hover ? "scale-110" : "scale-1"}`} />
            </div>
            <div className="divider -mb-2 -mt-[2px]" />

            <div className="text-container h-1/4 m-2 items-start w-full">
                <div className="mx-2 h-full flex flex-col items-start justify-evenly">
                    <div className="flex gap-2">
                        {skills.map((el, idx) => {
                            return (
                                <div key={idx} className={`rounded-lg border-2 p-1 ${colors[idx] || ''}`}>
                                    <p className="text-xs">{el}</p>
                                </div>
                            )
                        })}
                        {/* <div className="rounded-lg border-2 p-1 border-violet-400 ">
                            <p className="text-xs">Computer Vision</p>
                        </div>
                        <div className="rounded-lg border-2 p-1 border-yellow-400">
                            <p className="text-xs">Python</p>
                        </div>
                        <div className="rounded-lg border-2 p-1 border-red-400">
                            <p className="text-xs">PyTorch</p>
                        </div> */}
                    </div>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
import React  from 'react';
import Typer from './typer';

const linesOftext = [
    { static: true, text: "module load info", typeSpeed: 40, startDelay: 0 },
    { static: false, text: '`installing components...` ^1000', typeSpeed: 40, startDelay: 2000 },
    { static: true, text: "module load img", typeSpeed: 40, startDelay: 4000 },
    { static: true, text: "module load projects", typeSpeed: 40, startDelay: 6000 },
    { static: true, text: "module load skills", typeSpeed: 40, startDelay: 8000 },
    { static: true, text: "module load skills", typeSpeed: 40, startDelay: 8000 }
]
export default function Terminal() {

    const lines = linesOftext.map((el, i) => {
        return (
            <Typer key={el.text + i} data={el} />
        )
    })

    return (
        <div className="max-w-full w-[800px] h-[230px] mx-auto bg-[#0d0f17] rounded-lg mb-[10px]">
            <div className="h-8 flex space-x-4 px-4">
                <div className="rounded-full bg-red-500 h-3 w-3 self-center" />
                <div className="rounded-full bg-amber-500 h-3 w-3 self-center" />
                <div className="rounded-full bg-cyan-500 h-3 w-3 self-center" />
            </div>
            <div className='h-[160px]  p-2 text-white '>
                <div className="inline">
                    {lines}
                </div>
            </div>
        </div>
    )
}
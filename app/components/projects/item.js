
import Image from "next/image";

const skillStyle = `
  relative flex flex-col aspect-square w-full 
  bg-accent rounded-xl transition-all 
  duration-200 cursor-pointer 
  items-center text-zinc-400 group hover:text-zinc-200
`;

const Item = ({ img, name, skills, colors = [] }) => {
    return (
        <div className={skillStyle}>
            <div className="image-container h-3/4 p-2 rounded-t-lg relative">
                <Image
                    src={img}
                    width={1080}
                    height={1080}
                    alt={name}
                    className="rounded-lg transition-all duration-300 group-hover:scale-110"
                />
            </div>
            <div className="divider -mb-2 -mt-[2px]" />

            <div className="text-container h-1/4 m-2 items-start w-full">
                <div className="mx-2 h-full flex flex-col items-start justify-evenly">
                    <div className="flex gap-2">
                        {skills.map((el, idx) => (
                            <div key={idx} className={`rounded-lg border-2 p-1 ${colors[idx] || ''}`}>
                                <p className="text-xs">{el}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
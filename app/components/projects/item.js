
import Image from "next/image";

const skillStyle = `
  flex gap-4 ring-2 ring-accent
  rounded-xl transition-all hover:bg-accent 
  duration-200 cursor-pointer p-4 group text-zinc-400 hover:text-zinc-200
`;



const Item = ({ img, name, skills, link }) => {
    return (
        <a href={link} target="_blank">
            <div className={skillStyle}>
                {/* Image */}
                <div>
                    <Image
                        src={img}
                        width={1080}
                        height={1080}
                        alt={name}
                        className="rounded-lg sm:w-32 w-28  object-cover aspect-square 
                            transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                {/* Content */}
                <div className="flex flex-col justify-between w-full">
                    <h3 className="mb-2 xs:text-lg sm:text-base text-sm">{name}</h3>

                    {/* Skills */}
                    <div className="flex gap-2 flex-wrap w-full ">
                        {skills.map((el, idx) => (
                            <div
                                key={idx}
                                className="rounded-lg p-1.5 px-2 bg-cyan-200/10"
                            >
                                <p className="xs:text-xs text-[10px]">{el}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="mt-1 w-4 h-4 text-zinc-400 group-hover:text-zinc-200 
                            duration-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                </svg>

            </div>
        </a>
    );
};

export default Item;
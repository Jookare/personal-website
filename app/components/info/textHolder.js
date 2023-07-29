import { BsGithub, BsLinkedin, BsEnvelopeFill } from 'react-icons/bs';
export default function TextHolder() {

    return (
        <div>
            <h1 className=" text-4xl font-bold ">
                Joona Kareinen
            </h1>
            <div>
                <p className="text-md"> Data-Centric Engineering student</p>
                <p className="text-md mt-2">
                    Welcome to my digital garden where I share what I'm learning about shipping great products, becoming a better developer and growing a career in tech.
                </p>
            </div>
            <div className="flex justify-center items-center space-x-7 mt-7">
                <a href='https://github.com/jookare' target='_blank'>
                    <div className="w-12 h-12 rounded-full bg-cyan-500/90 flex justify-center hover:invert transition-all duration-500">
                        <BsGithub className="w-6 h-6  text-black self-center" />
                    </div>
                </a>

                <a href='https://www.linkedin.com/in/joona-kareinen/' target='_blank'>
                    <div className="w-12 h-12 rounded-full bg-cyan-500/70 flex justify-center hover:invert transition-all duration-500">
                        <BsLinkedin className="w-6 h-6 text-black self-center" />
                    </div>
                </a>
                <a href='https://github.com/jookare' target='_blank'>
                    <div className="w-12 h-12 rounded-full bg-cyan-500/90 flex justify-center hover:invert transition-all duration-500">

                        <BsEnvelopeFill className="w-6 h-6  text-black self-center" />
                    </div>
                </a>
            </div>
        </div>

    )
}
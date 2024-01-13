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
                I'm an enthusiastic MSc student, majoring in computer vision and pattern recognition. My academic journey has equipped me with a strong foundation, and I'm passionate about merging this knowledge with real-world applications.
                </p>
            </div>
            <div className="flex justify-center items-center space-x-7 mt-7">
                <a href='https://github.com/jookare' target='_blank'>
                    <div className="w-12 h-12 rounded-full bg-cyan-500/90 flex justify-center hover:invert transition-all duration-300">
                        <BsGithub className="w-6 h-6  text-black self-center" />
                    </div>
                </a>

                <a href='https://www.linkedin.com/in/joona-kareinen/' target='_blank'>
                    <div className="w-12 h-12 rounded-full bg-cyan-500/90 flex justify-center hover:invert transition-all duration-300">
                        <BsLinkedin className="w-6 h-6 text-black self-center" />
                    </div>
                </a>
                <a href='mailto:joonakareinen@gmail.com' target='_blank'>
                    <div className="w-12 h-12 rounded-full bg-cyan-500/90 flex justify-center hover:invert transition-all duration-300">

                        <BsEnvelopeFill className="w-6 h-6  text-black self-center" />
                    </div>
                </a>
            </div>
        </div>

    )
}
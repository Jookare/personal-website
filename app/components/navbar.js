import Logo from "../../public/Logo.svg"
import Image from "next/image"


export default function Navbar(props) {

    const { scrollToTop } = props;
    return (
        <div className='flex fixed top-0 left-0 p-2'>
            <button className="btn transition-all duration-200 
            hover:scale-110 border-[1px] border-zinc-400 h-auto aspect-square" onClick={scrollToTop}>
                <Image src={Logo} className="w-6 h-6" />
            </button>
        </div>
    )
}
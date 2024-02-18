import Logo from "../../public/Logo.svg"
import Image from "next/image"


export default function Navbar() {

    return (
        <div className='flex justify-between fixed top-0 left-0 p-2'>
            <a className="transition-all duration-200 hover:scale-110 w-11 h-11 text-text-1 grid place-items-center hover:bg-surface-4 rounded-xl" href="localhost:3000">
                <Image src={Logo} className="w-9" />
                <span class="sr-only">Jookare</span>
            </a>
        </div>
    )
}
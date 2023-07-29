import Logo from "../../public/Logo.svg"
import Image from "next/image"


export default function Navbar() {

    return (
        <div className='flex justify-between bg-[rgb(230, 230, 230)]/[0.9] sticky top-0 left-0 z-10 p-2'>
            <a className="w-11 h-11 text-text-1 grid place-items-center hover:bg-surface-4 rounded-md" href="localhost:3000">
                <Image src={Logo} className="w-9" />
                <span class="sr-only">Jookare</span>
            </a>
        </div>
    )
}
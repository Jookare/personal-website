import Logo from "../../public/Logo.svg"
import Image from "next/image"


export default function Navbar(props) {

    const { scrollToTop } = props;

    const buttonPress = () => {
        if (window.scrollY > 25) {
            scrollToTop();
        }
        else {
            window.location.reload();

        }
    }

    return (
        <div className="flex flex-col fixed top-0 left-0 p-2">
            <button className="btn btn-square w-14 h-14 transition-all duration-200 
            hover:scale-110 ring-2 ring-zinc-500/50 " onClick={buttonPress}>
                <Image src={Logo} className="w-6 h-6" alt="Logo" />

            </button>
        </div>
    )
}
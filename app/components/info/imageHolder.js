import Image from "next/image"
// import picture from "../../../public/pfp.avif"

export default function ImageHolder() {

    return (
        <div className='relative flex items-center justify-end space-x-6 min-h-[70px] py-2'>
            <div
                className="absolute z-100 top-0 left-0 rounded-full bg-gradient-to-tl 
                from-neutral-50/90 to-neutral-50/90 shadow-lg p-[3px] -translate-y-1/2
                ">
                <Image
                    className="rounded-full p-px h-[110px] w-[110px]"
                    src="/pfp.avif"
                    width={120}
                    height={120}
                />
            </div>
            <div className="bg-cyan-500/90 rounded-2xl px-3 py-1 flex items-center justify-center">
                <p>Testing This Button</p>
            </div>
        </div>
    )
}
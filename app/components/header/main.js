import Image from "next/image";

const locationIcon = "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"

export const Info = () => {
    return (
        <div id="header" className="h-60 stripe-bg box-border ">
            <div className="border-b-2 border-t-0 border-x-0 border-accent min-h-60 flex">
                <div className="flex items-end w-full mx-auto max-w-[650px] px-4">
                    <div className="min-h-fit w-full sm:pt-5 xs:pt-6 pt-10 flex relative">
                        <div className="absolute left-0 sm:top-2 xs:top-2 top-6 right-0 z-40 sm:w-[150px] sm:h-[150px] xs:w-28 xs:h-28 w-24 h-24">
                            <Image src="/pfp.png" width={150} height={150} alt="profile picture" className="rounded-full" />
                        </div>
                        <div className="content sm:pl-[180px] xs:pl-[120px] pl-[105px] flex flex-col gap-2">
                            <h1 className="sm:text-4xl xs:text-3xl text-xl font-semibold xs:h-[32px] h-[28px]">Joona kareinen</h1>
                            <div className="text-zinc-400 flex xs:flex-row flex-col sm:gap-6 pb-2">
                                <InfoItem
                                    iconPath={locationIcon}
                                    text="Junior Researcher at LUT University"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const InfoItem = ({ iconPath, text }) => (
    <div className="flex h-6 gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
        <h1 className="sm:text-base xs:text-[12px] text-[10px] self-center">
            {text}{' '}
        </h1>
    </div>
);

export default Info;
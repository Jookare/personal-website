import Image from "next/image"

export const Info = () => {

    return (
        <div id="header" className="h-60 stripe-bg box-border">
            <div className="border-b-2 border-t-0 border-x-0 border-accent min-h-60 flex">
                <div className="flex items-end w-full mx-auto max-w-[800px]">
                    <div className="min-h-fit w-full pt-5 flex relative" >

                        <div className="absolute left-0 top-0   right-0 z-50 w-[150px] h-[150px]">
                            <Image src="/pfp.png" width={150} height={150} alt="profile picture" className="rounded-full" />
                        </div>
                        <div className="content pl-[180px] flex flex-col gap-2">

                            <div>
                                <h1 className="text-3xl font-semibold h-[32px]"> Joona Kareinen</h1>
                            </div>

                            <div className="text-zinc-400 flex gap-6 pb-2">
                                <div className="flex h-6 gap-1">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                                    </svg>

                                    <h1 className="text-[14px] self-center">Machine Learning Engineer</h1>
                                </div>
                                <div className="flex h-6 gap-1">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    <h1 className="text-[14px] self-center">Lappeenranta</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


const skillstyle = `
flex flex-col aspect-square w-full 
bg-accent rounded-xl transition-all 
duration-200 hover:scale-105 cursor-pointer 
items-center justify-center text-zinc-400 `

const Timeline = () => {

    return (
        <div className="font-sans  gap-4 flex flex-col">
            <h1 className="text-2xl font-semibold">My Timeline</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-4 md:mr-3 ml-3">
                        <time className="font-mono italic">2028</time>
                        <div className="text-md">Graduate as Doctor of science (Technology).</div>
                    </div>
                    <hr className="bg-accent" />
                </li>
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start mb-4 md:text-end md:mr-3 ml-3">
                        <time className="font-mono italic">31.07.2024</time>
                        <div className="text-md">Started as junior researcher at LUT University</div>
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-4 md:mr-3 ml-3">
                        <time className="font-mono italic">19.06.2024</time>
                        <div className="text-md">Graduated as Master of Science (Technology) in Data-Centric Engineering.</div>
                        <div className="text-sm">GPA 4,88/5</div>
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start mb-4 md:text-end md:mr-3 ml-3">
                        <time className="font-mono italic"> 01.09.2023</time>
                        <div className="text-md ml-4">Double degree exchange studies in&nbsp;
                            <a href="https://www.usi.ch/en" target="_blank" className="hover:text-primary transition-all duration-300">
                                Università della Svizzera italiana (USI).
                            </a>
                        </div>

                        {/* <div className="text-sm ml-4 flex align-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <p>Switzerland</p>
                        </div> */}
                    </div>
                    <hr className="bg-primary" />
                </li>
              
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-4 md:mr-3 ml-3">
                        <time className="font-mono italic">15.05.2023</time>
                        <div className="text-md">First developer job as Quantum Technologies Trainee&nbsp;
                            <a href="https://www.csc.fi/" target="_blank" className="hover:text-primary transition-all duration-300">
                                @CSC - IT Center for Science
                            </a>
                        </div>
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start mb-4 md:text-end md:mr-3 ml-3">
                        <time className="font-mono"> 01.09.2022</time>
                        <div className="text-md">Started Master's program in Data-Centric Engineering.</div>
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-4 md:mr-3 ml-3">
                        <time className="font-mono italic"> 01.09.2022</time>
                        <div className="text-md">Graduated as Bachelor of Science (Technology) in Computational Engineering.</div>
                        <div className="text-sm">GPA 4,38/5</div>
                    </div>
                </li>
            </ul>

        </div>
    )

}

export default Timeline;
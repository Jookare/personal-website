const Timeline = () => {
    return (
        <div className="font-sans max-w-[650px] w-full flex flex-col gap-4 px-4">
            <h1 className="text-2xl font-semibold text-zinc-100">My Timeline</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-4">
                {timelineData.map((item, index) => (
                    <li key={index}>
                        {item.position === "start" && <hr className={item.hrColor} />}
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${item.iconColor}`}>
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={`${item.position == "start" ? "md:text-end md:timeline-start" : ""} timeline-end mb-3 mx-4 text-zinc-100`}>
                            <time className="font-mono italic">{item.date}</time>
                            <div className="text-md">{item.description}</div>
                            {
                                item.extraInfo ?
                                <div className="text-sm">{item.extraInfo}</div>
                                :
                                ""
                            }
                        </div>
                        <hr className={item.hrColor} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;


const timelineData = [
    {
        date: "2028",
        description: "Graduate as Doctor of science (Technology).",
        iconColor: "text-accent",
        hrColor: "bg-accent",
        position: "end"
    },
    {
        date: "01.08.2024",
        description: "Started as junior researcher at LUT University",
        iconColor: "text-primary",
        hrColor: "bg-primary",
        position: "start"
    },
    {
        date: "19.06.2024",
        description: "Graduated as Master of Science (Technology) in Data-Centric Engineering.",
        extraInfo: "GPA 4,88/5",
        iconColor: "text-primary",
        hrColor: "bg-primary",
        position: "end"
    },
    {
        date: "01.09.2023",
        description: <>
            Double degree exchange studies in{" "}
            <a href="https://www.usi.ch/en" target="_blank" className="hover:text-primary transition-all duration-200">
                Università della Svizzera italiana (USI).
            </a>
        </>,
        iconColor: "text-primary",
        hrColor: "bg-primary",
        position: "start"
    },
    {
        date: "15.05.2023",
        description: <>First developer job as Quantum Technologies Trainee{" "}
            <a href="https://www.csc.fi/en" target="_blank" className="hover:text-primary transition-all duration-200">
                @CSC - IT Center for Science
            </a>
        </>,
        iconColor: "text-primary",
        hrColor: "bg-primary",
        position: "end"
    },
    {
        date: "01.09.2022",
        description: "Started Master's program in Data-Centric Engineering.",
        iconColor: "text-primary",
        hrColor: "bg-primary",
        position: "start"
    },
    {
        date: "01.09.2022",
        description: "Graduated as Bachelor of Science (Technology) in Computational Engineering.",
        extraInfo: "GPA 4,38/5",
        iconColor: "text-primary",
        hrColor: "bg-primary",
        position: "end"
    }
];
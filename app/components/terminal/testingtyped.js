import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const linesOftext = [
    { text: "npm install", typeSpeed: 40, startDelay: 0, backDelay: 0},
    { text: '`installing components...` ^1000', typeSpeed: 40, startDelay: 2000, backDelay: 0},
    { text: "npm install", typeSpeed: 40, startDelay: 4000, backDelay: 0},
    { text: "npm install", typeSpeed: 40, startDelay: 6000, backDelay: 0},
    { text: "npm install", typeSpeed: 40, startDelay: 8000, backDelay: 0}
]

export default function TestingTyped() {
    const el1 = useRef(null); // Ref for the first line
    const el2 = useRef(null); // Ref for the second line
    const el3 = useRef(null); // Ref for the third line

    const [isTyping, setIsTyping] = useState(false);
    const typedInstances = useRef([]);

    useEffect(() => {
        const typed1 = new Typed(el1.current, {
            strings: ['npm install'],
            typeSpeed: 40,
            backSpeed: 0,
            cursorChar: '',
            loop: false,
        });


        const typed2 = new Typed(el2.current, {
            strings: ['`installing components...`'],
            typeSpeed: 40,
            backSpeed: 0,
            startDelay: 2000,
            cursorChar: '',
            loop: false,
            onComplete: () => setIsTyping(true)
        });
        typedInstances.current.push(typed2);

        const typed3 = new Typed(el3.current, {
            strings: ['npm install'],
            typeSpeed: 40,
            backSpeed: 0,
            startDelay: 4000,
            cursorChar: '',
            loop: false,
        });
        typedInstances.current.push(typed3);

        typedInstances.current.push(typed1);

        return () => {
            // Destroy Typed instances during cleanup to stop animations
            // typedInstances.current.forEach((typed) => typed.destroy());
        };
    }, []);

    return (
        <div className="inline">
            <p className="inline-block text-green-500">Joona@HPC:~$</p>
            <span>{' '}</span>
            <span ref={el1} />
            <br />
            <span>{' '}</span>
            <span ref={el2} />
            <br />
            {isTyping && <p className="inline-block text-green-500">Joona@HPC:~$</p>}
            <span>{' '}</span>
            <span ref={el3} />
        </div>
    );
}

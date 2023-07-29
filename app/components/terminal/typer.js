import { useRef, useState, useEffect } from 'react';
import Typed from 'typed.js';

export default function Typer(props) {
    const { data } = props;
    const el = useRef(null);

    // const [isTyping, setIsTyping] = useState(false);
    // const typedInstances = useRef([]);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [data.text],
            typeSpeed: data.typeSpeed,
            startDelay: data.startDelay,
            backSpeed: 0,
            cursorChar: '',
            loop: false,
        });

        return () => {
            // Destroy Typed instances during cleanup to stop animations
            // typedInstances.current.forEach((typed) => typed.destroy());
        };
    }, []);
    return (
        <div> 
            <p className="inline-block text-green-500">Joona@HPC:~$</p>
            <span>{' '}</span>
            <span ref={el} />
        </div>
    )
}
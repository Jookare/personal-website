// const Noise = () => {
//     return (

//         <svg className="pointer-events-none fixed isolate z-40 opacity-70 mix-blend-soft-light">
//             <filter id="noise">
//                 <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch">
//                 </feTurbulence>
//             </filter>
//             <rect  width="100%" height="100%" filter="url(#noise)"></rect>
//         </svg>
//     )
// }
// export default Noise;
"use client"
import { useEffect, useRef } from 'react';

const Noise = () => {
    // const svgRef = useRef(null);

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (svgRef.current) {
    //             // svgRef.current.setAttribute('width', '100%');
    //             svgRef.current.setAttribute('height', 'full');
    //         }
    //     };

    //     // Attach resize event listener
    //     window.addEventListener('resize', handleResize);

    //     // Initial call to set the size
    //     handleResize();

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    return (
        <svg
            // ref={svgRef} 
            className="pointer-events-none fixed isolate z-40 opacity-70 mix-blend-soft-light w-full h-full"
        >
            <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch">
                </feTurbulence>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
    )
}

export default Noise;
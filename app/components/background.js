// export default function Background() {

//     return (
//         <div className='pointer-events-none fixed inset-0 overflow-hidden'>
//             <div class="h-full bg-magicpattern bg-top bg-cover opacity-[0.5] will-change-transform">
//             </div>
//         </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const generateRandomData = () => {
  // Generate random data between 0 and 100 (for simplicity)
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
};

const App = () => {
  const [data, setData] = useState(generateRandomData());

  // Move the graph to the right every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData];
        newData.pop();
        newData.unshift(Math.floor(Math.random() * 100));
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Moving Graph Animation</h1>
      <div className="graph-container">
        {data.map((value, index) => (
          <motion.div
            key={index}
            className="bar"
            initial={{ y: 100 }}
            animate={{ y: value }}
            transition={{ duration: 2 }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;

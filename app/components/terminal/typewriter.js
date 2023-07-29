import React, { useState, useEffect } from 'react';
import { useTypingEffect } from './typing-effect';

export default function Typewriter() {
  const staticText = 'Joona@HPC:~$'
  const commands = [
    ' module load introduction',
    ' python script.py',
    // Add more lines as needed
  ];

  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [commandHistory, setCommandHistory] = useState([]);

  const typeCommand = async (command, delay) => {
    await new Promise((resolve) => setTimeout(resolve, delay));
    for (let i = 0; i <= command.length; i++) {
      setCommandText(command.substring(0, i));
      await new Promise((resolve) => setTimeout(resolve, 100)); // Typing speed
    }
  };

  useEffect(() => {
    const currentCommand = commands[currentCommandIndex];
    setCommandText('');
    typeCommand(currentCommand, 500).then(() => {
      
      setCommandHistory((prevHistory) => [...prevHistory, currentCommand]);
      setCurrentCommandIndex((prevIndex) => (prevIndex + 1) % commands.length);
    });


  }, [currentCommandIndex]);
  const [commandText, setCommandText] = useState('');
  return (
    <div className='font-consola text-zinc-200'>
      {staticText}
      <span className="command">{commandText}</span>
    </div>
  );
}

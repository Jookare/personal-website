"use client";
import Terminal from "./components/terminal/main";
import Background from "./components/background";
import Navbar from "./components/navbar";
import Info from "./components/info/main";
import Noise from "./components/noise";
export default function Home() {
  return (

    <main className='font-sans min-h-screen '>
      <Noise />
      <Navbar />

      <div className="content relative z-10 mx-auto mt-[250px]">
        {/* <Terminal /> */}
        <Info />
      </div>
      
      <Background />
    </main>
  )
}

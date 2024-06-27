"use client";
import Navbar from "./components/navbar";
import { Info } from "./components/header/main";
import { Links } from "./components/header/links";
import Skills from "./components/skills";
import Timeline from "./components/timeline";
import Noise from "./components/noise";
import Projects  from "./components/projects";

// Define the Home component
export default function Home() {
  return (
    <main className="min-h-screen w-full font-sans text-white">
      <Noise />
      <Navbar />
      <Info />

      <div id="info" className="h-auto w-full flex flex-col items-center max-w-[650px] mx-auto gap-8 ">
        <Links />
        <div className="w-full rounded-xl p-4 shadow-md text-zinc-200/90 text-lg">
          <p className="leading-7">
            Hi, I'm Joona &nbsp;—&nbsp; A dedicated MSc candidate specializing in Data-Centric Engineering.
            My academic journey is driven by intense passion for&nbsp;
            <span className="text-amber-100">Computer Vision</span>,&nbsp;
            <span className="text-amber-100">Artificial Intelligence</span>, and&nbsp;
            <span className="text-amber-100">Data Science</span>.
          </p>

        </div>
        {/* Divider */}
        <div className="divider" />

        {/* Timeline */}
        <Timeline />

        <div className="divider" />
        <Projects />
        

        <div className="divider" />

        < Skills />
        {/* <div className="divider" />
        <div className="max-w-[880px] pt-4 px-10">
          <div className="w-[800px] h-72 bg-[#141414]">

          </div>
        </div> */}


        <div className="divider" />

        <div className="w-full h-24 flex items-center gap-4 mb-8">
          <h1 className="text-xl">Thanks for scrolling</h1>
          <a href={"cv.pdf"} without rel="noopener noreferrer" target="_blank">
          <button className="btn btn-outline">Resume</button>
          </a>
        </div>

      </div>

    </main >
  );
}
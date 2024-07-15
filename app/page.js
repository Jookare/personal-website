"use client";
import Navbar from "./components/navbar";
import { Info } from "./components/header/main";
import { Links } from "./components/header/links";
import Skills from "./components/skills";
import Timeline from "./components/timeline";
import Projects from "./components/projects/main";
import React, { useState, useEffect } from "react";

// Define the Home component
export default function Home() {
  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <main className="min-h-screen w-full font-sans text-white">
      <Navbar scrollToTop={scrollToTop} />
      <Info />

      <div id="info" className="h-auto w-full flex flex-col items-center max-w-[650px] mx-auto sm:gap-8 gap-2 ">
        <Links />
        <div className="w-full rounded-xl p-4 shadow-md text-zinc-200/90 sm:text-lg sm:px-4 px-8">
          <p className="leading-7">
            Hi, I&apos;m Joona {" "}—{" "} A dedicated Master of Science in Data-Centric Engineering.
            My academic journey is driven by intense passion for{" "}
            <span className="text-white">Computer Vision</span>,{" "}
            <span className="text-cyan-500">Artificial Intelligence</span>, and{" "}
            <span className="text-red-500">Data Science</span>.
          </p>
        </div>

        {/* Divider */}
        <div className="divider " />

        {/* Timeline */}
        <Timeline />

        <div className="divider" />
        <Projects />


        <div className="divider" />

        < Skills />


        <div className="divider" />

        <div className="w-full flex items-center gap-4 justify-center pt-4 pb-12">
          <h1 className="text-lg text-zinc-400/90">
            Built with{" "}
            <a href="https://nextjs.org" className=" hover:underline transition-all duration-100 hover:text-zinc-200">Next.js</a>
            ,{" "}
            <a href="https://tailwindcss.com" className="hover:underline transition-all duration-100 hover:text-zinc-200">Tailwind</a>

            {" "}and{" "}
            <a href="https://vercel.com" className="hover:underline transition-all duration-100 hover:text-zinc-200">Vercel</a>
          </h1>
          {/* <button className="btn btn-ghost p-2 w-14" onClick={scrollToTop}>
            <svg fill="#a1a1aa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 animate-bounce">
              <path d="m9.001 10.978h-3.251c-.412 0-.75-.335-.75-.752 0-.188.071-.375.206-.518 1.685-1.775 4.692-4.945 6.069-6.396.189-.2.452-.312.725-.312.274 0 .536.112.725.312 1.377 1.451 4.385 4.621 6.068 6.396.136.143.207.33.207.518 0 .417-.337.752-.75.752h-3.251v9.02c0 .531-.47 1.002-1 1.002h-3.998c-.53 0-1-.471-1-1.002zm7.506-1.5-4.507-4.751-4.507 4.751h3.008v10.022h2.998v-10.022z" /></svg>

          </button> */}

        </div>

      </div>

    </main >
  );
}

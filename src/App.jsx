import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Highlights from "./components/Highlights";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (

    <>
    <main className="bg-black text-white">
       <Navbar/>
       <Hero/>
       <Highlights/>
       <Model/>
           
    </main>

    </>
  );
}

export default App;

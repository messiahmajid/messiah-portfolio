"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ChalkBackground, WavyDivider } from "@/components/Doodles";
import PhotoStack from "@/components/PhotoStack";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Chalk-style doodles on dark background */}
      <ChalkBackground className="z-0" />

      {/* Side PhotoStacks */}
      <PhotoStack position="left" />
      <PhotoStack position="right" />

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />

        <WavyDivider className="my-4 opacity-30" color="#ff6b6b" />

        <About />

        <WavyDivider className="my-4 opacity-30" color="#4ecdc4" />

        <Skills />

        <WavyDivider className="my-4 opacity-30" color="#ffd54f" />

        <Experience />

        <WavyDivider className="my-4 opacity-30" color="#a855f7" />

        <Projects />

        <WavyDivider className="my-4 opacity-30" color="#3b82f6" />

        <Leadership />

        <WavyDivider className="my-4 opacity-30" color="#ff6b6b" />

        <Contact />
        <Footer />
      </div>
    </main>
  );
}

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
import { WavyDivider } from "@/components/Doodles";
import PhotoStack from "@/components/PhotoStack";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Side PhotoStacks */}
      <PhotoStack position="left" />
      <PhotoStack position="right" />

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />

        <WavyDivider className="my-4 opacity-30" color="#DC6B5A" />

        <About />

        <WavyDivider className="my-4 opacity-30" color="#5BA3D0" />

        <Skills />

        <WavyDivider className="my-4 opacity-30" color="#ffd54f" />

        <Experience />

        <WavyDivider className="my-4 opacity-30" color="#DC6B5A" />

        <Projects />

        <WavyDivider className="my-4 opacity-30" color="#5BA3D0" />

        <Leadership />

        <WavyDivider className="my-4 opacity-30" color="#DC6B5A" />

        <Contact />
        <Footer />
      </div>
    </main>
  );
}

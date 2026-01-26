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
import MainContainer from "@/components/MainContainer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <MainContainer>
      <main className="min-h-screen relative">
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <div className="max-w-6xl mx-auto px-4">
            <SectionDivider variant="dots" />
            <About />
            <SectionDivider variant="brackets" />
            <Skills />
            <SectionDivider variant="wave" />
            <Experience />
            <SectionDivider variant="line" />
            <Projects />
            <SectionDivider variant="dots" />
            <Leadership />
            <SectionDivider variant="brackets" />
            <Contact />
          </div>
          <Footer />
        </div>
      </main>
    </MainContainer>
  );
}

"use client";

import { motion } from "framer-motion";

const nameplate = { fontFamily: "'UnifrakturMaguntia', cursive" };
const headline = { fontFamily: "'Playfair Display', Georgia, serif" };
const body = { fontFamily: "'Libre Baskerville', Georgia, serif" };

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Layered paper stack effect */}
          <div
            className="absolute inset-0 rounded-sm rotate-[1.5deg] translate-x-3 translate-y-3"
            style={{ backgroundColor: "#EDE8DF", border: "1px solid rgba(26,26,26,0.08)" }}
          />
          <div
            className="absolute inset-0 rounded-sm -rotate-[0.8deg] translate-x-1.5 translate-y-1.5"
            style={{ backgroundColor: "#F2EDE5", border: "1px solid rgba(26,26,26,0.06)" }}
          />

          <article
            className="relative rounded-sm px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 shadow-xl"
            style={{
              backgroundColor: "#FBF8F1",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {/* === TOP BORDER === */}
            <div className="border-t-[3px] border-te-orange/70" />
            <div className="border-t border-te-dark/20 mt-[2px]" />

            {/* === MASTHEAD === */}
            <div className="text-center mt-5 mb-1">
              <h2 style={nameplate} className="text-4xl sm:text-5xl md:text-6xl text-te-dark tracking-wide">
                The Portfolio Times
              </h2>
            </div>

            {/* === INFO LINE === */}
            <div className="border-t border-te-dark/20 mt-2" />
            <div className="flex items-center justify-between py-1.5 text-[10px] sm:text-[11px] text-te-dark/40" style={body}>
              <span>Vol. I &middot; No. 1</span>
              <span className="hidden sm:inline">CORAL GABLES, FLORIDA</span>
              <span className="sm:hidden">CORAL GABLES, FL</span>
              <span className="text-te-orange/70 font-semibold">4.0 GPA Edition</span>
            </div>
            <div className="border-t-[2px] border-te-dark/50 mb-8" />

            {/* === HEADLINE === */}
            <div className="text-center mb-6 max-w-lg mx-auto">
              <h3
                style={headline}
                className="text-[26px] sm:text-[32px] md:text-[38px] font-black text-te-dark leading-[1.15] mb-3"
              >
                Miami Student Finds Himself Drawn to{" "}
                <span className="text-te-orange">Data</span>, Patterns, and{" "}
                <span className="text-te-orange">Hard Questions</span>
              </h3>
              <p
                style={{ ...headline, fontStyle: "italic" }}
                className="text-sm sm:text-base text-te-dark/50 leading-snug"
              >
                Majid pursues <span className="text-te-orange/80">Computer Science</span> and{" "}
                <span className="text-te-orange/80">Mathematics</span> at the University of Miami
              </p>
            </div>

            {/* === BYLINE === */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-6 h-px bg-te-orange/30" />
                <div className="w-1.5 h-1.5 bg-te-orange/50 rounded-full" />
                <div className="w-6 h-px bg-te-orange/30" />
              </div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-te-dark/40" style={body}>
                By Messiah Majid
              </p>
            </div>

            {/* === ARTICLE BODY === */}
            <div className="relative sm:columns-2 sm:gap-10" style={body}>
              <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-te-dark/10" />

              <p className="text-[14.5px] leading-[1.85] text-te-dark/70 mb-4 text-justify first-letter:text-[3.2rem] first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-[0.8] first-letter:text-te-orange" style={headline}>
                Messiah Majid likes working with data &mdash; especially when
                there&apos;s a lot of it, it&apos;s imperfect, or nobody really
                knows what to do with it yet. Most of the projects he gravitates
                toward involve trying to understand patterns, test assumptions,
                or make complicated information easier to reason about.
              </p>
              <p className="text-[14.5px] leading-[1.85] text-te-dark/70 mb-4 text-justify">
                Lately he has been interested in{" "}
                <span className="text-te-orange/90 font-semibold">machine learning</span>,
                analytics, biological systems, forecasting, and the ways people make
                decisions under uncertainty. He is still exploring, but knows he
                enjoys work that involves inference, systems thinking, and
                learning quickly.
              </p>

              {/* Pull quote */}
              <div className="break-inside-avoid my-5 py-4 px-4 border-l-[3px] border-te-orange/60 bg-te-orange/[0.04] rounded-r">
                <p className="text-[15px] leading-[1.7] text-te-dark/80 italic" style={headline}>
                  &ldquo;Good technical work isn&apos;t just about building
                  things &mdash; it&apos;s about understanding what matters,
                  what doesn&apos;t, and being able to explain the difference
                  clearly.&rdquo;
                </p>
              </div>

              <p className="text-[14.5px] leading-[1.85] text-te-dark/70 text-justify">
                He is especially drawn to{" "}
                <span className="text-te-orange/90 font-semibold">applied ML</span>,
                intelligent systems, and problems where computation can help
                people make better decisions.
              </p>
            </div>

            {/* === INTERESTS === */}
            <div className="mt-8 border-t border-te-dark/15 pt-5">
              <p className="text-[10px] tracking-[0.25em] uppercase text-te-dark/35 mb-3 text-center" style={body}>
                Areas of Interest
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Machine Learning",
                  "Data Analysis",
                  "Forecasting",
                  "Computational Biology",
                  "Prediction Markets",
                  "Distributed Systems",
                  "Philosophy",
                  "Design",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-[11px] rounded-full border border-te-orange/20 text-te-orange/70 bg-te-orange/[0.05]"
                    style={body}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* === BOTTOM BORDER === */}
            <div className="mt-6">
              <div className="border-t border-te-dark/20" />
              <div className="border-t-[3px] border-te-orange/70 mt-[2px]" />
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}

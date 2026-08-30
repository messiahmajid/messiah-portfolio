"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface PaperItem {
  title: string;
  author: string;
  body: string;
  reflection: string;
  link: string;
  image: string;
}

interface BookItem {
  title: string;
  author: string;
  body: string;
  reflection: string;
  image?: string;
}

interface PoemItem {
  title: string;
  author: string;
  body: string;
  reflection?: string;
}

const papers: PaperItem[] = [
  {
    title: "On the Shortness of Life",
    author: "Seneca",
    body: "A Stoic essay about time and the strange way people move through life without ever really feeling present inside of it. Seneca writes about how people give their time away constantly to anxiety, ambition, obligation, distraction, and other people's expectations, only to later realize how little of it actually felt fully lived. A lot of the essay is really about attention and consciousness and whether we are actually inhabiting our lives while we are living them.",
    reflection:
      "I think this one stays with me because I have a hard time existing in the present without feeling guilty about the future. There is always something else I should be doing, planning for, improving, fixing, or thinking about. Even during good moments, part of my brain is already somewhere else worrying about time running out or whether I am doing enough with the opportunities I have. I think being ambitious and grateful at the same time can sometimes turn into this constant pressure to justify your existence through productivity. This essay reminds me that if every moment only exists as preparation for another moment later on, you eventually realize you never actually allowed yourself to live anything while it was happening.",
    link: "https://dn790008.ca.archive.org/0/items/SenecaOnTheShortnessOfLife/Seneca%20on%20the%20Shortness%20of%20Life.pdf",
    image: "/personal/seneca.jpg",
  },
  {
    title: "The Unreasonable Effectiveness of Mathematics in the Natural Sciences",
    author: "Eugene Wigner",
    body: "An essay exploring one of the strangest facts about reality: mathematics, something humans invented abstractly in their heads, somehow ends up describing the physical universe with astonishing precision. Wigner reflects on how mathematical systems developed with no practical purpose often later become the exact language needed to explain physics, motion, electricity, probability, computing, and countless other natural phenomena. The essay is partly scientific, but it also feels philosophical and almost unsettling because it raises the question of why reality is understandable at all.",
    reflection:
      "I love this essay because it makes the universe feel simultaneously more rational and more mysterious. The idea that abstract symbols and patterns can predict the behavior of stars, particles, waves, economies, or biological systems feels almost absurd when you really sit with it. Sometimes I'll be studying something deeply theoretical and suddenly realize that the thing I'm looking at is not just a classroom exercise but an actual structure underlying reality itself. There's something deeply beautiful about that to me. It also makes me think a lot about how much of science and technology depends on humanity's ability to notice patterns long before we fully understand why those patterns exist in the first place.",
    link: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/wigner.pdf",
    image: "/personal/wigner.jpg",
  },
];

const books: BookItem[] = [
  {
    title: "Giovanni's Room",
    author: "James Baldwin",
    body: "A novel about love, shame, identity, and what happens when the life you want does not line up neatly with the life you have been taught to want.",
    reflection:
      "This book actually came highly recommended by a stranger I met at a bar on the Lower East Side one Saturday night in New York. I don't even remember how we started talking, or how the conversation somehow got to books, let alone James Baldwin, but he told me I had to read Giovanni's Room. So I picked it up not too long after, and I haven't really been able to put it down since.\n\nIt is just really, really well written. I feel like I can see the whole thing playing out in my head while I'm reading it, which I know sounds obvious because that is sort of what books are supposed to do, but some books make the distance between you and the story disappear much more easily than others. The cafés, the apartments, the streets at night, all of it feels very clear to me. Maybe that is partly because it is set in Paris and I can still remember those streets pretty well, so when Baldwin describes someone wandering around the city or sitting somewhere late at night, my mind already has somewhere to place them.\n\nWhat has interested me more, though, is how much of the book seems to be about the stories people build around themselves. David spends so much time trying to decide what certain feelings mean about him, and almost just as much time trying to convince himself they do not mean anything at all. There is this gap between what he feels, what he is willing to admit he feels, and the person he thinks he is supposed to be, and a lot of the sadness seems to come from watching him live inside that gap. Giovanni ends up caught in it too, which makes the whole thing feel less like a simple tragic love story and more like a story about what self-denial can do to other people.\n\nIt is also a surprisingly short book. I expected something this heavy to feel slower, but Baldwin gets into all of this without making the book feel dense or difficult to read. I have been moving through it pretty quickly, although I do keep stopping every few pages, sometimes because of a sentence I want to sit with, and sometimes because, once again, there is French I need to translate.",
    image: "/personal/giovannis_room.jpg",
  },
];

const poems: PoemItem[] = [
  {
    title: "Everything is Waiting for You",
    author: "David Whyte",
    body: "Your great mistake is to act the drama\nas if you were alone. As if life\nwere a progressive and cunning crime\nwith no witness to the tiny hidden\ntransgressions. To feel abandoned is to deny\nthe intimacy of your surroundings. Surely,\neven you, at times, have felt the grand array;\nthe swelling presence, and the chorus, crowding\nout your solo voice. You must note\nthe way the soap dish enables you,\nor the window latch grants you freedom.\nAlertness is the hidden discipline of familiarity.\nThe stairs are your mentor of things\nto come, the doors have always been there\nto frighten you and invite you,\nand the tiny speaker in the phone\nis your dream-ladder to divinity.\n\nPut down the weight of your aloneness and ease into the\nconversation. The kettle is singing\neven as it pours you a drink, the cooking pots\nhave left their arrogant aloofness and\nseen the good in you at last. All the birds\nand creatures of the world are unutterably\nthemselves. Everything is waiting for you.",
    reflection: undefined,
  },
];

const videoLink = "https://www.youtube.com/watch?v=KHd-luu3M8s";

function PaperEntry({ item }: { item: PaperItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* Paper image */}
        <motion.div
          whileHover={{ rotate: -2, scale: 1.03 }}
          className="shrink-0 relative"
        >
          <div className="absolute inset-0 bg-te-dark/15 rounded-md transform translate-x-2 translate-y-2" />
          <div className="relative w-44 h-64 rounded-md overflow-hidden border border-te-dark/10 shadow-lg bg-te-surface">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex-1 pt-2">
          <h3 className="text-2xl md:text-3xl font-bold text-te-orange leading-tight mb-1.5">
            {item.title}
          </h3>
          <p className="text-sm text-text-muted font-medium mb-5">
            {item.author}
          </p>

          <p className="text-te-dark text-base leading-[1.8] mb-4">
            {item.body}
          </p>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-te-orange hover:text-te-orange/70 transition-colors font-medium text-sm"
          >
            read here
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Thoughts — below, on the page */}
      <p className="text-text-muted text-base leading-[1.8] mt-6 pl-2 md:pl-4">
        {item.reflection}
      </p>
    </motion.div>
  );
}

function BookEntry({ item }: { item: BookItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* Book cover */}
        <motion.div
          whileHover={{ rotate: -2, scale: 1.03 }}
          className="shrink-0 relative"
        >
          <div className="absolute -left-1 top-2 bottom-2 w-3 bg-gradient-to-r from-black/20 to-transparent rounded-l" />
          <div className="absolute inset-0 bg-te-dark/15 rounded-md transform translate-x-2 translate-y-2" />

          <div className="relative w-44 h-64 rounded-md overflow-hidden border border-te-dark/10 shadow-lg bg-te-surface">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4 bg-gradient-to-br from-te-surface to-white">
                <p className="text-center text-sm font-bold text-te-dark/40 leading-tight">
                  {item.title}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Text — no card */}
        <div className="flex-1 pt-2">
          <h3 className="text-2xl md:text-3xl font-bold text-te-orange leading-tight mb-1.5">
            {item.title}
          </h3>
          <p className="text-sm text-text-muted font-medium mb-5">
            {item.author}
          </p>

          <p className="text-te-dark text-base leading-[1.8] mb-4">
            {item.body}
          </p>

          <div className="text-te-dark/70 text-base leading-[1.8] space-y-4">
            {item.reflection.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoEntry() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <a href={videoLink} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative w-fit mx-auto">
          {/* TV body */}
          <div className="relative bg-te-dark rounded-2xl p-3 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
            {/* Antenna */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-4">
              <div className="w-1 h-7 bg-te-dark/60 rounded-full transform -rotate-[20deg] origin-bottom" />
              <div className="w-1 h-7 bg-te-dark/60 rounded-full transform rotate-[20deg] origin-bottom" />
            </div>

            {/* Screen */}
            <div className="relative w-64 h-40 sm:w-80 sm:h-48 bg-zinc-900 rounded-lg overflow-hidden border-2 border-zinc-700">
              {/* YouTube thumbnail */}
              <img
                src="https://img.youtube.com/vi/KHd-luu3M8s/maxresdefault.jpg"
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Scanlines overlay */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)" }}
              />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-te-orange/90 group-hover:bg-te-orange flex items-center justify-center transition-colors shadow-lg">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* TV base buttons */}
            <div className="flex items-center justify-between mt-2 px-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-zinc-600" />
            </div>
          </div>
        </div>

        <p className="text-center text-text-muted text-sm mt-5 group-hover:text-te-orange transition-colors">
          a video i found interesting
        </p>
      </a>
    </motion.div>
  );
}

function PoemEntry({ item }: { item: PoemItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto text-center py-8"
    >
      <p className="text-sm text-text-muted font-medium mb-6 uppercase tracking-widest">
        {item.author}
      </p>

      <h3 className="text-2xl md:text-3xl font-bold text-te-orange mb-10 italic">
        {item.title}
      </h3>

      <div className="space-y-1">
        {item.body.split("\n").map((line, i) => (
          <p
            key={i}
            className="text-te-dark text-[15px] leading-[2.2] tracking-wide"
          >
            {line}
          </p>
        ))}
      </div>

      {item.reflection && (
        <p className="mt-12 text-text-muted text-sm">
          — {item.reflection}
        </p>
      )}
    </motion.div>
  );
}

function LetterboxdEntry() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row sm:items-center gap-4"
    >
      <p className="text-text-secondary text-base leading-relaxed">
        Where I log my films and collect my thoughts on them.
      </p>

      <a
        href="https://letterboxd.com/messiahmajid/diary/"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-te-orange hover:bg-te-orange/90 text-white text-sm font-medium rounded-lg transition-all"
      >
        visit profile
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </motion.div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl font-bold mb-10"
    >
      {children}
    </motion.h2>
  );
}

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-te-beige">
      {/* Nav */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-te-beige/90 backdrop-blur-lg border-b border-te-dark/5"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg className="w-4 h-4 text-text-muted group-hover:text-te-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-bold text-te-dark">
              Messiah<span className="text-te-orange">.</span>
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Page content */}
      <div className="pt-28 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
              A running collection of ideas, papers, books, and topics I&apos;ve been interested in recently.
            </p>
          </motion.div>

          {/* Books */}
          <section className="mb-24">
            <SectionHeader>
              <span className="text-te-orange">books </span>
              <span className="text-te-dark">i&apos;m </span>
              <span className="text-te-orange">currently </span>
              <span className="text-te-dark">reading.</span>
            </SectionHeader>

            <div className="space-y-14">
              {books.map((book) => (
                <BookEntry key={book.title} item={book} />
              ))}
            </div>
          </section>

          {/* Video */}
          <section className="mb-24">
            <VideoEntry />
          </section>

          {/* Papers */}
          <section className="mb-24">
            <SectionHeader>
              <span className="text-te-dark">papers </span>
              <span className="text-te-orange">i&apos;ve found </span>
              <span className="text-te-dark">fascinating </span>
              <span className="text-te-orange">recently.</span>
            </SectionHeader>

            <div className="space-y-20">
              {papers.map((paper, index) => (
                <PaperEntry key={paper.title} item={paper} index={index} />
              ))}
            </div>
          </section>

          {/* Letterboxd */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                <span className="text-te-dark">my </span>
                <span className="text-te-orange">letterboxd.</span>
              </h2>
            </motion.div>

            <LetterboxdEntry />
          </section>

          {/* Poem — extra breathing room */}
          <section className="pt-8">
            {poems.map((poem) => (
              <PoemEntry key={poem.title} item={poem} />
            ))}
          </section>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-text-muted/50 text-xs mt-16 italic"
          >
            updated whenever something new grabs me
          </motion.p>
        </div>
      </div>
    </div>
  );
}

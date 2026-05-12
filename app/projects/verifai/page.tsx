// app/projects/verifai/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Inter } from "next/font/google";

const interFontBold = Inter({
  subsets: ["latin"],
  weight: "800",
});

const interFont = Inter({
  weight: "300",
});

export default function VerifAI() {
  return (
    <main className="w-full min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        className="w-1/2 mt-10 mb-10 bg-gray-900 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between"
        whileHover={{ scale: 1.01 }}
        transition={{ ease: ["easeInOut"], stiffness: 300, damping: 20 }}
      >
        <p className={`text-center opacity-60 ${interFont.className} tracking-widest uppercase`}>HackFest GDG Loyola · March 2026</p>
        <h1
          className={`flex justify-center text-2xl ${interFontBold.className}`}
        >
          VerifAI — AI-Powered Source Verification for Student Research Papers
        </h1>
        <p className={`text-center opacity-60 ${interFont.className}`}>Lead Developer</p>
        <Image
          src="/assets/projects/VerifAI/Header.png"
          alt="Header Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg border mt-5 border-black"
        />
        <div className={`flex mt-5 gap-4 items-center ${interFont.className}`}>
          <div className="flex-1">
            <h2 className="text-justify font-extralight text-[clamp(0.25rem,1vw,1.5rem)] opacity-60">
              Every year, millions of students face the same painful bottleneck
              in academic writing: finding credible, peer-reviewed sources to
              support their claims. The traditional process is brutally manual —
              students must navigate unfamiliar databases, sift through
              paywalled journals, evaluate source legitimacy, and format
              citations by hand. This process alone can consume more time than
              writing the paper itself. Worse, the rise of generative AI has
              introduced a dangerous shortcut: students now ask ChatGPT for
              citations, only to receive convincing but entirely fabricated
              paper titles, fake authors, and DOI links that lead nowhere.
              Instructors are catching these hallucinated sources at an alarming
              rate, resulting in failing grades and academic integrity
              violations. The students who need the most help — those writing
              their first-ever research paper in senior high school — are the
              ones most vulnerable to this trap.
            </h2>
          </div>
          <Image
            src="/assets/projects/VerifAI/RightImage.png"
            alt="Header Image"
            width={0}
            height={0}
            sizes="100vw"
            className="flex ml-auto w-1/3 h-auto rounded-lg border border-black"
          />
        </div>
        <div className={`flex mt-5 gap-4 items-center`}>
          <Image
            src="/assets/projects/VerifAI/LeftImage.png"
            alt="Header Image"
            width={0}
            height={0}
            sizes="100vw"
            className="flex ml-auto w-1/3 h-auto rounded-lg border border-black"
          />
          <div className="flex-1">
            <h2 className="text-justify font-extralight text-[clamp(0.25rem,1vw,1.5rem)] opacity-60 ${interFont.className}">
              VerifAI eliminates both problems in a single tool. Students simply
              highlight any claim in their document, and VerifAI's AI engine
              searches the academic internet to surface 3–5 real, peer-reviewed
              papers relevant to that specific sentence. Every paper returned is
              cross-validated against the CrossRef metadata registry — titles,
              authors, and DOIs are verified before they ever reach the student,
              making hallucinated citations structurally impossible. Once a
              student selects a source, they can paste the full paper text and
              VerifAI performs word-for-word grounding, highlighting the exact
              passages that support their claim and generating a credibility
              score based on recency, relevance, and authority. The tool then
              produces a ready-to-insert RRL synthesis paragraph with a properly
              formatted APA 7th edition citation. The entire workflow — from
              claim to cited paragraph — takes under two minutes.
            </h2>
          </div>
        </div>
        <h2
          className={`mt-5 text-justify font-extralight text-[clamp(0.25rem,1vw,1.5rem)] opacity-60 ${interFont.className}`}
        >
          Ultimately, it’s a tool
          students use for speed and educators trust for integrity, fostering
          proper sourcing habits instead of shortcuts.
        </h2>
        <h3 className={`text-right mt-5 ${interFont.className}`}>
          <Link
                  href="https://github.com/renzoboyy/Verifork"
                  target="_blank"
                >View on GitHub</Link>
        </h3>
      </motion.div>
    </main>
  );
}

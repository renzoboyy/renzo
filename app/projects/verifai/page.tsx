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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full min-h-screen bg-black text-white flex justify-center py-10
      scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <motion.div
        className="w-[92vw] md:w-[75vw] lg:w-1/2 mt-6 md:mt-10 mb-10
          bg-gray-900 backdrop-blur-sm rounded-2xl
          p-4 md:p-5 lg:p-6 flex flex-col justify-between"
        whileHover={{ scale: 1.01 }}
        transition={{ ease: ["easeInOut"], stiffness: 300, damping: 20 }}
      >
        {/* Event label */}
        <p
          className={`text-center opacity-60 text-xs md:text-sm ${interFont.className} tracking-widest uppercase`}
        >
          HackFest GDG Loyola · March 2026
        </p>

        {/* Title */}
        <h1
          className={`mt-2 text-center text-lg md:text-2xl ${interFontBold.className}`}
        >
          VerifAI — AI-Powered Source Verification for Student Research Papers
        </h1>

        {/* Role */}
        <p className={`text-center opacity-60 text-sm ${interFont.className}`}>
          Lead Developer
        </p>

        {/* Header image */}
        <Image
          src="/assets/projects/VerifAI/Header.png"
          alt="Header Image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg border mt-5 border-black"
        />

        {/* Description + bullets — stacked on mobile, side-by-side on md+ */}
        <div
          className={`flex flex-col md:flex-row mt-5 gap-4 items-start ${interFont.className}`}
        >
          {/* Description */}
          <div className="flex-1">
            <p className="text-justify font-extralight text-sm md:text-base opacity-60">
              VerifAI is an AI-powered Google Docs extension that helps
              researchers and students verify the credibility of their sources
              in real time, directly inside the document they are writing.{" "}
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              <span className="block mt-3 md:mt-0">
                Built during HackFest GDG Loyola, the tool surfaces a 100-point
                credibility score for each citation — cutting research
                verification time by roughly 40% compared to manual
                fact-checking workflows.
              </span>
            </p>
          </div>

          {/* Bullet list */}
          <div className="flex-1">
            <ul
              className={`list-none space-y-2 font-extralight text-sm md:text-base ${interFont.className}`}
            >
              {[
                "Led architecture and technical design from inception through deployment",
                "Built and owned the 100-point credibility scoring algorithm",
                "Produced technical documentation including data flow diagrams, use cases, and the SRS",
                "Drove Google Workspace API integration with hands-on coordination across the dev team",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="opacity-60 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing statement */}
        <h2
          className={`mt-5 text-justify font-extralight text-sm md:text-base opacity-60 ${interFont.className}`}
        >
          Ultimately, it's a tool students use for speed and educators trust for
          integrity, fostering proper sourcing habits instead of shortcuts.
        </h2>

        {/* GitHub link */}
        <h3 className={`text-right mt-5 text-sm ${interFont.className}`}>
          <Link href="https://github.com/renzoboyy/Verifork" target="_blank">
            View on GitHub
          </Link>
        </h3>
      </motion.div>
    </motion.main>
  );
}
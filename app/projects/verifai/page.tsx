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
    <main className="w-full min-h-screen bg-black text-white flex justify-center py-10
  scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <motion.div
        className="w-1/2 mt-10 mb-10 bg-gray-900 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between"
        whileHover={{ scale: 1.01 }}
        transition={{ ease: ["easeInOut"], stiffness: 300, damping: 20 }}
      >
        <p
          className={`text-center opacity-60 ${interFont.className} tracking-widest uppercase`}
        >
          HackFest GDG Loyola · March 2026
        </p>
        <h1
          className={`flex justify-center text-2xl ${interFontBold.className}`}
        >
          VerifAI — AI-Powered Source Verification for Student Research Papers
        </h1>
        <p className={`text-center opacity-60 ${interFont.className}`}>
          Lead Developer
        </p>
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
            <h2 className="text-justify font-extralight text-md] opacity-60 ${interFont.className}">
              VerifAI is an AI-powered Google Docs extension that helps
              researchers and students verify the credibility of their sources
              in real time, directly inside the document they are writing.{" "}
              <br />
              <br />
              Built during HackFest GDG Loyola, the tool surfaces a 100-point
              credibility score for each citation — cutting research
              verification time by roughly 40% compared to manual fact-checking
              workflows.
            </h2>
          </div>
          <div className="flex-1">
              <ul
                className={`list-none space-y-2 font-extralight text-md ${interFont.className}`}
              >
                {[
                  "Led architecture and technical design from inception through deployment",
                  "Built and owned the 100-point credibility scoring algorithm",
                  "Produced technical documentation including data flow diagrams, use cases, and the SRS",
                  "Drove Google Workspace API integration with hands-on coordination across the dev team",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="opacity-60">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
          </div>
        </div>
        <h2
          className={`mt-5 text-justify font-extralight text-md opacity-60 ${interFont.className}`}
        >
          Ultimately, it’s a tool students use for speed and educators trust for
          integrity, fostering proper sourcing habits instead of shortcuts.
        </h2>
        <h3 className={`text-right mt-5 text-sm ${interFont.className}`}>
          <Link href="https://github.com/renzoboyy/Verifork" target="_blank">
            View on GitHub
          </Link>
        </h3>
      </motion.div>
    </main>
  );
}

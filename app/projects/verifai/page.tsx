// app/projects/verifai/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Inter, Poppins } from "next/font/google";

const interFontBold = Inter({
  subsets: ["latin"],
  weight: "800",
});

const poppins = Poppins({
  weight: "300",
});

export default function VerifAI() {
  return (
    <main className="w-full min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        className="w-2/3 bg-gray-900 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h1 className={`flex justify-center text-4xl ${interFontBold.className}`}>VerifAI</h1>
        <div className="px-4 m-2">
                  <Image 
        src="/assets/projects/VerifAI/Header.png"
        alt="Header Image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-lg border border-black" />
        </div>
      </motion.div>
    </main>
  );
}
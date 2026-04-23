"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import GithubCalendar from "./components/GithubCalendar";
import { motion } from "motion/react";

const interFontBold = Inter({
  subsets: ["latin"],
  weight: "800",
});

const poppins = Poppins({
  weight: "300",
});

export default function Home() {
  return (
    <main>
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ zIndex: 50 }}
      >
        <div className="h-[95vh] w-[95vw] overflow-y-auto p-4 md:p-6 lg:p-8">
          {/* Grid goes HERE, wrapping the cards directly */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 auto-rows-fr">


            {/* Me Card */}
            <motion.div
              className="col-span-1 row-span-1 
                bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`text-4xl ${interFontBold.className}`}>
                <h1>renzo</h1>
                <div className={`text-base opacity-50 ${poppins.className}`}>
                  Information Systems
                </div>
              </div>
            </motion.div>


            {/* GitHub Card */}
            <motion.div
              className="col-span-1 row-span-1 bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h2 className={`text-3xl mb-2 ${interFontBold.className}`}>
                GitHub
              </h2>
              <div className="overflow-hidden w-full">
                <div className="font-sans">
                  <GithubCalendar />
                </div>
              </div>
              <a
                href="https://github.com/renzoboyy"
                target="_blank"
                className={`text-xs underline text-blue-400 mt-2 ${poppins.className}`}
              >
                View Profile
              </a>
            </motion.div>




            <motion.div
              className="col-span-2 row-span-1 
                bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >

            </motion.div>



          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import GithubCalendar from "./components/GithubCalendar";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";

interface HomeClientProps {
  stravaSlot: ReactNode;
}

const interFontBold = Inter({
  subsets: ["latin"],
  weight: "800",
});

const poppins = Poppins({
  weight: "300",
});

const items = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center gap-1 h-full">
        <h2 className={`text-sm ${interFontBold.className}`}>VerifAI</h2>
        <div className="relative w-full flex-1 rounded-lg overflow-hidden ring-2 ring-white/10">
        <Link href="https://github.com/renzoboyy/Verifork" target="_blank">
          <Image
            src="/assets/projects/VerifAI.png"
            fill
            alt="VerifAI"
            className="object-cover"
          />
          </Link>
        </div>
      </div>
    ),
  },
  { id: 2, label: "Box 2" },
  { id: 3, label: "Box 3" },
  { id: 4, label: "Box 4" },
];

export default function HomeClient({ stravaSlot }: HomeClientProps) {
  return (
    <main className="relative w-full h-screen">
      <Image
        src="/assets/Background.jpg"
        fill
        alt="Background Image"
        className="object-cover object-center blur-[3px] brightness-[.2]"
      />
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ zIndex: 50 }}
      >
        <div className="h-[95vh] w-[95vw] overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 auto-rows-fr">
            {/* Me Card */}
            <motion.div
              className="col-span-1 row-span-1 
                bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`text-base ${poppins.className}`}>
                <h1 className={`text-6xl ${interFontBold.className}`}>renzo</h1>
                <h2 className="opacity-50">Information Systems</h2>
              </div>
              {/* Socials */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.linkedin.com/in/jed-lawrence-engbino-629997372/"
                  target="_blank"
                >
                  <Image
                    src="/assets/icons/LinkedIn.png"
                    width={24}
                    height={24}
                    alt="LinkedIn Icon"
                    className="pointer-events-none"
                  />
                </Link>

                <Link href="https://www.instagram.com/jlrebn/" target="_blank">
                  <Image
                    src="/assets/icons/Instagram.png"
                    width={24}
                    height={24}
                    alt="Instagram Icon"
                    className="pointer-events-none"
                  />
                </Link>

                <Link
                  href="https://discord.com/users/472141998565097472"
                  target="_blank"
                >
                  <Image
                    src="/assets/icons/Disc.png"
                    width={24}
                    height={24}
                    alt="Discord Icon"
                    className="pointer-events-none"
                  />
                </Link>

                <Link
                  href="https://www.facebook.com/jelo.binz/"
                  target="_blank"
                >
                  <Image
                    src="/assets/icons/Facebook.png"
                    width={24}
                    height={24}
                    alt="Facebook Icon"
                    className="pointer-events-none"
                  />
                </Link>
              </div>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              className="col-span-2 row-span-1 bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* GitHub Title with Logo */}
              <div className="mb-2">
                <Link
                  href="https://github.com/renzoboyy"
                  target="_blank"
                  className="items-center gap-3 inline-flex"
                >
                  <Image
                    src="/assets/icons/GitHub.png"
                    width={28}
                    height={28}
                    alt="GitHub Icon"
                  />
                  <h2 className={`text-3xl ${interFontBold.className}`}>
                    GitHub
                  </h2>
                </Link>
              </div>

              {/* GitHub Calendar */}
              <div className="overflow-hidden w-full">
                <div className={`${poppins.className}`}>
                  <GithubCalendar />
                </div>
              </div>
            </motion.div>

            {/* Strava Card */}
            <motion.div
              className="col-span-1 row-span-1 
              bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Strava Icon */}
              <Link
                href="https://www.strava.com/athletes/195991209"
                target="_blank"
                className="w-31.25 block"
              >
                <Image
                  src="/assets/icons/Strava.png"
                  width={125}
                  height={125}
                  alt="Strava Icon"
                />
              </Link>
              {/* Me Image */}
              <Image
                src="/assets/Me.png"
                alt="cute portrait of me"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-40 transform -scale-x-100 pointer-events-none"
              />
              {/* Latest Strava Activity */}
              <div className="relative z-10">{stravaSlot}</div>
            </motion.div>

            {/* Projects Card */}
            <motion.div
              className="col-span-2 row-span-1 bg-amber-950/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h2 className={`text-3xl ${interFontBold.className}`}>
                Projects
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 h-full">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    className="bg-black/70 mt-2 backdrop-blur-sm rounded-xl p-2 md:p-3 flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item.content}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

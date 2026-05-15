"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import GithubCalendar from "./components/GithubCalendar";
import { motion } from "motion/react";
import { ReactNode, useState } from "react";
import { Inter, Poppins } from "next/font/google";
import { useNavigate } from "./hooks/useNavigate";

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

export default function HomeClient({ stravaSlot }: HomeClientProps) {
  const navigate = useNavigate();
  const [overlayMinimized, setOverlayMinimized] = useState(false);

  const items = [
    {
      id: 1,
      content: (
        <div
          onClick={() => navigate("/projects/verifai")}
          className="cursor-pointer flex absolute inset-0 rounded-xl"
        >
          <div className="relative w-full flex-1">
            <Image
              src="/assets/projects/VerifAI/Logo.png"
              fill
              alt="VerifAI"
              className="object-cover"
            />
          </div>
        </div>
      ),
    },
    { id: 2, label: "Box 2" },
    { id: 3, label: "Box 3" },
    { id: 4, label: "Box 4" },
  ];

  return (
    <main className="relative w-full h-screen">
      {/* Background */}
      <Image
        src="/assets/Background.jpg"
        fill
        alt="Background Image"
        className="object-cover object-center blur-[3px] brightness-[.2]"
      />

      {/* Minimize/Expand Button */}
      <button
        onClick={() => setOverlayMinimized((v) => !v)}
        className="fixed top-4 right-4 z-[60] bg-black/60 text-white px-3 py-1.5 rounded-md hover:bg-black/80 transition-colors text-sm"
        aria-label={overlayMinimized ? "Expand" : "Minimize"}
      >
        {overlayMinimized ? "+" : "−"}
      </button>

      {/* Overlay */}
      {!overlayMinimized && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 50 }}
        >
          {/*
           * Mobile: full viewport, scrollable column
           * md+: fixed 95vh/vw card with its own scroll, multi-column bento
           */}
          <div
            className="w-full h-[95vh] overflow-y-auto p-3 md:w-[95vw] md:p-6 lg:p-8
  scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 md:h-full md:auto-rows-fr">
              {/* Me Card */}
              <motion.div
                className="col-span-1 row-span-1
                  bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`text-base ${poppins.className}`}>
                  <h1
                    className={`text-5xl md:text-6xl ${interFontBold.className}`}
                  >
                    renzo
                  </h1>
                  <h2 className="opacity-50 text-sm md:text-base">
                    Information Systems | Software Engineer
                  </h2>
                </div>

                {/* Socials */}
                <div className="flex flex-wrap gap-3 mt-3">
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
                  <Link
                    href="https://www.instagram.com/jlrebn/"
                    target="_blank"
                  >
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

              {/* GitHub Card — spans 2 cols on md+ */}
              <motion.div
                className="col-span-1 md:col-span-2 row-span-1 bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
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
                    <h2
                      className={`text-2xl md:text-3xl ${interFontBold.className}`}
                    >
                      GitHub
                    </h2>
                  </Link>
                </div>

                {/* Calendar scrolls horizontally on small screens */}
                <div className="overflow-x-auto w-full">
                  <div className={`${poppins.className}`}>
                    <GithubCalendar />
                  </div>
                </div>
              </motion.div>

              {/* Strava Card */}
              <motion.div
                className="col-span-1 row-span-1 relative
                  bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href="https://www.strava.com/athletes/195991209"
                  target="_blank"
                  className="block w-fit"
                >
                  <Image
                    src="/assets/icons/Strava.png"
                    width={100}
                    height={100}
                    alt="Strava Icon"
                  />
                </Link>

                {/* Portrait — decorative */}
                <Image
                  src="/assets/Me.png"
                  alt=""
                  aria-hidden="true"
                  width={1000}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-40 transform -scale-x-100 pointer-events-none"
                />

                {/* Latest Strava Activity */}
                <div className="relative z-10">{stravaSlot}</div>
              </motion.div>

              {/* Projects Card — spans 2 cols on md+ */}
              <motion.div
                className="col-span-1 md:col-span-2 row-span-1 bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2
                  className={`text-2xl md:text-3xl ${interFontBold.className} mb-2`}
                >
                  Projects
                </h2>

                {/* 2 cols on mobile, 4 cols on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      className="relative overflow-hidden bg-black/80 backdrop-blur-sm rounded-xl aspect-video md:aspect-auto md:h-full flex flex-col"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {item.content}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills Card — col span 2, row span 2 */}
              <motion.div
                className="col-span-1 md:col-span-2 row-span-2 bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2
                  className={`text-2xl md:text-3xl ${interFontBold.className} mb-3`}
                >
                  Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1">
                  {[
                    {
                      title: "Web Development",
                      description:
                        "React, Next.js, Tailwind — building responsive, modern interfaces from scratch.",
                    },
                    {
                      title: "Database Management",
                      description:
                        "SQL & NoSQL databases; schema design, queries, and basic normalization.",
                    },
                    {
                      title: "Data Analysis",
                      description:
                        "Python (pandas, NumPy), Excel, and basic visualization with Matplotlib or Seaborn.",
                    },
                    {
                      title: "Systems Analysis & Design",
                      description:
                        "Use-case modeling, ERDs, DFDs, and systems documentation.",
                    },
                    {
                      title: "Version Control",
                      description:
                        "Git workflows — branching, pull requests, and collaborative development on GitHub.",
                    },
                    {
                      title: "Business Process Modeling",
                      description:
                        "Mapping and optimizing workflows using BPMN and process flow diagrams.",
                    },
                  ].map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="relative overflow-hidden bg-black/80 backdrop-blur-sm rounded-xl p-4 flex flex-col justify-between"
                      whileHover={{ scale: 1.04 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <h3
                        className={`text-sm font-semibold text-white mb-2 ${interFontBold.className}`}
                      >
                        {skill.title}
                      </h3>
                      <p
                        className={`text-xs text-white/50 leading-relaxed ${poppins.className}`}
                      >
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Card — col span 1 */}
              <motion.div
                className="col-span-1 row-span-1 bg-black/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2
                  className={`text-2xl md:text-3xl ${interFontBold.className}`}
                >
                  Contact Me
                </h2>

                <div className="flex flex-col gap-2 flex-1">
                  {[
                    {
                      icon: "✉️",
                      label: "Email",
                      value: "jedlawrence.engbino@benilde.edu.ph",
                      href: "mailto:jedlawrence.engbino@benilde.edu.ph",
                    },
                    {
                      icon: "📱",
                      label: "Phone",
                      value: "+63 945 971 8300",
                      href: "tel:+639459718300",
                    },
                  ].map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-3 bg-black/50 rounded-xl p-3 hover:bg-white/10 transition-colors group flex-1"
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p
                          className={`text-[10px] text-white/40 uppercase tracking-widest ${poppins.className}`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`text-sm text-white/80 group-hover:text-white transition-colors ${poppins.className}`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <p className={`text-[10px] text-white/30 ${poppins.className}`}>
                  Open to internships & collabs
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// app/template.tsx
"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

// app/template.tsx
export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black z-[100] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.05, ease: "easeOut", delay: 0.1 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        onAnimationComplete={() => {
          document.body.style.overflow = ""; // restore after transition
        }}
        onAnimationStart={() => {
          document.body.style.overflow = "hidden"; // hide scrollbar during transition
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

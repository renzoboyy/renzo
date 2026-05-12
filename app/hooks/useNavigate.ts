// app/hooks/useNavigate.ts
"use client";
import { useRouter } from "next/navigation";

export function useNavigate() {
  const router = useRouter();

  const navigate = (href: string) => {
    const overlay = document.createElement("div");
    overlay.id = "nav-overlay";
    overlay.style.cssText = `
      position: fixed; inset: 0;
      background: black;
      z-index: 999;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    `;
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.opacity = "1";
      });
    });

    setTimeout(() => {
      router.push(href);
      // Remove overlay after navigation so template can take over
      setTimeout(() => {
        overlay.remove();
      }, 100);
    }, 400);
  };

  return navigate;
}
// app/hooks/useNavigate.ts
"use client";
import { useRouter } from "next/navigation";

export function useNavigate() {
  const router = useRouter();
  const navigate = (href: string) => router.push(href);
  return navigate;
}
"use client";
import { useEffect } from "react";

export function InitFadeIn() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-in-up")
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
            setTimeout(() => el.classList.add("in-view"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
export default InitFadeIn;

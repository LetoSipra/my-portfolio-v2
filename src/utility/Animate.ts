"use client";
import { useEffect, useState } from "react";

export default function Animate(selector: string) {
  const [isSeen, setIsSeen] = useState<boolean>(false);

  useEffect(() => {
    const id: any = document.querySelector("." + selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("showAnm", entry.isIntersecting);
          if (entry.isIntersecting) {
            setIsSeen(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (isSeen) return;
    observer.observe(id);
  });
}

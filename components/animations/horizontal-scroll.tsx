"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { prefersReducedMotion } from "@/lib/animations/utils";
import { cn } from "@/lib/utils";

interface HorizontalScrollProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Turns its children into a horizontal track that slides while the section is
 * pinned — the "Selected Projects" effect. Children should be fixed-width
 * cards (e.g. `w-screen shrink-0` or `w-[80vw]`).
 */
export default function HorizontalScroll({ className, children }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track || prefersReducedMotion()) return;

      const getDistance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className={cn("relative h-screen overflow-hidden", className)}>
      <div ref={trackRef} className="flex h-full w-max items-center gap-6 px-6 md:px-12">
        {children}
      </div>
    </div>
  );
}

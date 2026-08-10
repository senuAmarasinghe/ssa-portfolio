"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { prefersReducedMotion } from "@/lib/animations/utils";

interface ParallaxProps {
  /** Movement intensity, 0..1. Higher values move the element more. */
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Scroll-scrubbed vertical parallax. Wrap in an `overflow-hidden` container and
 * size the inner content slightly larger than the container so no gaps appear
 * while it moves.
 */
export default function Parallax({ speed = 0.35, className, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const distance = speed * 100;
      gsap.fromTo(
        el,
        { yPercent: -distance },
        {
          yPercent: distance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

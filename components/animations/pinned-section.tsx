"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/animations/gsap";
import { prefersReducedMotion } from "@/lib/animations/utils";

interface PinnedSectionProps {
  /** Pin start position (defaults to the section reaching the top of the viewport). */
  start?: string;
  /** Pin end distance, e.g. "+=100%" to pin for one viewport height. */
  end?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Pins its content in place while the page scrolls past it — the storytelling
 * pattern used on the reference site. Content should fill the viewport.
 */
export default function PinnedSection({
  start = "top top",
  end = "+=100%",
  className,
  children,
}: PinnedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      ScrollTrigger.create({
        trigger: el,
        start,
        end,
        pin: true,
        anticipatePin: 1,
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

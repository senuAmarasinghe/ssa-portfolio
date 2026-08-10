"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/animations/gsap";
import { isElementInViewport, prefersReducedMotion } from "@/lib/animations/utils";

interface TextRevealProps {
  /** Rendered element type. Defaults to an h2. */
  as?: React.ElementType;
  /** How to split the text before animating. */
  type?: "lines" | "words" | "chars";
  /** Delay between each split piece (s). */
  stagger?: number;
  /** Duration of each piece animation (s). */
  duration?: number;
  /** Delay before the animation starts (s). */
  delay?: number;
  /** ScrollTrigger start position. */
  start?: string;
  /** Clip line reveals with `overflow: hidden`. */
  mask?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Splits text into lines/words/chars (SplitText) and reveals them with a
 * staggered rise on scroll. Skipped for users who prefer reduced motion; text
 * stays server-rendered and visible.
 */
export default function TextReveal({
  as: Tag = "h2",
  type = "lines",
  stagger = 0.06,
  duration = 0.9,
  delay = 0,
  start = "top 85%",
  mask = true,
  className,
  children,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const split = SplitText.create(el, {
        type,
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
      });

      const targets = split[type] as Element[];

      gsap.set(targets, { yPercent: 110, opacity: 0 });

      const tl = gsap.timeline({ paused: true, delay });
      tl.to(targets, {
        yPercent: 0,
        opacity: 1,
        stagger,
        duration,
        ease: "power4.out",
      });

      if (isElementInViewport(el)) {
        tl.play();
        return;
      }

      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => tl.play(),
      });
    },
    { scope: ref },
  );

  return (
    <Tag
      ref={ref}
      className={className}
      style={mask && type === "lines" ? { overflow: "hidden" } : undefined}
    >
      {children}
    </Tag>
  );
}

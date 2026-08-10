"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/animations/gsap";
import { preloaderRevealed } from "@/lib/animations/preloader";
import { isElementInViewport, prefersReducedMotion } from "@/lib/animations/utils";

interface LetterRevealProps {
  /** Rendered element type. Defaults to an h1. */
  as?: React.ElementType;
  /** Delay between each letter (s). */
  stagger?: number;
  /** Duration of each letter animation (s). */
  duration?: number;
  /** Delay before the animation starts (s). */
  delay?: number;
  /** ScrollTrigger start position used when the element is not in view on mount. */
  start?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Splits a headline into letters, masking each line with `overflow: hidden`,
 * and reveals the letters with a cascading rise from below the line mask — the
 * award-level character reveal used on the reference site. Plays in sync with
 * the intro preloader's curtain lift, or when the element first scrolls into
 * view. Re-splits automatically when fonts finish loading or the layout
 * resizes. Skipped for users who prefer reduced motion; text stays
 * server-rendered and visible.
 */
export default function LetterReveal({
  as: Tag = "h1",
  stagger = 0.04,
  duration = 0.85,
  delay = 0.15,
  start = "top 85%",
  className,
  children,
}: LetterRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const el = ref.current;
      if (!el || prefersReducedMotion() || !contextSafe) return;

      let activeTl: gsap.core.Timeline | null = null;
      let trigger: ScrollTrigger | null = null;
      let played = false;

      const build = contextSafe((self: SplitText) => {
        activeTl?.kill();
        activeTl = null;
        trigger?.kill();
        trigger = null;

        self.lines.forEach((line) => {
          (line as HTMLElement).style.overflow = "hidden";
        });

        const tl = gsap.timeline({ paused: true, delay });
        tl.fromTo(
          self.chars,
          { yPercent: 120 },
          { yPercent: 0, stagger, duration, ease: "power4.out" },
        );
        tl.eventCallback("onComplete", () => {
          played = true;
        });

        if (played) {
          tl.progress(1);
          activeTl = tl;
          return;
        }

        const playWhenReady = () => {
          if (!el.isConnected || played) return;
          if (isElementInViewport(el)) {
            tl.play();
          } else {
            trigger = ScrollTrigger.create({
              trigger: el,
              start,
              once: true,
              onEnter: () => tl.play(),
            });
          }
        };
        const safePlay = contextSafe(playWhenReady);
        preloaderRevealed().then(safePlay);

        activeTl = tl;
      });

      SplitText.create(el, {
        type: "lines,chars",
        linesClass: "split-line",
        charsClass: "split-char",
        autoSplit: true,
        onSplit: build,
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

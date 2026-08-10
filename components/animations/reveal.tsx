"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { preloaderRevealed } from "@/lib/animations/preloader";
import { isElementInViewport, prefersReducedMotion } from "@/lib/animations/utils";

interface RevealProps {
  /** Rendered element type. Defaults to a div. */
  as?: React.ElementType;
  /** Vertical offset to travel from (px). */
  y?: number;
  /** Horizontal offset to travel from (px). */
  x?: number;
  /** Animation duration (s). */
  duration?: number;
  /** Delay before the animation starts (s). */
  delay?: number;
  /** Animate only once when first scrolled into view. */
  once?: boolean;
  /** ScrollTrigger start position (e.g. "top 85%"). */
  start?: string;
  /** When the element is in view on load, wait for the intro preloader to reveal. */
  deferToPreloader?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Fades/slides an element in when it scrolls into the viewport. Content is
 * server-rendered visible, so it degrades gracefully without JS, and is
 * skipped entirely for users who prefer reduced motion. Set
 * `deferToPreloader` to hold in-view elements until the intro curtain lifts.
 */
export default function Reveal({
  as: Tag = "div",
  y = 48,
  x = 0,
  duration = 1,
  delay = 0,
  once = true,
  start = "top 85%",
  deferToPreloader = false,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { clearProps: "all" });
        return;
      }

      gsap.set(el, { opacity: 0, x, y });

      const tween = gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        paused: true,
      });

      if (isElementInViewport(el)) {
        if (deferToPreloader) {
          preloaderRevealed().then(() => {
            if (el.isConnected) tween.play();
          });
        } else {
          tween.play();
        }
        return;
      }

      ScrollTrigger.create({
        trigger: el,
        start,
        once,
        onEnter: () => tween.play(),
        onLeaveBack: once ? undefined : () => tween.reverse(),
        onEnterBack: once ? undefined : () => tween.play(),
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

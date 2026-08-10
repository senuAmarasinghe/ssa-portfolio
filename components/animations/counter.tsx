"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { isElementInViewport, prefersReducedMotion } from "@/lib/animations/utils";

interface CounterProps {
  /** Value to count up to. */
  to: number;
  /** Value to count from. */
  from?: number;
  /** Number of decimal places to display. */
  decimals?: number;
  /** Text appended to the number, e.g. "+". */
  suffix?: string;
  /** Text prepended to the number, e.g. "$". */
  prefix?: string;
  /** Duration of the count-up (s). */
  duration?: number;
  /** Delay before counting starts (s). */
  delay?: number;
  /** ScrollTrigger start position. */
  start?: string;
  className?: string;
}

/**
 * Counts up to a value when it scrolls into view. The final value is shown
 * immediately for users who prefer reduced motion.
 */
export default function Counter({
  to,
  from = 0,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 2,
  delay = 0,
  start = "top 90%",
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (value: number) => `${prefix}${value.toFixed(decimals)}${suffix}`;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        el.textContent = format(to);
        return;
      }

      const state = { value: from };
      const tween = gsap.to(state, {
        value: to,
        duration,
        delay,
        ease: "power2.out",
        paused: true,
        onUpdate: () => {
          el.textContent = format(state.value);
        },
      });

      if (isElementInViewport(el)) {
        tween.play();
        return;
      }

      ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => tween.play(),
      });
    },
    { scope: ref, dependencies: [to, from, decimals, suffix, prefix], revertOnUpdate: true },
  );

  return (
    <span ref={ref} className={className}>
      {format(from)}
    </span>
  );
}

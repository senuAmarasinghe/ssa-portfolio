"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { prefersReducedMotion } from "@/lib/animations/utils";
import { lockScroll } from "@/lib/animations/lenis";
import { activatePreloader, signalPreloaderReveal } from "@/lib/animations/preloader";

const WORDMARK = "SENUTHI AMARASINGHE";

/**
 * Full-screen intro overlay shown on first load. A masked wordmark rises in,
 * a thin line draws, then the whole panel slides up to reveal the page while
 * the hero's headline letters begin their own rise underneath. Skipped
 * instantly for users who prefer reduced motion, and hidden via <noscript>
 * when JavaScript is unavailable.
 */
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      activatePreloader();
      lockScroll(true);

      const releaseScroll = () => {
        signalPreloaderReveal();
        lockScroll(false);
        ScrollTrigger.refresh();
      };

      const safety = setTimeout(() => {
        releaseScroll();
        setHidden(true);
      }, 4500);

      if (prefersReducedMotion()) {
        releaseScroll();
        setHidden(true);
        return () => clearTimeout(safety);
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".preloader-letter",
        { yPercent: 110, rotate: 6 },
        { yPercent: 0, rotate: 0, stagger: 0.045, duration: 0.9 },
        0,
      )
        .fromTo(
          ".preloader-meta",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          ".preloader-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: "power2.inOut" },
          "-=0.35",
        )
        .to(
          el,
          {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            onStart: releaseScroll,
          },
          "+=0.3",
        )
        .call(() => setHidden(true));

      return () => clearTimeout(safety);
    },
    { scope: ref },
  );

  if (hidden) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="preloader fixed inset-0 z-9999 flex items-center justify-center bg-charcoal text-offwhite"
    >
      <div className="px-6 text-center">
        <p className="preloader-meta text-[0.65rem] uppercase tracking-[0.4em] text-offwhite/60">
          Portfolio &mdash; 24
        </p>
        <h1 className="mt-4 font-serif text-3xl tracking-wide sm:text-5xl">
          {WORDMARK.split("").map((char, index) => (
            <span key={index} className="inline-block overflow-hidden align-top">
              <span className="preloader-letter inline-block will-change-transform">
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </h1>
        <div className="mx-auto mt-6 h-px w-40 bg-offwhite/25">
          <div className="preloader-line h-full origin-left bg-offwhite" />
        </div>
      </div>
    </div>
  );
}

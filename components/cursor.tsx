"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap";

const DOT_EASING = 0.55;
const RING_EASING = 0.16;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const html = document.documentElement;
    html.classList.add("has-custom-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { x: target.x, y: target.y };
    const ringPos = { x: target.x, y: target.y };
    let visible = false;
    let interactive = false;

    const tick = () => {
      dotPos.x += (target.x - dotPos.x) * DOT_EASING;
      dotPos.y += (target.y - dotPos.y) * DOT_EASING;
      ringPos.x += (target.x - ringPos.x) * RING_EASING;
      ringPos.y += (target.y - ringPos.y) * RING_EASING;

      gsap.set(dot, {
        x: dotPos.x,
        y: dotPos.y,
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set(ring, {
        x: ringPos.x,
        y: ringPos.y,
        xPercent: -50,
        yPercent: -50,
      });
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.4, ease: "power2.out" });
      }

      const isInteractive = !!(e.target as Element | null)?.closest(
        'a, button, [role="switch"], input, textarea, select, label',
      );
      if (isInteractive !== interactive) {
        interactive = isInteractive;
        gsap.to(ring, {
          scale: interactive ? 1.5 : 1,
          backgroundColor: interactive ? "currentColor" : "transparent",
          opacity: interactive ? 0.9 : 1,
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: interactive ? 0.6 : 1,
          duration: 0.35,
          ease: "power2.out",
        });
      }
    };

    gsap.ticker.add(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      html.classList.remove("has-custom-cursor");
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] size-2 rounded-full bg-charcoal opacity-0"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] size-10 rounded-full border border-charcoal/60 opacity-0"
      />
    </>
  );
}
"use client";

import type Lenis from "lenis";

/**
 * Module-level reference to the single Lenis instance created by the
 * <SmoothScrollProvider>. Components can call `scrollTo` from anywhere without
 * prop-drilling.
 */
let lenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenis;
}

export function setLenis(instance: Lenis | null): void {
  lenis = instance;
}

export function destroyLenis(): void {
  lenis?.destroy();
  lenis = null;
}

/**
 * Scrolls to a target through Lenis. Falls back to native scrolling when Lenis
 * is not running (e.g. reduced motion or SSR).
 */
export function scrollTo(
  target: string | number | HTMLElement,
  options: { offset?: number; duration?: number; immediate?: boolean } = {},
): void {
  if (lenis) {
    lenis.scrollTo(target, options);
    return;
  }

  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Locks/unlocks page scrolling while the intro preloader is on screen. Keeps
 * both native scroll and Lenis disabled so content can't move behind the
 * overlay, then restores both when the curtain lifts.
 */
export function lockScroll(locked: boolean): void {
  document.body.style.overflow = locked ? "hidden" : "";
  if (locked) {
    lenis?.stop();
  } else {
    lenis?.start();
  }
}

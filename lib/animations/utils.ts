"use client";

/**
 * Shared helpers for animation code. Kept tiny and dependency-free so they can
 * be used by every animation primitive.
 */

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isElementInViewport(el: HTMLElement, threshold = 0.85): boolean {
  if (typeof window === "undefined") return false;
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * threshold && rect.bottom > 0;
}

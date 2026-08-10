"use client";

/**
 * Module-level gate that synchronizes the intro preloader with the hero's
 * letter/line reveals. Anything that waits on `preloaderRevealed()` starts the
 * moment the preloader's curtain begins lifting, so the choreographed intro
 * stays in sync regardless of hydration order.
 */
let revealed = false;
let active = false;
let revealResolvers: Array<() => void> = [];
let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

/** Mark the preloader as on-screen so Lenis stays stopped until it lifts. */
export function activatePreloader(): void {
  active = true;
}

/** True while the intro overlay is covering the page. */
export function isPreloaderActive(): boolean {
  return active;
}

/**
 * Resolve every pending `preloaderRevealed()` promise. Called by the preloader
 * the moment its curtain starts lifting.
 */
export function signalPreloaderReveal(): void {
  active = false;
  if (revealed) return;
  revealed = true;
  if (fallbackTimer) {
    clearTimeout(fallbackTimer);
    fallbackTimer = null;
  }
  revealResolvers.forEach((resolve) => resolve());
  revealResolvers = [];
}

/**
 * A promise that resolves when the intro curtain starts lifting. Resolves
 * immediately if the preloader already finished, and always resolves after
 * `timeoutMs` as a safety net so content can never stay hidden behind a hung
 * preloader.
 */
export function preloaderRevealed(timeoutMs = 3000): Promise<void> {
  if (revealed) return Promise.resolve();
  return new Promise<void>((resolve) => {
    revealResolvers.push(resolve);
    if (!fallbackTimer) {
      fallbackTimer = setTimeout(signalPreloaderReveal, timeoutMs);
    }
  });
}

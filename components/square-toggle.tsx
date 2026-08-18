"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export default function SquareToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-7 w-14 items-center border border-charcoal bg-lightgray transition-colors duration-300"
    >
      <span
        aria-hidden
        className={cn(
          "size-6 bg-charcoal transition-transform duration-300 ease-out will-change-transform",
          isDark ? "translate-x-8" : "translate-x-0",
        )}
      />
    </button>
  );
}
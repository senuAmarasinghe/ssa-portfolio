"use client";

import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  CalendarDays,
  Code,
  FolderKanban,
  GraduationCap,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";
import { gsap } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "activities", label: "Activities", icon: CalendarDays },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

const HEADER_OFFSET = 100;

export default function SideNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > HEADER_OFFSET);

      const middle = y + window.innerHeight / 2;
      let current = "";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + y;
        if (top <= middle) current = item.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const el = indicatorRef.current;
    if (!el) return;

    const index = navItems.findIndex((item) => item.id === active);
    const item = index !== -1 ? itemRefs.current[index] : null;
    if (!item) {
      gsap.to(el, { opacity: 0, duration: 0.3, ease: "power2.out" });
      return;
    }

    const y = item.offsetTop;
    if (!initializedRef.current) {
      initializedRef.current = true;
      gsap.set(el, { y, opacity: 1 });
    } else {
      gsap.to(el, {
        y,
        opacity: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.45)",
      });
    }
  }, [active]);

  useEffect(() => {
    const onResize = () => {
      const el = indicatorRef.current;
      if (!el) return;
      const index = navItems.findIndex((item) => item.id === active);
      const item = index !== -1 ? itemRefs.current[index] : null;
      if (item) gsap.set(el, { y: item.offsetTop });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        "fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-start gap-2 pl-3 transition-opacity duration-500 md:flex",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-[3px] bg-lightgray"
      />
      <span
        aria-hidden
        ref={indicatorRef}
        className="absolute left-0 top-0 h-11 w-[3px] bg-charcoal opacity-0 will-change-transform"
      />

      {navItems.map(({ id, label, icon: Icon }, index) => (
        <a
          key={id}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          href={`#${id}`}
          aria-label={`Go to ${label}`}
          aria-current={active === id ? "true" : undefined}
          className="group flex items-center"
        >
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center border bg-offwhite/85 shadow-sm backdrop-blur transition-all duration-300 ease-out",
              active === id
                ? "border-charcoal bg-charcoal text-offwhite shadow-lg shadow-charcoal/20"
                : "border-lightgray text-slategray group-hover:border-charcoal/40 group-hover:text-charcoal",
            )}
          >
            <Icon className="size-4" />
          </span>
          <span className="pointer-events-none -ml-px max-w-0 overflow-hidden border border-l-0 border-lightgray bg-offwhite/85 shadow-sm backdrop-blur transition-all duration-300 group-hover:max-w-44 group-hover:opacity-100">
            <span
              className={cn(
                "block whitespace-nowrap px-3 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors duration-300",
                active === id ? "text-charcoal" : "text-slategray",
              )}
            >
              {label}
            </span>
          </span>
        </a>
      ))}
    </nav>
  );
}

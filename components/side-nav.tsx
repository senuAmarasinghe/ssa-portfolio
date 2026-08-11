"use client";

import { useEffect, useState } from "react";
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

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        "fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-start gap-2 transition-opacity duration-300 md:flex",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      {navItems.map(({ id, label, icon: Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`Go to ${label}`}
          aria-current={active === id ? "true" : undefined}
          className="group flex items-center"
        >
          <span
            className={cn(
              "flex size-11 shrink-0 items-center justify-center border bg-white/85 shadow-sm backdrop-blur transition-colors duration-300",
              active === id
                ? "border-charcoal bg-charcoal text-white"
                : "border-lightgray text-slategray group-hover:border-charcoal/40 group-hover:text-charcoal",
            )}
          >
            <Icon className="size-4" />
          </span>
          <span className="pointer-events-none -ml-px max-w-0 overflow-hidden border border-l-0 border-lightgray bg-white/85 shadow-sm backdrop-blur transition-all duration-300 group-hover:max-w-44 group-hover:opacity-100">
            <span
              className={cn(
                "block whitespace-nowrap px-3 py-2.5 text-xs uppercase tracking-[0.15em]",
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

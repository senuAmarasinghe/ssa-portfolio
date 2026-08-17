"use client";

import { useState } from "react";
import Image from "next/image";
import { LetterReveal, Reveal } from "@/components/animations";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Activity {
  src: string;
  title: string;
  tag: string;
}

interface Highlight {
  title: string;
  description: string;
}

const base = "/activities&community/";

const activities: Activity[] = [
  { src: `${base}1752597005733.jpg`, title: "Activity 01", tag: "Community" },
  { src: `${base}1763115738568.jpg`, title: "Activity 02", tag: "Industry Visit" },
  { src: `${base}1764074897063.jpg`, title: "Activity 03", tag: "Leadership" },
  { src: `${base}1764074897473-1.jpg`, title: "Activity 04", tag: "Community" },
  { src: `${base}1772719992899.jpg`, title: "Activity 05", tag: "Leadership" },
  { src: `${base}1772720581189.jpg`, title: "Activity 06", tag: "Industry Visit" },
  { src: `${base}1772720581602.jpg`, title: "Activity 07", tag: "Community" },
  {
    src: `${base}748287235_1414974537343122_3121373201070015373_n.jpg`,
    title: "Activity 08",
    tag: "Community",
  },
  { src: `${base}Screenshot 2026-08-11 235052.png`, title: "Activity 09", tag: "Event" },
  { src: `${base}Screenshot 2026-08-11 235248.png`, title: "Activity 10", tag: "Event" },
  { src: `${base}Screenshot 2026-08-11 235332.png`, title: "Activity 11", tag: "Event" },
  { src: `${base}Screenshot 2026-08-11 235431.png`, title: "Activity 12", tag: "Event" },
  { src: `${base}Screenshot 2026-08-11 235823.png`, title: "Activity 13", tag: "Event" },
  { src: `${base}Screenshot 2026-08-12 000018.png`, title: "Activity 14", tag: "Event" },
];

const highlights: Highlight[] = [
  {
    title: "Community Coordination",
    description:
      "Coordinating events, workshops, and member activities within the student tech community.",
  },
  {
    title: "Industry Visits",
    description:
      "Visiting tech companies to observe real-world engineering practices and workflows.",
  },
  {
    title: "Leadership Programs",
    description:
      "Participating in structured leadership training focused on teamwork and communication.",
  },
  {
    title: "Team Activities",
    description:
      "Contributing to university and community initiatives alongside fellow students.",
  },
];

export default function ActivitiesSection() {
  const [selected, setSelected] = useState<Activity | null>(null);

  return (
    <section id="activities" className="bg-[#f8f8f8]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-24 md:px-12">
        <LetterReveal
          as="h2"
          stagger={0.04}
          duration={0.85}
          delay={0.15}
          className="font-redound text-[clamp(1.75rem,4vw,4rem)] uppercase leading-[0.95] tracking-tight mb-8"
        >
          ACTIVITIES &amp; COMMUNITY
        </LetterReveal>
        <Reveal y={24} delay={0.2}>
          <p className="max-w-2xl text-base leading-relaxed text-slategray">
            Highlights from industry visits, leadership programs, and community
            events — moments that shaped my collaboration, communication, and
            leadership beyond the code.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.title} y={24} delay={index * 0.08}>
              <div className="h-full border border-lightgray bg-white p-6">
                <h3 className="font-serif text-lg leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slategray">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <Reveal key={activity.src} y={24} delay={(index % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setSelected(activity)}
                className="group block w-full text-left"
                aria-label={`Open ${activity.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-lightgray">
                  <Image
                    src={activity.src}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
                </div>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <span className="shrink-0 border border-charcoal/20 px-3 py-1 text-xs uppercase tracking-[0.15em] text-slategray">
                    {activity.tag}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="w-full gap-4 sm:max-w-4xl">
          {selected && (
            <>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-lightgray">
                <Image
                  src={selected.src}
                  alt={selected.title}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>{selected.tag}</DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

import { LetterReveal, Reveal } from "@/components/animations";

interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    role: "Frontend Developer Intern",
    company: "KlexD Pvt Ltd",
    period: "Jan 2026 — Present",
    points: [
      "Developing user interfaces using Next.js, React, and TypeScript",
      "Working with APIs and handling frontend state in real-world applications",
      "Collaborating with team members to implement features and fix issues",
      "Writing clean and maintainable code following project guidelines",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="flex min-h-dvh flex-col bg-white">
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 pb-10 md:px-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:pb-0">
        <div>
          <LetterReveal
            as="h2"
            stagger={0.06}
            duration={0.85}
            delay={0.15}
            className="font-redound text-[clamp(1.75rem,4vw,4rem)] uppercase leading-[0.95] tracking-tight"
          >
            EXPERIENCE
          </LetterReveal>

          <Reveal y={24} delay={0.2}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-slategray">
              A snapshot of my professional experience — building user
              interfaces and shipping real features alongside product and
              engineering teams.
            </p>
          </Reveal>
        </div>

        {experiences.map((item, index) => (
          <Reveal key={item.company} y={24} delay={0.15 + index * 0.1}>
            <article className="border-t border-lightgray pt-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="font-serif text-3xl leading-snug md:text-4xl">
                  {item.role}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-slategray">
                  {item.period}
                </p>
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-slategray">
                {item.company}
              </p>
              <ul className="mt-10 space-y-6">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-5 text-base leading-relaxed text-slategray"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-charcoal/40"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

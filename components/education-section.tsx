import { LetterReveal, Reveal } from "@/components/animations";

interface Education {
  period: string;
  type: string;
  title: string;
  institution: string;
  description: string;
  badges: string[];
}

const education: Education[] = [
  {
    period: "2023 — Present",
    type: "University",
    title: "BSc (Hons) in Information Technology Specializing in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology, Sri Lanka",
    description:
      "Specializing in Software Engineering with focus on full-stack development, database systems, and modern web technologies.",
    badges: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
  },
  {
    period: "2023",
    type: "University",
    title: "Web Development Course",
    institution: "Ape Panthiya Education Foundation",
    description:
      "A focused course covering web development fundamentals, development workflows, and hosting.",
    badges: ["Data Structures", "Software Development", "Web Hosting", "Database Systems"],
  },
  {
    period: "2020 — 2021",
    type: "Advanced Level",
    title: "GCE Advanced Level",
    institution: "Gothami Balika Vidyalaya, Colombo 10",
    description:
      "Technology Stream with a strong foundation in analytical thinking, problem-solving, and logical reasoning.",
    badges: ["Science for Technology", "Bio for Technology", "Information Technology"],
  },
  {
    period: "2019 — 2020",
    type: "University",
    title: "Dip. in Information Technology / Dip. in English",
    institution: "Esoft Metro Campus, Sri Lanka",
    description:
      "Diplomas in Information Technology and English building foundational technical and communication skills.",
    badges: ["IT Basics", "System Engineering", "Database Systems"],
  },
  {
    period: "2018 — 2019",
    type: "Ordinary Level",
    title: "GCE Ordinary Level",
    institution: "Rahula Balika Vidyalaya, Malabe",
    description:
      "Mathematics Stream with a strong foundation in analytical thinking, problem-solving, and logical reasoning.",
    badges: ["Mathematics", "Commerce", "Agriculture"],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
        <LetterReveal
          as="h2"
          stagger={0.04}
          duration={0.85}
          delay={0.15}
          className="font-redound text-[clamp(1.75rem,4vw,4rem)] uppercase leading-[0.95] tracking-tight mb-12"
        >
          EDUCATION
        </LetterReveal>

        <div className="relative max-w-3xl">
          <span
            aria-hidden="true"
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-lightgray"
          />
          <ol className="relative">
            {education.map((item, index) => (
              <Reveal
                key={item.title}
                as="li"
                y={24}
                delay={index * 0.05}
                className="relative pb-16 pl-8 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 size-2 -translate-x-1/2 rounded-full bg-charcoal"
                />
                <p className="text-xs uppercase tracking-[0.2em] text-slategray">
                  {item.period} &middot; {item.type}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-snug md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.15em] text-slategray">
                  {item.institution}
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slategray">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="border border-charcoal/20 px-3 py-1 text-xs uppercase tracking-widest"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

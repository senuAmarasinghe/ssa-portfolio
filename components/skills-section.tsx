import { LetterReveal, Reveal } from "@/components/animations";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Firebase",
  "Vercel",
  "Git",
  "MERN",
  "SpringBoot",
  "SQL",
  "Python",
  "C",
  "C++",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "Kotlin",
  "XML",
  "JWT",
  "RESTful APIs",
];

const tools = [
  "Tomcat Server",
  "JDBC",
  "MVC",
  "JSP",
  "Eclipse",
  "Figma",
  "Android Studio",
  "GitHub",
  "Android SDK",
  "Data Persistence",
  "Maven",
  "Postman",
  "Azure",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="flex min-h-dvh flex-col bg-[#f8f8f8]">
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 pb-10 md:px-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:pb-0">
        <div>
          <LetterReveal
            as="h2"
            stagger={0.04}
            duration={0.85}
            delay={0.15}
            className="font-redound text-[clamp(1.75rem,4vw,4rem)] uppercase leading-[0.95] tracking-tight"
          >
            SKILLS
          </LetterReveal>

          <Reveal y={24} delay={0.2}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-slategray">
              The technologies and tools I reach for to design, build, and ship
              modern web and mobile experiences.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-16">
          <Reveal y={32} delay={0.15}>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-slategray">
                Tech Stack
              </h3>
              <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-3">
                {techStack.map((skill, index) => (
                  <Reveal
                    key={skill}
                    y={24}
                    delay={index * 0.03}
                    className="flex items-baseline text-sm uppercase tracking-[0.15em] text-slategray"
                  >
                    <span>{skill}</span>
                    {index < techStack.length - 1 && (
                      <span aria-hidden="true" className="ml-4">
                        ·
                      </span>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal y={32} delay={0.25}>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-slategray">
                Tools &amp; Platforms
              </h3>
              <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-3">
                {tools.map((tool, index) => (
                  <Reveal
                    key={tool}
                    y={24}
                    delay={index * 0.03}
                    className="flex items-baseline text-sm uppercase tracking-[0.15em] text-slategray"
                  >
                    <span>{tool}</span>
                    {index < tools.length - 1 && (
                      <span aria-hidden="true" className="ml-4">
                        ·
                      </span>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

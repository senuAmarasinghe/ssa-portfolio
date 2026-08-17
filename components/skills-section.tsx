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
    <section id="skills" className="min-h-screen bg-[#f8f8f8]">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
        <LetterReveal
          as="h2"
          stagger={0.04}
          duration={0.85}
          delay={0.15}
          className="font-redound text-[clamp(1.75rem,4vw,4rem)] uppercase leading-[0.95] tracking-tight mb-8"
        >
          SKILLS
        </LetterReveal>
        <h3 className="text-xs uppercase tracking-[0.2em] text-slategray">Tech Stack</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {techStack.map((skill, index) => (
            <Reveal
              key={skill}
              y={24}
              delay={index * 0.03}
              className="border border-charcoal/20 bg-white px-5 py-3 text-sm uppercase tracking-[0.15em]"
            >
              {skill}
            </Reveal>
          ))}
        </div>
        <h3 className="mt-14 text-xs uppercase tracking-[0.2em] text-slategray">
          Tools &amp; Platforms
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {tools.map((tool, index) => (
            <Reveal
              key={tool}
              y={24}
              delay={index * 0.03}
              className="border border-charcoal/20 bg-white px-5 py-3 text-sm uppercase tracking-[0.15em]"
            >
              {tool}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

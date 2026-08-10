import Image from "next/image";
import HeroSection from "@/components/hero-section";
import {
  Counter,
  HorizontalScroll,
  Parallax,
  PinnedSection,
  Reveal,
  TextReveal,
} from "@/components/animations";

const skills = ["TypeScript", "React", "Next.js", "Tailwind CSS", "GSAP", "Node.js"];

const projects = [
  { title: "Project One", meta: "Web Experience" },
  { title: "Project Two", meta: "Product Design" },
  { title: "Project Three", meta: "Mobile App" },
  { title: "Project Four", meta: "Design System" },
];

interface Stat {
  to: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const stats: Stat[] = [
  { to: 6, suffix: "+", label: "Years of experience" },
  { to: 20, suffix: "+", label: "Projects shipped" },
  { to: 15, suffix: "+", label: "Happy clients" },
  { to: 4.9, decimals: 1, label: "Average rating" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* ABOUT */}
      <section id="about" className="bg-white p-8">
        <div className="container mx-auto py-12">
          <TextReveal as="h2" type="chars" stagger={0.04} className="font-anton text-6xl mb-8">
            ABOUT
          </TextReveal>
          <Reveal y={32} delay={0.15}>
            <p className="max-w-2xl text-lg">
              A frontend engineer focused on clean, responsive, and accessible
              digital products — turning thoughtful designs into fast, scalable
              web experiences.
            </p>
          </Reveal>
        </div>

        <Reveal y={48}>
          <div className="relative h-[70vh] w-full overflow-hidden bg-charcoal">
            <Parallax speed={0.2} className="absolute -top-[40%] left-0 h-[180%] w-full">
              <Image
                src="/background_portfolio.jpeg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </Parallax>
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="min-h-screen bg-[#f8f8f8] p-8">
        <div className="container mx-auto py-24">
          <TextReveal as="h2" type="chars" stagger={0.04} className="font-anton text-6xl mb-8">
            SKILLS
          </TextReveal>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <Reveal
                key={skill}
                y={24}
                delay={index * 0.08}
                className="border border-charcoal/20 bg-white px-5 py-3 text-sm uppercase tracking-[0.15em]"
              >
                {skill}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-white">
        <PinnedSection end="+=60%" className="flex h-dvh items-center justify-center px-8">
          <div className="max-w-3xl text-center">
            <TextReveal as="h2" type="chars" stagger={0.06} className="font-anton text-6xl mb-6">
              EXPERIENCE
            </TextReveal>
            <Reveal y={24} delay={0.3}>
              <p className="text-lg leading-relaxed text-slategray">
                This section stays pinned while the page scrolls past — a
                storytelling pattern borrowed from the Kononenko Architectural
                Bureau.
              </p>
            </Reveal>
          </div>
        </PinnedSection>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#f8f8f8]">
        <HorizontalScroll>
          {projects.map((project, index) => (
            <Reveal key={project.title} y={40} delay={index * 0.05} className="h-[70vh]">
              <article className="flex h-full w-[85vw] shrink-0 flex-col justify-between border border-lightgray bg-white p-10 md:w-[60vw]">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slategray">
                    {String(index + 1).padStart(2, "0")} / {project.meta}
                  </p>
                  <h3 className="mt-6 font-anton text-4xl md:text-6xl">{project.title}</h3>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-slategray">
                  Placeholder card for the horizontal scroll demo. Each card
                  slides across while the section is pinned.
                </p>
              </article>
            </Reveal>
          ))}
        </HorizontalScroll>
      </section>

      {/* EDUCATION */}
      <section id="education" className="min-h-screen bg-white p-8">
        <div className="container mx-auto py-24">
          <TextReveal as="h2" type="chars" stagger={0.04} className="font-anton text-6xl mb-8">
            EDUCATION
          </TextReveal>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <Counter
                  to={stat.to}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  className="font-anton text-5xl md:text-6xl"
                />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slategray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

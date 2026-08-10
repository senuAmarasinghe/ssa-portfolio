import HeroSection from "@/components/hero-section";
import AboutSection, { type Stat } from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import { Counter, TextReveal } from "@/components/animations";

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

      <AboutSection stats={stats} />

      <SkillsSection />

      <ExperienceSection />

      <ProjectsSection />

      {/* EDUCATION */}
      <section id="education" className="min-h-screen bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
          <TextReveal
            as="h2"
            type="chars"
            stagger={0.04}
            className="font-anton text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-8"
          >
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

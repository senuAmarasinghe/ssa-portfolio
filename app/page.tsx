import HeroSection from "@/components/hero-section";
import AboutSection, { type Stat } from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ActivitiesSection from "@/components/activities-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

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

      <ActivitiesSection />

      <EducationSection />

      <ContactSection />
    </div>
  );
}

import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ActivitiesSection from "@/components/activities-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ExperienceSection />

      <ProjectsSection />

      <ActivitiesSection />

      <EducationSection />

      <ContactSection />
    </div>
  );
}

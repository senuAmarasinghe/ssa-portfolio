import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      {/* Placeholder sections for navigation targets */}
      <section id="about" className="min-h-screen bg-white p-8">
        <div className="container mx-auto">
          <h2 className="font-anton text-6xl mb-8">ABOUT</h2>
          <p className="text-lg">About section content goes here...</p>
        </div>
      </section>

      <section id="skills" className="min-h-screen bg-[#f8f8f8] p-8">
        <div className="container mx-auto">
          <h2 className="font-anton text-6xl mb-8">SKILLS</h2>
          <p className="text-lg">Skills section content goes here...</p>
        </div>
      </section>

      <section id="experience" className="min-h-screen bg-white p-8">
        <div className="container mx-auto">
          <h2 className="font-anton text-6xl mb-8">EXPERIENCE</h2>
          <p className="text-lg">Experience section content goes here...</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen bg-[#f8f8f8] p-8">
        <div className="container mx-auto">
          <h2 className="font-anton text-6xl mb-8">PROJECTS</h2>
          <p className="text-lg">Projects section content goes here...</p>
        </div>
      </section>

      <section id="education" className="min-h-screen bg-white p-8">
        <div className="container mx-auto">
          <h2 className="font-anton text-6xl mb-8">EDUCATION</h2>
          <p className="text-lg">Education section content goes here...</p>
        </div>
      </section>
    </div>
  );
}

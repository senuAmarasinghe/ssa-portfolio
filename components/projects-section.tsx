import { HorizontalScroll, Reveal, TextReveal } from "@/components/animations";

interface Project {
  title: string;
  role: string;
  period: string;
  status: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Prabhath Motors",
    role: "Vehicle Service + Stock Management System",
    period: "Jun 2024 — Dec 2024",
    status: "Production",
    description:
      "Transformed manual operations into an automated digital platform serving 25+ employees across workshop, paint shop, tire shop, and service station operations.",
    tech: ["React", "TypeScript", "SpringBoot", "Java", "MySQL", "JWT", "RESTful APIs", "Azure"],
  },
  {
    title: "Personal Finance Tracker",
    role: "Android Application",
    period: "Mar 2024 — May 2024",
    status: "Completed",
    description:
      "A native Android application for managing personal finances with intuitive expense tracking, budget planning, and financial goal setting.",
    tech: ["Kotlin", "Android SDK", "Data Persistence", "UI/UX Design", "Data Visualization"],
  },
  {
    title: "Mobile Pottery Studio",
    role: "UI/UX Design and Development",
    period: "Jan 2024 — Feb 2024",
    status: "Design Phase",
    description:
      "A mobile application for pottery enthusiasts featuring class booking, instructor profiles, gallery showcase, and progress tracking.",
    tech: ["Figma", "Kotlin", "Android Studio", "XML", "UI/UX Principles"],
  },
  {
    title: "Online Banking System",
    role: "Secure Web Banking Platform",
    period: "Sep 2023 — Dec 2023",
    status: "Academic Project",
    description:
      "A full-featured online banking system with account management, transaction processing, loan applications, and administrative dashboards.",
    tech: ["Java", "MySQL", "Tomcat Server", "JDBC", "MVC", "JSP"],
  },
  {
    title: "Portfolio Website",
    role: "Personal Portfolio",
    period: "Dec 2024 — Jan 2025",
    status: "Live",
    description:
      "A responsive personal portfolio showcasing projects, skills, and professional experience with smooth animations and optimized performance.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
  },
  {
    title: "Siyane Group (pvt) ltd",
    role: "Business Profile Website",
    period: "Feb 2023 — Mar 2023",
    status: "Live",
    description:
      "A responsive business profile showcasing products and enhancing customer engagement, with smooth animations and a contact form.",
    tech: ["HTML", "CSS", "PHP", "JavaScript"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#f8f8f8]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-24 md:px-12">
        <TextReveal
          as="h2"
          type="chars"
          stagger={0.04}
          className="font-anton text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-8"
        >
          PROJECTS
        </TextReveal>
        <Reveal y={24} delay={0.2}>
          <p className="max-w-2xl text-base leading-relaxed text-slategray">
            Selected projects built across web, mobile, and design — from
            enterprise platforms to polished user experiences.
          </p>
        </Reveal>
      </div>

      <HorizontalScroll>
        {projects.map((project, index) => (
          <Reveal key={project.title} y={40} delay={index * 0.05} className="h-[70vh]">
            <article className="flex h-full w-[85vw] shrink-0 flex-col justify-between border border-lightgray bg-white p-10 md:w-[60vw] lg:w-[50vw]">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slategray">
                    {project.period}
                  </p>
                  <span className="shrink-0 border border-charcoal/20 px-3 py-1 text-xs uppercase tracking-[0.15em]">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-6 font-anton text-3xl sm:text-4xl lg:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-slategray">
                  {project.role}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-slategray">
                  {project.description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-charcoal/20 px-3 py-1.5 text-xs uppercase tracking-[0.1em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </HorizontalScroll>
    </section>
  );
}

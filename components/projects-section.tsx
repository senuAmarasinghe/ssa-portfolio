import { HorizontalScroll, LetterReveal, Reveal } from "@/components/animations";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  role: string;
  period: string;
  status: string;
  description: string;
  tech: string[];
  image?: string;
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
    image: "/project1.jpg",
  },
  {
    title: "Personal Finance Tracker",
    role: "Android Application",
    period: "Mar 2024 — May 2024",
    status: "Completed",
    description:
      "A native Android application for managing personal finances with intuitive expense tracking, budget planning, and financial goal setting.",
    tech: ["Kotlin", "Android SDK", "Data Persistence", "UI/UX Design", "Data Visualization"],
    image: "/project2.png",
  },
  {
    title: "Mobile Pottery Studio",
    role: "UI/UX Design and Development",
    period: "Jan 2024 — Feb 2024",
    status: "Design Phase",
    description:
      "A mobile application for pottery enthusiasts featuring class booking, instructor profiles, gallery showcase, and progress tracking.",
    tech: ["Figma", "Kotlin", "Android Studio", "XML", "UI/UX Principles"],
    image: "/project3.png",
  },
  {
    title: "Online Banking System",
    role: "Secure Web Banking Platform",
    period: "Sep 2023 — Dec 2023",
    status: "Academic Project",
    description:
      "A full-featured online banking system with account management, transaction processing, loan applications, and administrative dashboards.",
    tech: ["Java", "MySQL", "Tomcat Server", "JDBC", "MVC", "JSP"],
    image: "/project4.png",
  },
  {
    title: "Portfolio Website",
    role: "Personal Portfolio",
    period: "Dec 2024 — Jan 2025",
    status: "Live",
    description:
      "A responsive personal portfolio showcasing projects, skills, and professional experience with smooth animations and optimized performance.",
    tech: ["Next.js", "Tailwind", "Lenis", "GSAP", "Vercel"],
    image: "/project5.png",
  },
  {
    title: "Siyane Group (pvt) ltd",
    role: "Business Profile Website",
    period: "Feb 2023 — Mar 2023",
    status: "Live",
    description:
      "A responsive business profile showcasing products and enhancing customer engagement, with smooth animations and a contact form.",
    tech: ["HTML", "CSS", "PHP", "JavaScript"],
    image: "/project6.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#f8f8f8]">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 md:px-12 md:pt-24">
        <LetterReveal
          as="h2"
          stagger={0.04}
          duration={0.85}
          delay={0.15}
          className="font-redound text-[clamp(1.75rem,4vw,4rem)] uppercase leading-[0.95] tracking-tight"
        >
          PROJECTS
        </LetterReveal>
        <Reveal y={24} delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slategray">
            Selected projects built across web, mobile, and design — from
            enterprise platforms to polished user experiences.
          </p>
        </Reveal>
        <Reveal y={24} delay={0.3}>
          <p className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slategray">
            <span aria-hidden="true" className="h-px w-10 bg-charcoal" />
            Scroll <span aria-hidden="true">&rarr;</span>
          </p>
        </Reveal>
      </div>

      <HorizontalScroll>
        {projects.map((project, index) => {
          const dark = Boolean(project.image);
          return (
            <Reveal key={project.title} y={40} delay={index * 0.05} className="h-[70vh]">
              <article
                className={cn(
                  "relative flex h-full w-[85vw] shrink-0 flex-col justify-between overflow-hidden border border-lightgray p-12 md:w-[60vw] md:p-14 lg:w-[50vw]",
                  dark ? "text-white" : "bg-white",
                )}
                style={
                  project.image
                    ? {
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              >
                {project.image && (
                  <div
                    className="absolute inset-0 bg-linear-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90"
                    aria-hidden
                  />
                )}
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <p
                      className={cn(
                        "text-xs uppercase tracking-[0.2em]",
                      dark ? "text-white/90" : "text-slategray",
                    )}
                  >
                    {project.period}
                    </p>
                    <span
                      className={cn(
                        "shrink-0 border px-3 py-1 text-xs uppercase tracking-[0.15em]",
                        dark ? "border-white/30" : "border-charcoal/20",
                      )}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-6 font-redound text-3xl uppercase leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-sm uppercase tracking-[0.15em]",
                      dark ? "text-white/90" : "text-slategray",
                    )}
                  >
                    {project.role}
                  </p>
                  <p
                    className={cn(
                      "mt-6 text-sm leading-relaxed",
                      dark ? "text-white/90" : "text-slategray",
                    )}
                  >
                    {project.description}
                  </p>
                </div>
                <div className="relative mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={tech}
                      className={cn(
                        "flex items-baseline text-xs uppercase tracking-widest",
                        dark ? "text-white/90" : "text-slategray",
                      )}
                    >
                      {tech}
                      {index < project.tech.length - 1 && (
                        <span aria-hidden="true" className="ml-4">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </HorizontalScroll>
    </section>
  );
}

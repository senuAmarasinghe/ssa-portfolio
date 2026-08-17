import { LetterReveal, Reveal } from "@/components/animations";

interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

const contactLinks: ContactLink[] = [
  { label: "asenuthisahansa@gmail.com", href: "mailto:asenuthisahansa@gmail.com" },
  { label: "GitHub", href: "https://github.com/senuAmarasinghe", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/senuthi-amarasinghe-4440a4267",
    external: true,
  },
  { label: "Instagram", href: "https://instagram.com/yourusername", external: true },
  { label: "Facebook", href: "https://facebook.com/yourusername", external: true },
  { label: "Threads", href: "https://www.threads.net/@yourusername", external: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="flex min-h-dvh flex-col bg-charcoal text-offwhite">
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 pb-10 md:px-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:pb-0">
        <div>
          <LetterReveal
            as="h2"
            stagger={0.04}
            duration={0.85}
            delay={0.15}
            className="font-redound text-[clamp(1.75rem,4vw,4rem)] uppercase leading-[0.95] tracking-tight"
          >
            CONTACT
          </LetterReveal>
        </div>

        <div className="flex flex-col">
          <Reveal y={24} delay={0.15}>
            <h3 className="max-w-2xl font-serif text-2xl leading-snug md:text-3xl lg:text-4xl">
              Let&apos;s work together on your next project.
            </h3>
          </Reveal>

          <Reveal y={24} delay={0.25}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-offwhite/70">
              I&apos;m currently available for freelance work, internships, and
              collaborations. Whether you have a project in mind or just want to
              say hello, feel free to reach out.
            </p>
          </Reveal>

          <Reveal y={24} delay={0.35}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="inline-flex items-center gap-2 border-b border-offwhite/40 pb-1 text-sm uppercase tracking-[0.15em] transition-colors hover:border-offwhite hover:text-offwhite"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-offwhite/15">
        <div className="mx-auto w-full max-w-7xl px-6 py-6 md:px-12">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-offwhite/60">
            &copy; 2026 Senuthi Amarasinghe. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

import { Reveal, TextReveal } from "@/components/animations";

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
    <section id="contact" className="bg-charcoal text-offwhite">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
        <TextReveal
          as="h2"
          type="chars"
          stagger={0.04}
          className="font-anton text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-8"
        >
          CONTACT
        </TextReveal>

        <Reveal y={24} delay={0.15}>
          <h3 className="max-w-2xl font-serif text-2xl leading-snug md:text-3xl lg:text-4xl">
            Let&apos;s work together on your next project.
          </h3>
        </Reveal>

        <Reveal y={24} delay={0.25}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-offwhite/70">
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

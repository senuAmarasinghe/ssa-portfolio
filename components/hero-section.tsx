import Image from "next/image";
import { LetterReveal, Reveal } from "@/components/animations";

const navItems = ["ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "EDUCATION"];

export default function HeroSection() {
  return (
    <section className="flex min-h-dvh flex-col bg-offwhite font-sans text-charcoal lg:h-dvh lg:overflow-hidden">
      <header className="shrink-0 px-6 py-5 md:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#"
            className="font-serif text-lg font-bold tracking-wide md:text-xl"
          >
            SENUTHI AMARASINGHE
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-slategray"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#about"
            aria-label="Profile"
            className="block size-10 overflow-hidden rounded-full bg-lightgray"
          >
            <Image
              src="/background_portfolio.jpeg"
              alt=""
              width={40}
              height={40}
              className="size-full object-cover grayscale"
            />
          </a>
        </nav>
      </header>

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-6 pb-10 md:px-12 lg:grid-cols-2 lg:gap-16 lg:pb-0">
        <div className="flex flex-col lg:h-full">
          <div className="flex flex-col lg:flex-1 lg:justify-center">
            <Reveal y={24} duration={0.8} deferToPreloader>
              <div className="flex items-center gap-3 pt-0">
                <span aria-hidden="true" className="h-px w-10 bg-charcoal" />
                <p className="text-xs uppercase tracking-[0.25em] text-slategray">
                  Portfolio 24
                </p>
              </div>
            </Reveal>

            <LetterReveal
              as="h1"
              stagger={0.04}
              duration={0.85}
              delay={0.15}
              className="mt-6 font-serif text-3xl leading-[1.05] sm:text-4xl lg:text-5xl xl:text-[4rem]"
            >
              Crafting <br />
              <em className="italic">Digital</em> Experiences
            </LetterReveal>

            <Reveal y={32} delay={0.35} duration={0.9} deferToPreloader>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slategray">
                I&apos;m a Frontend Engineer crafting clean, responsive, and
                accessible digital products — turning thoughtful designs into
                fast, scalable web experiences.
              </p>
            </Reveal>

            <Reveal y={24} delay={0.5} duration={0.9} deferToPreloader>
              <a
                href="#projects"
                className="mt-6 inline-flex w-fit items-center gap-2 border-b border-charcoal pb-1 text-sm uppercase tracking-[0.15em] transition-colors hover:border-slategray hover:text-slategray"
              >
                View Selected Work <span aria-hidden="true">&rarr;</span>
              </a>
            </Reveal>
          </div>

          <Reveal y={20} delay={0.65} duration={0.9} deferToPreloader className="lg:mt-auto">
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-lightgray pt-5 lg:mt-0 lg:pb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slategray">
                  Location
                </p>
                <p className="mt-1 text-sm">New York, NY</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slategray">
                  Status
                </p>
                <p className="mt-1 text-sm">Available for Freelance</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          as="div"
          x={48}
          duration={1}
          delay={0.3}
          deferToPreloader
          className="relative lg:flex lg:h-full lg:items-center lg:justify-self-end"
        >
          <div className="relative aspect-3/4 w-full max-w-md bg-lightgray p-5 md:p-7 lg:h-[calc(100dvh-12rem)] lg:w-auto lg:max-w-none">
            <Image
              src="/Adobe Express - file.png"
              alt="Portrait of Senuthi Amarasinghe"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale"
              priority
            />
          </div>

          <div className="absolute -bottom-5 left-6 flex size-16 items-center justify-center bg-white shadow-sm">
            <span className="font-serif text-2xl" aria-hidden="true">
              *
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

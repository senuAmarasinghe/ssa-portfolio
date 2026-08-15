import Image from "next/image";
import { LetterReveal, Reveal } from "@/components/animations";

export default function HeroSection() {
  return (
    <section className="flex min-h-dvh flex-col bg-offwhite font-sans text-charcoal lg:h-dvh lg:overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 pb-10 md:px-12 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:pb-0">
        <div className="flex flex-col lg:h-full">
          <div className="flex flex-col lg:flex-1 lg:justify-center">
            <Reveal y={24} duration={0.8} deferToPreloader>
              <div className="flex items-center gap-3 pt-0">
                <span aria-hidden="true" className="h-px w-10 bg-charcoal" />
                <p className="text-xs uppercase tracking-[0.25em] text-slategray">
                  Portfolio 26
                </p>
              </div>
            </Reveal>

            <LetterReveal
              as="h1"
              stagger={0.04}
              duration={0.85}
              delay={0.15}
              className="mt-6 font-redound text-[clamp(2.25rem,5.5vw,5.5rem)] uppercase leading-[0.95] tracking-tight"
            >
              Senuthi <br />
              Amarasinghe
            </LetterReveal>

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-slategray">
              Software Engineering Undergraduate &amp; Full Stack Developer
            </p>

            <Reveal y={32} delay={0.35} duration={0.9} deferToPreloader>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slategray">
                I&apos;m a passionate developer crafting robust, scalable
                digital products — turning thoughtful designs into fast,
                beautiful web experiences.
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
            <div className="mt-12 grid max-w-md grid-cols-2 gap-6 border-t border-lightgray pt-5 lg:mt-0 lg:pb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slategray">
                  Location
                </p>
                <p className="mt-1 text-sm">Colombo, Sri Lanka</p>
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
          <div className="group relative w-full overflow-hidden bg-none"> {/*bg-lightgray*/}
            <Image
              src="/sketchBgremoved3.png"
              alt="Sketch portrait of Senuthi Amarasinghe"
              width={947}
              height={1064}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
          </div>

          <div className="absolute -bottom-5 left-6 flex size-16 items-center justify-center bg-white shadow-sm">
            <span className="font-redound text-2xl" aria-hidden="true">
              *
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
import Image from "next/image";
import { LetterReveal, Parallax, Reveal } from "@/components/animations";

interface FocusArea {
  title: string;
  stack: string;
}

const focusAreas: FocusArea[] = [
  { title: "Frontend", stack: "React · Next.js · TypeScript" },
  { title: "Backend", stack: "Node.js · SpringBoot · REST APIs" },
  { title: "UI/UX", stack: "Figma · Design Systems · Prototyping" },
  { title: "Mobile", stack: "Kotlin · Android SDK" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-offwhite">
      <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-6 pb-10 md:px-12 lg:pb-0">
        <div className="grid flex-1 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={32} delay={0.15}>
            <div className="space-y-8">
              <LetterReveal
                as="h2"
                stagger={0.04}
                duration={0.85}
                delay={0.15}
                className="font-redound text-[clamp(1.75rem,4vw,4rem)] uppercase leading-[0.95] tracking-tight"
              >
                ABOUT
              </LetterReveal>
              <p className="text-base leading-relaxed text-slategray">
                I&apos;m a passionate{" "}
                <strong className="font-medium text-charcoal">
                  Software Engineering undergraduate
                </strong>{" "}
                at{" "}
                <strong className="font-medium text-charcoal">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </strong>
                , driven by an insatiable curiosity for technology and
                innovation.
              </p>
              <p className="text-base leading-relaxed text-slategray">
                My journey in the tech world revolves around crafting robust,
                scalable solutions using the{" "}
                <strong className="font-medium text-charcoal">MERN stack</strong>,{" "}
                <strong className="font-medium text-charcoal">SpringBoot</strong> and modern
                technologies like{" "}
                <strong className="font-medium text-charcoal">Next.js</strong> and{" "}
                <strong className="font-medium text-charcoal">TypeScript</strong>. I believe in
                writing clean, maintainable code that not only works but tells a story.
              </p>
              <p className="text-base leading-relaxed text-slategray">
                Currently diving deep into{" "}
                <strong className="font-medium text-charcoal">full-stack development</strong>,{" "}
                <strong className="font-medium text-charcoal">cloud technologies</strong>, and{" "}
                <strong className="font-medium text-charcoal">system design patterns</strong>.
                I&apos;m always excited to take on new challenges and transform complex problems
                into elegant solutions.
              </p>
            </div>
          </Reveal>

          <Reveal y={32} delay={0.25}>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-slategray">
                Core Focus
              </h4>
              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-lightgray pt-6">
                {focusAreas.map((area) => (
                  <div key={area.title}>
                    <h5 className="font-serif text-xl leading-snug md:text-2xl">
                      {area.title}
                    </h5>
                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-slategray">
                      {area.stack}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal y={48}>
        <div className="relative h-[70vh] w-full overflow-hidden bg-charcoal">
          <Parallax speed={0.2} className="absolute top-[-40%] left-0 h-[180%] w-full">
            <Image
              src="/background_portfolio2.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div aria-hidden className="absolute inset-0 bg-charcoal/60" />
        </div>
      </Reveal>
    </section>
  );
}

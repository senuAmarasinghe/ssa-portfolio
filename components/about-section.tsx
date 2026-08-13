import Image from "next/image";
import { Counter, Parallax, Reveal, TextReveal } from "@/components/animations";

export interface Stat {
  to: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

interface AboutSectionProps {
  stats: Stat[];
}

const learning = ["System Design", "AWS Cloud", "Microservices", "DevOps"];

export default function AboutSection({ stats }: AboutSectionProps) {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12">
        <TextReveal
          as="h2"
          type="chars"
          stagger={0.04}
          className="font-anton text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-8"
        >
          ABOUT
        </TextReveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal y={32} delay={0.15}>
            <div className="space-y-6">
              <h3 className="font-serif text-2xl leading-snug md:text-3xl">
                Software Engineering Undergraduate &amp; Full Stack Developer
              </h3>
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

          <div className="flex flex-col gap-12">
            <Reveal y={32} delay={0.25}>
              <div className="grid grid-cols-2 gap-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <Counter
                      to={stat.to}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.decimals}
                      className="font-anton text-5xl md:text-6xl"
                    />
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slategray">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal y={32} delay={0.35}>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-slategray">
                  Currently Learning
                </h4>
                <div className="mt-4 flex flex-wrap gap-3">
                  {learning.map((item) => (
                    <span
                      key={item}
                      className="border border-charcoal/20 bg-white px-5 py-3 text-sm uppercase tracking-[0.15em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
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
        </div>
      </Reveal>
    </section>
  );
}

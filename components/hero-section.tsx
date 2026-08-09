import Image from "next/image";

const navItems = ["ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "EDUCATION"];

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-offwhite text-charcoal font-sans flex flex-col">
      <header className="px-6 md:px-12 py-6">
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
              src="/Adobe Express - file.png"
              alt=""
              width={40}
              height={40}
              className="size-full object-cover grayscale"
            />
          </a>
        </nav>
      </header>

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-16 px-6 pb-16 md:px-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <div className="border-t-2 border-charcoal pt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-slategray">
              Portfolio 24
            </p>
          </div>

          <h1 className="mt-8 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Crafting <em className="italic">Digital</em> Experiences
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-slategray">
            I&apos;m a Frontend Engineer crafting clean, responsive, and
            accessible digital products — turning thoughtful designs into fast,
            scalable web experiences.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-flex w-fit items-center gap-2 border-b border-charcoal pb-1 text-sm uppercase tracking-[0.15em] transition-colors hover:border-slategray hover:text-slategray"
          >
            View Selected Work <span aria-hidden="true">&rarr;</span>
          </a>

          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-lightgray pt-6">
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
        </div>

        <div className="relative lg:justify-self-end">
          <div className="bg-lightgray p-6 md:p-8">
            <Image
              src="/Adobe Express - file.png"
              alt="Portrait of Senutthi Amarasinghe"
              width={720}
              height={960}
              className="h-auto w-full max-w-md object-cover grayscale"
              priority
            />
          </div>

          <div className="absolute -bottom-5 left-6 flex size-16 items-center justify-center bg-white shadow-sm">
            <span className="font-serif text-2xl" aria-hidden="true">
              *
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

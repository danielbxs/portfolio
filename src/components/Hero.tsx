import { FileText, Mail } from "lucide-react";
import { socials } from "../data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex items-center justify-center max-w-6xl gap-12 px-5 pb-24 pt-20  lg:px-8 lg:pb-32 lg:pt-28"
    >
      <div className="order-2 lg:order-1">
        <h1 className="mt-6 max-w-3xl text-balance text-5xl font-bold tracking-[-0.06em] sm:text-7xl">
          Hi, I'm Daniel Silva. I try to break software early,{" "}
          <span className="text-primary">so it stays running later.</span>
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
          I&apos;m a QA Engineer focused on building reliable software through manual
          testing, API testing, and automation. ISTQB CTFL certified. Background in
          front-end development and software localization.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            className="button-quiet"
            href={socials.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            className="button-quiet"
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            className="button-quiet"
            href={socials.resume}
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={16} />
            Resume
          </a>

          <a className="button-secondary" href="#contact">
            <Mail />
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

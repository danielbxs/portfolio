import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const move = (direction: number) => setIndex((index + direction + projects.length) % projects.length);

  return (
    <section id="projects" className="border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title mt-4">Hands-on experience</h2>
          </div>
          <div className="flex gap-2">
            <button className="carousel-button" onClick={() => move(-1)} aria-label="Previous project" title="Previous">
              <ArrowLeft size={18} />
            </button>
            <button className="carousel-button" onClick={() => move(1)} aria-label="Next project" title="Next">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <img src={project.image} alt={project.description} className="max-w-xl rounded-md border-2 border-border " />

          <article aria-live="polite">
            <h3 className="mt-4 text-3xl font-bold tracking-tight">{project.title}</h3>
            <p className="mt-5 text-base leading-7 text-muted-foreground">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span className="skill-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent"
            >
              View repository <ArrowUpRight size={16} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience, INITIAL_VISIBLE_ENTRIES } from "../data/portfolio";
import { JobEntry } from "./ui/JobEntry";

export function Experience() {
  const [showAll, setShowAll] = useState(false);
  const experienceListId = useId();
  const hasMore = experience.length > INITIAL_VISIBLE_ENTRIES;
  const visibleExperience = showAll
    ? experience
    : experience.slice(0, INITIAL_VISIBLE_ENTRIES);

  return (
    <section id="experience" className="border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title mt-4">Turning quality into confidence</h2>
        </div>

        <div id={experienceListId} className="relative mt-12 space-y-5">
          {visibleExperience.map((job) => (
            <JobEntry key={`${job.company}-${job.role}-${job.startDate}`} {...job} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="button-secondary cursor-pointer"
              aria-expanded={showAll}
              aria-controls={experienceListId}
              onClick={() => setShowAll((current) => !current)}
            >
              {showAll
                ? "Show less"
                : `See more (${experience.length - INITIAL_VISIBLE_ENTRIES})`}
              <ChevronDown
                size={17}
                aria-hidden="true"
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

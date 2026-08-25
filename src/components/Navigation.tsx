import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { sectionLinks, socials, iconLabels } from "../data/portfolio";
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-primary bg-background/95 backdrop-blur-xl" aria-label="Primary navigation">
      <div className="mx-auto flex max-w-6xl items-center px-5 py-4 lg:px-8">
        <button
          className="rounded-md p-2 text-muted-foreground hover:bg-card hover:text-foreground md:hidden"
          aria-label={open ? "Close Menu" : "Open Menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-4 border-b border-border bg-background px-5 py-5 md:static md:flex md:w-full md:flex-row md:items-center md:justify-between md:border-0 md:bg-transparent md:p-0`}
        >
          <div className="flex items-center gap-6">
            {sectionLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition hover:text-primary focus-visible:text-primary"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-1">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              title={iconLabels.github}
              aria-label={iconLabels.github}
            >
              <FaGithub />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              title={iconLabels.linkedin}
              aria-label={iconLabels.linkedin}
            >
              <FaLinkedin />
            </a>

            <a href={socials.resume} className="icon-link" aria-label={iconLabels.resume} title={iconLabels.resume}>
              <FileText size={17} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

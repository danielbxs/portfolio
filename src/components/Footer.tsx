import { ArrowUp } from "lucide-react";
import { sectionLinks } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 lg:px-8">
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
          {sectionLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary">
              {item}
            </a>
          ))}
        </nav>
        <div>
          <p className="text-sm text-muted-foreground">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="underline hover:text-primary">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="underline hover:text-primary">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy;{new Date().getFullYear()} Daniel Silva. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 hover:text-primary">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

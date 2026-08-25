import { certifications, skillGroups } from "../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className=" border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28 ">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 className="section-title mt-4">What I work with</h2>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div key={title} className="bg-background/90 p-7">
              <Icon className="text-primary" size={22} />
              <h3 className="mt-7 font-semibold">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <p className="eyebrow">Certifications</p>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {certifications.map(({ name, issuer, date, icon: Icon }) => (
              <article key={name} className="cert-card">
                <Icon className="text-primary" size={22} />
                <div>
                  <h3 className="font-semibold">{name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {issuer} · {date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export type JobEntryProps = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: readonly string[];
};

export function JobEntry({
  company,
  role,
  startDate,
  endDate,
  responsibilities,
}: JobEntryProps) {
  return (
    <article className="relative rounded-xl border border-border bg-background/70 p-6 sm:p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold leading-snug sm:text-xl">
            {role} <span className="text-primary">@</span>{" "}
            <span className="">{company}</span>
          </h3>
        </div>
        <p className="shrink-0 pl-9 font-mono text-sm text-muted-foreground sm:pl-0 sm:pt-1">
          {startDate} &mdash; {endDate}
        </p>
      </header>

      <ul className="mt-6 space-y-4">
        {responsibilities.map((responsibility) => (
          <li
            key={responsibility}
            className="flex gap-4 text-base leading-7 text-muted-foreground"
          >
            <span
              className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

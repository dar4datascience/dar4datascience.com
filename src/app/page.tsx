import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TechIcon, { TechChip } from "@/components/TechIcon";
import { homeJsonLd } from "@/lib/schema";
import { formatDateRange } from "@/lib/format";
import {
  SITE_URL,
  person,
  experience,
  skills,
  faq,
  projects,
} from "@/data/profile";

export const metadata: Metadata = {
  title: `${person.name} — ${person.jobTitle}`,
  description: person.tagline,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${person.name} — ${person.jobTitle}`,
    description: person.tagline,
    url: SITE_URL,
    siteName: "dar4datascience",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: `${person.name} — ${person.jobTitle}`,
    description: person.tagline,
  },
};

const KEY_RESULTS = [
  "USD 1M+ estimated annual savings from BigQuery optimization and asset decommissioning at Rackspace Technology",
  "Power BI deployment time cut from 60 minutes to 2 minutes via a custom CI/CD pipeline",
  "~40% compute cost and ~60% processing-time reduction on AWS with a DuckDB + Lambda architecture",
  "40% faster Spark SQL jobs through Python profiling and tuning at DiDi Food",
];

const TECH_STACK = [
  "Python",
  "PySpark",
  "R",
  "DuckDB",
  "BigQuery",
  "Databricks",
  "Kafka",
  "Airflow",
  "PostgreSQL",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "FastAPI",
  "Django",
  "Quarto",
  "Cloudflare Workers",
  "Looker",
  "Gemini",
  "Anthropic",
  "MCP",
  "Observable",
  "pandas",
  "OpenCV",
  "C++",
];

const STATS = [
  { value: "USD 1M+", label: "annual savings" },
  { value: "60→2 min", label: "Power BI deploys" },
  { value: "~40%", label: "compute cost cut" },
  { value: person.yearsOfExperience, label: "years experience" },
];

const ICONS = [
  // database
  <svg key="db" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-accent" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>,
  // layers
  <svg key="layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-accent" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>,
  // plug
  <svg key="plug" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-accent" aria-hidden="true"><path d="M9 2v6M15 2v6"/><path d="M7 8h10v4a5 5 0 0 1-10 0V8Z"/><path d="M12 17v5"/></svg>,
  // cloud
  <svg key="cloud" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-accent" aria-hidden="true"><path d="M17.5 19a4.5 4.5 0 0 0 .9-8.9A6 6 0 0 0 6.7 9.1 4 4 0 0 0 6.5 19h11Z"/></svg>,
  // chart
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-accent" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 15v4M12 10v9M17 6v13"/></svg>,
];

function diffTitle(d: string): string {
  const m = d.match(/^([^:(]{4,60}?)\s*[:(]/);
  if (m) return m[1].trim();
  return d.split(" ").slice(0, 4).join(" ");
}

function Headline({ text }: { text: string }) {
  const idx = text.toLowerCase().indexOf("full-stack data engineer");
  if (idx === -1) return <span className="gradient-text">{text}</span>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="gradient-text">
        {text.slice(idx, idx + "full-stack data engineer".length)}
      </span>
      {text.slice(idx + "full-stack data engineer".length)}
    </>
  );
}

export default function Home() {
  const current = experience[0];
  return (
    <>
      <JsonLd data={homeJsonLd()} />

      <section className="relative isolate py-16 md:py-24">
        <div aria-hidden="true" className="hero-aurora" />
        <p className="eyebrow inline-flex rounded-full border border-border bg-surface px-3 py-1">
          Senior Full-Stack Data Engineer · {person.location.city}
        </p>
        <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
          {person.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold text-foreground md:text-xl">
          <Headline text={person.headline} />
        </p>
        <p className="mt-4 max-w-2xl text-muted">{person.tagline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${person.email}`}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
          >
            Email me
          </a>
          <a
            href={person.linkedin}
            rel="noopener"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium no-underline transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn ↗
          </a>
          <a
            href={person.github}
            rel="noopener"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium no-underline transition-colors hover:border-accent hover:text-accent"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <section aria-labelledby="key-results" className="pb-4">
        <h2 id="key-results" className="sr-only">
          Key results
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="card p-5 text-center">
              <p className="text-2xl font-bold tracking-tight text-accent md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-subtle">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <ul className="sr-only">
          {KEY_RESULTS.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="experience-logos" className="py-10">
        <h2 id="experience-logos" className="sr-only">
          Companies
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {experience.map((r) => (
            <li
              key={r.company}
              className="text-sm font-semibold uppercase tracking-widest text-subtle"
            >
              {r.company}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tech-stack" className="py-10">
        <h2 id="tech-stack" className="eyebrow text-center">
          Tech stack
        </h2>
        <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
          {TECH_STACK.map((t) => (
            <li
              key={t}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <TechIcon
                name={t}
                className="h-7 w-7 text-subtle transition-colors group-hover:text-[var(--brand)]"
              />
              <span className="text-xs font-medium text-subtle transition-colors group-hover:text-foreground">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="about" className="py-16 md:py-24">
        <p className="eyebrow">About</p>
        <h2 id="about" className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          The short version
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          {person.summary}
        </p>
      </section>

      <section aria-labelledby="differentiators" className="py-16 md:py-24">
        <p className="eyebrow">What I bring</p>
        <h2
          id="differentiators"
          className="mt-2 text-3xl font-bold tracking-tight md:text-4xl"
        >
          What I bring
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {person.differentiators.map((d, i) => (
            <div key={d} className="card p-6">
              {ICONS[i % ICONS.length]}
              <h3 className="mt-3 font-semibold">{diffTitle(d)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="current-role" className="py-16 md:py-24">
        <p className="eyebrow">Current role</p>
        <h2
          id="current-role"
          className="mt-2 text-3xl font-bold tracking-tight md:text-4xl"
        >
          Where I work now
        </h2>
        <article className="card mt-8 p-6 md:p-8">
          <h3 className="text-xl font-semibold">
            {current.title} · {current.company}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {formatDateRange(current.start, current.end)} · {current.location}
          </p>
          <p className="mt-3 text-muted">{current.summary}</p>
          <Link
            href="/experience"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            See all experience →
          </Link>
        </article>
      </section>

      <section aria-labelledby="selected-projects" className="py-16 md:py-24">
        <p className="eyebrow">Selected projects</p>
        <h2
          id="selected-projects"
          className="mt-2 text-3xl font-bold tracking-tight md:text-4xl"
        >
          Things I&apos;ve built
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)]
            .slice(0, 4)
            .map((p) => (
              <article key={p.name} className="card flex flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <span className="flex items-center gap-2 text-subtle">
                    {p.tags.slice(0, 4).map((t) => (
                      <TechIcon key={t} name={t} className="h-4 w-4" />
                    ))}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm text-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex gap-4 text-sm font-medium">
                  {p.demo && (
                    <a
                      href={p.demo}
                      rel="noopener"
                      className="text-accent hover:underline"
                    >
                      Demo ↗
                    </a>
                  )}
                  <a
                    href={p.url}
                    rel="noopener"
                    className="text-muted hover:text-accent"
                  >
                    Code ↗
                  </a>
                </div>
              </article>
            ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
        >
          All projects →
        </Link>
      </section>

      <section aria-labelledby="skills" className="py-16 md:py-24">
        <p className="eyebrow">Skills</p>
        <h2 id="skills" className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Toolbox
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.category} className="card p-5">
              <h3 className="eyebrow">{s.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <TechChip key={item} name={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq" className="py-16 md:py-24">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq" className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-3">
          {faq.map((f) => (
            <details key={f.question} className="card p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {f.question}
                <svg
                  className="faq-chevron h-4 w-4 shrink-0 text-subtle"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mb-16 rounded-3xl bg-accent-soft px-6 py-12 text-center md:px-12">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Need a data lake built or fixed?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          I design, build, and optimize cloud data platforms end to end — from
          backend emitters to BI and AI layers.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${person.email}`}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
          >
            Email me
          </a>
          <a
            href={person.linkedin}
            rel="noopener"
            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium no-underline transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>
    </>
  );
}

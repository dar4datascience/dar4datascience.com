import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { homeJsonLd } from "@/lib/schema";
import { formatDateRange } from "@/lib/format";
import {
  SITE_URL,
  person,
  experience,
  skills,
  faq,
} from "@/data/profile";

export const metadata: Metadata = {
  title: `${person.name} — ${person.jobTitle}`,
  description: person.summary,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${person.name} — ${person.jobTitle}`,
    description: person.headline,
    url: SITE_URL,
    siteName: "dar4datascience",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: `${person.name} — ${person.jobTitle}`,
    description: person.headline,
  },
};

const KEY_RESULTS = [
  "USD 1M+ estimated annual savings from BigQuery optimization and asset decommissioning at Rackspace Technology",
  "Power BI deployment time cut from 60 minutes to 2 minutes via a custom CI/CD pipeline",
  "~40% compute cost and ~60% processing-time reduction on AWS with a DuckDB + Lambda architecture",
  "40% faster Spark SQL jobs through Python profiling and tuning at DiDi Food",
];

export default function Home() {
  const current = experience[0];
  return (
    <>
      <JsonLd data={homeJsonLd()} />

      <section className="py-8">
        <h1 className="text-4xl font-bold">{person.name}</h1>
        <p className="mt-2 text-lg text-accent font-medium">
          {person.headline}
        </p>
        <p className="mt-3 text-muted">{person.tagline}</p>
        <p className="mt-2 text-sm text-muted">
          {person.location.city}, {person.location.country} ·{" "}
          {person.yearsOfExperience} years of experience
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${person.email}`}
            className="rounded bg-accent px-4 py-2 text-sm font-medium text-white no-underline"
          >
            Email
          </a>
          <a
            href={person.linkedin}
            rel="noopener"
            className="rounded border border-border px-4 py-2 text-sm font-medium no-underline hover:border-accent"
          >
            LinkedIn
          </a>
          <a
            href={person.github}
            rel="noopener"
            className="rounded border border-border px-4 py-2 text-sm font-medium no-underline hover:border-accent"
          >
            GitHub
          </a>
        </div>
      </section>

      <section aria-labelledby="about">
        <h2 id="about" className="text-2xl font-semibold">
          About
        </h2>
        <p className="mt-3 leading-relaxed">{person.summary}</p>
      </section>

      <section aria-labelledby="current-role" className="mt-10">
        <h2 id="current-role" className="text-2xl font-semibold">
          Current role
        </h2>
        <article className="mt-3 rounded-lg border border-border bg-card p-5">
          <h3 className="text-lg font-semibold">
            {current.title} · {current.company}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {formatDateRange(current.start, current.end)} · {current.location}
          </p>
          <p className="mt-2">{current.summary}</p>
        </article>
      </section>

      <section aria-labelledby="key-results" className="mt-10">
        <h2 id="key-results" className="text-2xl font-semibold">
          Key results
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {KEY_RESULTS.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills" className="mt-10">
        <h2 id="skills" className="text-2xl font-semibold">
          Skills
        </h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div
              key={s.category}
              className="rounded-lg border border-border bg-card p-4"
            >
              <h3 className="font-semibold text-accent">{s.category}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="faq" className="mt-10">
        <h2 id="faq" className="text-2xl font-semibold">
          Frequently asked questions
        </h2>
        <div className="mt-3 space-y-2">
          {faq.map((f) => (
            <details
              key={f.question}
              className="rounded-lg border border-border bg-card p-4"
            >
              <summary className="cursor-pointer font-medium">
                {f.question}
              </summary>
              <p className="mt-2 text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

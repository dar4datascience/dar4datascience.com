import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/schema";
import { TechChip } from "@/components/TechIcon";
import {
  SITE_URL,
  skills,
  certifications,
  education,
} from "@/data/profile";

const DESCRIPTION =
  "Skills, certifications, and education of Daniel Amieva Rodriguez: Python, SQL, PySpark, AWS, GCP, Databricks, BI tooling, and AI engineering.";

export const metadata: Metadata = {
  title: "Skills",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/skills` },
  openGraph: {
    title: "Skills | Daniel Amieva Rodriguez",
    description: DESCRIPTION,
    url: `${SITE_URL}/skills`,
    type: "website",
  },
  twitter: { card: "summary", title: "Skills | Daniel Amieva Rodriguez" },
};

export default function SkillsPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("/skills", "Skills — Daniel Amieva Rodriguez")} />
      <section className="py-16 md:py-24">
        <p className="eyebrow">Capabilities</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Skills
        </h1>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <section key={s.category} className="card p-5">
              <h2 className="eyebrow">{s.category}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <TechChip key={item} name={item} />
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section aria-labelledby="certifications" className="mt-16">
          <p className="eyebrow">Credentials</p>
          <h2 id="certifications" className="mt-2 text-2xl font-bold tracking-tight">
            Certifications
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name} className="card p-5">
                <p className="font-semibold">{c.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {c.issuer} · {c.year}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="education" className="mt-16">
          <p className="eyebrow">Education</p>
          <h2 id="education" className="mt-2 text-2xl font-bold tracking-tight">
            Education
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {education.map((e) => (
              <li key={e.degree} className="card p-5">
                <p className="font-semibold">{e.degree}</p>
                <p className="mt-1 text-sm text-muted">
                  {e.institution} · {e.start}–{e.end}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}

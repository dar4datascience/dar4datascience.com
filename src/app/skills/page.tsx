import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/schema";
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
      <h1 className="text-3xl font-bold">Skills</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {skills.map((s) => (
          <section
            key={s.category}
            className="rounded-lg border border-border bg-card p-4"
          >
            <h2 className="font-semibold text-accent">{s.category}</h2>
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
          </section>
        ))}
      </div>

      <section aria-labelledby="certifications" className="mt-10">
        <h2 id="certifications" className="text-2xl font-semibold">
          Certifications
        </h2>
        <ul className="mt-3 space-y-2">
          {certifications.map((c) => (
            <li
              key={c.name}
              className="rounded-lg border border-border bg-card p-4"
            >
              <span className="font-medium">{c.name}</span>
              <span className="text-muted">
                {" "}
                — {c.issuer}, {c.year}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="education" className="mt-10">
        <h2 id="education" className="text-2xl font-semibold">
          Education
        </h2>
        <ul className="mt-3 space-y-2">
          {education.map((e) => (
            <li
              key={e.degree}
              className="rounded-lg border border-border bg-card p-4"
            >
              <span className="font-medium">{e.degree}</span>
              <span className="text-muted">
                {" "}
                — {e.institution}, {e.start}–{e.end}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

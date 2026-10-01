import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { experienceJsonLd } from "@/lib/schema";
import { formatDateRange } from "@/lib/format";
import { SITE_URL, experience } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience of Daniel Amieva Rodriguez: Senior Data Engineer at TeamStation AI, previously Rackspace Technology, Baz Super App, DiDi Food, and DGTIC UNAM.",
  alternates: { canonical: `${SITE_URL}/experience` },
  openGraph: {
    title: "Experience | Daniel Amieva Rodriguez",
    description:
      "Data engineering and BI roles at TeamStation AI, Rackspace Technology, Baz Super App, DiDi Food, and DGTIC UNAM.",
    url: `${SITE_URL}/experience`,
    type: "website",
  },
  twitter: { card: "summary", title: "Experience | Daniel Amieva Rodriguez" },
};

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={experienceJsonLd()} />
      <h1 className="text-3xl font-bold">Experience</h1>
      <div className="mt-6 space-y-6">
        {experience.map((role) => (
          <article
            key={role.company}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h2 className="text-xl font-semibold">
              {role.title} · {role.company}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {formatDateRange(role.start, role.end)} · {role.location}
            </p>
            <p className="mt-2">{role.summary}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              {role.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {role.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}

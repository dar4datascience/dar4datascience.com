import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { experienceJsonLd } from "@/lib/schema";
import { formatDateRange } from "@/lib/format";
import { TechChip } from "@/components/TechIcon";
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
      <section className="py-16 md:py-24">
        <p className="eyebrow">Career</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Experience
        </h1>
        <div className="mt-12 space-y-10">
          {experience.map((role) => (
            <article
              key={role.company}
              className="relative border-l-2 border-border pl-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
              />
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                {role.title} · {role.company}
              </h2>
              <p className="mt-1 text-sm text-subtle">
                {formatDateRange(role.start, role.end)} · {role.location}
              </p>
              <p className="mt-3 text-muted">{role.summary}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted">
                {role.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {role.technologies.map((t) => (
                  <TechChip key={t} name={t} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/schema";
import { SITE_URL, projects } from "@/data/profile";

const DESCRIPTION =
  "Public projects by Daniel Amieva Rodriguez: open data pipelines, serverless AWS, R Shiny + Gemini, remote sensing research, and an automated CV pipeline.";

export const metadata: Metadata = {
  title: "Projects",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Projects | Daniel Amieva Rodriguez",
    description: DESCRIPTION,
    url: `${SITE_URL}/projects`,
    type: "website",
  },
  twitter: { card: "summary", title: "Projects | Daniel Amieva Rodriguez" },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd("/projects", "Projects — Daniel Amieva Rodriguez")}
      />
      <section className="py-16 md:py-24">
        <p className="eyebrow">Open source &amp; side work</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Projects
        </h1>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name} className="card flex flex-col p-6">
              <h2 className="text-lg font-semibold tracking-tight">
                <a
                  href={p.url}
                  rel="noopener"
                  className="text-foreground hover:text-accent"
                >
                  {p.name} <span aria-hidden="true">↗</span>
                </a>
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

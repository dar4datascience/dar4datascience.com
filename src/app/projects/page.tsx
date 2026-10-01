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
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h2 className="text-lg font-semibold">
              <a
                href={p.url}
                rel="noopener"
                className="text-accent hover:underline"
              >
                {p.name}
              </a>
            </h2>
            <p className="mt-2 text-sm">{p.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
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

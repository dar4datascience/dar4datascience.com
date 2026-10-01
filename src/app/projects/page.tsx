import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TechIcon from "@/components/TechIcon";
import { projectsJsonLd } from "@/lib/schema";
import { SITE_URL, projects } from "@/data/profile";

const DESCRIPTION =
  "Public projects by Daniel Amieva Rodriguez: geospatial R Shiny dashboards, web scraping, PDF extraction pipelines, MCP servers, native DuckDB extensions, Cloudflare Workers, OCR + Whisper pipelines, and serverless AWS.";

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

function TagIcons({ tags }: { tags: string[] }) {
  return (
    <span className="flex items-center gap-2 text-subtle">
      {tags.slice(0, 4).map((t) => (
        <TechIcon key={t} name={t} className="h-4 w-4" />
      ))}
    </span>
  );
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <>
      <JsonLd data={projectsJsonLd()} />
      <section className="py-16 md:py-24">
        <p className="eyebrow">Open source &amp; side work</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Projects
        </h1>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <article key={p.name} className="card flex flex-col p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  {p.name}
                </h2>
                <TagIcons tags={p.tags} />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
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
              <div className="mt-5 flex gap-3">
                {p.demo && (
                  <a
                    href={p.demo}
                    rel="noopener"
                    className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
                  >
                    Live demo ↗
                  </a>
                )}
                <a
                  href={p.url}
                  rel="noopener"
                  className="rounded-full border border-border px-4 py-2 text-xs font-medium no-underline transition-colors hover:border-accent hover:text-accent"
                >
                  Code ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.name} className="card flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold tracking-tight">
                  {p.name}
                </h2>
                <TagIcons tags={p.tags} />
              </div>
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
      </section>
    </>
  );
}

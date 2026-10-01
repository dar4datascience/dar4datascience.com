import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/schema";
import { SITE_URL, person, services } from "@/data/profile";

const DESCRIPTION =
  "Data engineering services offered by Daniel Amieva Rodriguez: cloud data platforms, ETL/ELT pipelines, BI automation, AI integration, and cost optimization.";

export const metadata: Metadata = {
  title: "Services",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Services | Daniel Amieva Rodriguez",
    description: DESCRIPTION,
    url: `${SITE_URL}/services`,
    type: "website",
  },
  twitter: { card: "summary", title: "Services | Daniel Amieva Rodriguez" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={pageJsonLd("/services", "Services — Daniel Amieva Rodriguez")}
      />
      <section className="py-16 md:py-24">
        <p className="eyebrow">What I can do for you</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Services
        </h1>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.name} className="card p-6">
              <h2 className="font-semibold tracking-tight text-accent">
                {s.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-3xl bg-accent-soft px-6 py-12 text-center md:px-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Work with me
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Get in touch to discuss data platform, pipeline, or AI integration
            work.
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
        </div>
      </section>
    </>
  );
}

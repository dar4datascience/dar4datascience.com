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
      <h1 className="text-3xl font-bold">Services</h1>
      <ul className="mt-6 space-y-4">
        {services.map((s) => (
          <li
            key={s.name}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h2 className="text-lg font-semibold text-accent">{s.name}</h2>
            <p className="mt-2">{s.description}</p>
          </li>
        ))}
      </ul>
      <section className="mt-10 rounded-lg border border-border bg-card p-5 text-center">
        <h2 className="text-xl font-semibold">Work with me</h2>
        <p className="mt-2 text-muted">
          Get in touch to discuss data platform, pipeline, or AI integration
          work.
        </p>
        <div className="mt-4 flex justify-center gap-3">
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
        </div>
      </section>
    </>
  );
}

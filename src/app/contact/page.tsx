import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageJsonLd } from "@/lib/schema";
import { SITE_URL, person } from "@/data/profile";

const DESCRIPTION =
  "Contact Daniel Amieva Rodriguez: email, LinkedIn, GitHub. Based in Mexico City, fluent English, native Spanish.";

export const metadata: Metadata = {
  title: "Contact",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact | Daniel Amieva Rodriguez",
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
    type: "website",
  },
  twitter: { card: "summary", title: "Contact | Daniel Amieva Rodriguez" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={pageJsonLd("/contact", "Contact — Daniel Amieva Rodriguez")} />
      <section className="py-16 md:py-24">
        <p className="eyebrow">Get in touch</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Contact
        </h1>
        <div className="card mx-auto mt-10 max-w-xl p-8">
          <dl className="space-y-5">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${person.email}`}
                  className="font-medium text-accent hover:underline"
                >
                  {person.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">LinkedIn</dt>
              <dd className="mt-1">
                <a
                  href={person.linkedin}
                  rel="noopener"
                  className="font-medium text-accent hover:underline"
                >
                  linkedin.com/in/dar-4-ds ↗
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">GitHub</dt>
              <dd className="mt-1">
                <a
                  href={person.github}
                  rel="noopener"
                  className="font-medium text-accent hover:underline"
                >
                  github.com/dar4datascience ↗
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-1">
                {person.location.city}, {person.location.country}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Languages</dt>
              <dd className="mt-1">
                {person.languages
                  .map((l) => `${l.name} (${l.level})`)
                  .join(", ")}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}

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
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="mt-6 rounded-lg border border-border bg-card p-5">
        <dl className="space-y-3">
          <div>
            <dt className="text-sm font-semibold text-accent">Email</dt>
            <dd>
              <a
                href={`mailto:${person.email}`}
                className="text-accent hover:underline"
              >
                {person.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-accent">LinkedIn</dt>
            <dd>
              <a
                href={person.linkedin}
                rel="noopener"
                className="text-accent hover:underline"
              >
                linkedin.com/in/dar-4-ds
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-accent">GitHub</dt>
            <dd>
              <a
                href={person.github}
                rel="noopener"
                className="text-accent hover:underline"
              >
                github.com/dar4datascience
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-accent">Location</dt>
            <dd>
              {person.location.city}, {person.location.country}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-accent">Languages</dt>
            <dd>
              {person.languages.map((l) => `${l.name} (${l.level})`).join(", ")}
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}

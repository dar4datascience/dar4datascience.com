import {
  SITE_URL,
  person,
  experience,
  skills,
  certifications,
  education,
  faq,
} from "@/data/profile";

export const PERSON_ID = `${SITE_URL}/#person`;

function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: person.name,
    givenName: person.givenName,
    familyName: person.familyName,
    jobTitle: person.jobTitle,
    description: person.summary,
    email: `mailto:${person.email}`,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: person.location.city,
      addressCountry: person.location.countryCode,
    },
    sameAs: [person.linkedin, person.github],
    knowsLanguage: person.languages.map((l) => l.name),
    knowsAbout: skills.flatMap((s) => s.items),
    alumniOf: education.map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.institution,
    })),
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.name,
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: c.issuer },
    })),
    worksFor: {
      "@type": "OrganizationRole",
      roleName: experience[0].title,
      startDate: experience[0].start,
      worksFor: { "@type": "Organization", name: experience[0].company },
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Senior Data Engineer",
    },
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "dar4datascience",
        url: SITE_URL,
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: person.name,
        mainEntity: { "@id": PERSON_ID },
      },
      personNode(),
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}

export function experienceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/experience`,
        url: `${SITE_URL}/experience`,
        name: `Experience — ${person.name}`,
        about: { "@id": PERSON_ID },
      },
      personNode(),
      {
        "@type": "ItemList",
        name: `Roles held by ${person.name}`,
        itemListElement: experience.map((r, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "OrganizationRole",
            roleName: r.title,
            name: `${r.title} at ${r.company}`,
            member: { "@id": PERSON_ID },
            worksFor: { "@type": "Organization", name: r.company },
            startDate: r.start,
            ...(r.end ? { endDate: r.end } : {}),
          },
        })),
      },
    ],
  };
}

export function pageJsonLd(path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${path}`,
        url: `${SITE_URL}${path}`,
        name,
        about: { "@id": PERSON_ID },
      },
    ],
  };
}

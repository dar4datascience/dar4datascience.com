import { writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  SITE_URL,
  person,
  experience,
  skills,
  certifications,
  education,
  projects,
  services,
  faq,
} from "../src/data/profile";
import { formatDateRange } from "../src/lib/format";

const publicDir = join(__dirname, "..", "public");

const llmsTxt = `# ${person.name}

> ${person.headline}. ${person.location.city}, ${person.location.country}. ${person.yearsOfExperience} years of experience.

${person.summary}

## What I bring

${person.differentiators.map((d) => `- ${d}`).join("\n")}

## Current role

- ${experience[0].title} at ${experience[0].company} (${formatDateRange(experience[0].start, experience[0].end)}): ${experience[0].summary}

## Experience

${experience.map((r) => `- ${r.title} at ${r.company} (${formatDateRange(r.start, r.end)})`).join("\n")}

## Skills

${skills.map((s) => `- ${s.category}: ${s.items.join(", ")}`).join("\n")}

## Links

- [Home](${SITE_URL}/)
- [Experience](${SITE_URL}/experience)
- [Skills](${SITE_URL}/skills)
- [Projects](${SITE_URL}/projects)
- [Services](${SITE_URL}/services)
- [Contact](${SITE_URL}/contact)
- [LinkedIn](${person.linkedin})
- [GitHub](${person.github})
- Email: ${person.email}

## MCP endpoint

This site exposes a Model Context Protocol (MCP) server at ${SITE_URL}/mcp (POST JSON-RPC 2.0, streamable-http transport). Tools: get_profile, get_experience, get_skills, get_projects, get_services, get_faq, score_job_fit.
`;

const llmsFullTxt = `# ${person.name}

> ${person.headline}. ${person.location.city}, ${person.location.country}. ${person.yearsOfExperience} years of experience.

${person.summary}

## What I bring

${person.differentiators.map((d) => `- ${d}`).join("\n")}

## Experience

${experience
  .map(
    (r) => `### ${r.title} at ${r.company} (${formatDateRange(r.start, r.end)})

${r.location}

${r.summary}

${r.highlights.map((h) => `- ${h}`).join("\n")}

Technologies: ${r.technologies.join(", ")}`,
  )
  .join("\n\n")}

## Skills

${skills.map((s) => `- ${s.category}: ${s.items.join(", ")}`).join("\n")}

## Certifications

${certifications.map((c) => `- ${c.name} — ${c.issuer}, ${c.year}`).join("\n")}

## Education

${education.map((e) => `- ${e.degree}, ${e.institution} (${e.start}–${e.end})`).join("\n")}

## Projects

${projects.map((p) => `- [${p.name}](${p.url}): ${p.description}`).join("\n")}

## Services

${services.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

## FAQ

${faq.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}

## Links

- [Home](${SITE_URL}/)
- [LinkedIn](${person.linkedin})
- [GitHub](${person.github})
- Email: ${person.email}

## MCP endpoint

This site exposes a Model Context Protocol (MCP) server at ${SITE_URL}/mcp (POST JSON-RPC 2.0, streamable-http transport). Tools: get_profile, get_experience, get_skills, get_projects, get_services, get_faq, score_job_fit.
`;

writeFileSync(join(publicDir, "llms.txt"), llmsTxt);
writeFileSync(join(publicDir, "llms-full.txt"), llmsFullTxt);
console.log("Wrote public/llms.txt and public/llms-full.txt");

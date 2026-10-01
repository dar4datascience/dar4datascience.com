import {
  person,
  experience,
  skills,
  certifications,
  education,
  projects,
  services,
  faq,
} from "@/data/profile";

export type ToolResult = unknown;

export function getProfile() {
  return {
    name: person.name,
    jobTitle: person.jobTitle,
    headline: person.headline,
    summary: person.summary,
    location: person.location,
    email: person.email,
    linkedin: person.linkedin,
    github: person.github,
    languages: person.languages,
    yearsOfExperience: person.yearsOfExperience,
    differentiators: person.differentiators,
  };
}

export function getExperience(args?: { company?: string }) {
  const filter = args?.company?.trim().toLowerCase();
  const roles = filter
    ? experience.filter((r) => r.company.toLowerCase().includes(filter))
    : experience;
  return { roles };
}

export function getSkills(args?: { category?: string }) {
  const filter = args?.category?.trim().toLowerCase();
  const filtered = filter
    ? skills.filter((s) => s.category.toLowerCase().includes(filter))
    : skills;
  return { skills: filtered, certifications, education };
}

export function getProjects() {
  return { projects };
}

export function getServices() {
  return { services };
}

export function getFaq(args?: { query?: string }) {
  const query = args?.query?.trim().toLowerCase();
  if (!query) return { faq };
  const tokens = query.split(/[^a-z0-9]+/).filter(Boolean);
  const scored = faq
    .map((f) => {
      const haystack = `${f.question} ${f.answer}`.toLowerCase();
      const score = tokens.reduce(
        (acc, t) => acc + (haystack.includes(t) ? 1 : 0),
        0,
      );
      return { f, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.f);
  return { faq: scored };
}

function expandTerm(item: string): string[] {
  const out: string[] = [];
  const paren = item.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
  const base = paren ? paren[1] : item;
  for (const part of base.split(/\s*\/\s*|,/)) {
    if (part.trim()) out.push(part.trim());
  }
  if (paren) {
    for (const part of paren[2].split(/\s*\/\s*|,/)) {
      if (part.trim()) out.push(part.trim());
    }
  }
  return out;
}

function profileTerms(): string[] {
  const byLower = new Map<string, string>();
  const add = (term: string) => {
    const t = term.trim();
    if (t.length < 2 && t !== "R") return;
    const key = t.toLowerCase();
    if (!byLower.has(key)) byLower.set(key, t);
  };
  for (const s of skills) for (const item of s.items) expandTerm(item).forEach(add);
  for (const r of experience)
    for (const t of r.technologies) expandTerm(t).forEach(add);
  return [...byLower.values()];
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function scoreJobFit(args: { job_description: string }) {
  const jd = (args.job_description ?? "").replace(/\s+/g, " ");
  const terms = profileTerms();

  const matched = terms
    .filter((term) =>
      new RegExp(`(?<![a-z0-9+#])${escapeRegExp(term)}(?![a-z0-9+#])`, "i").test(
        jd,
      ),
    )
    .sort((a, b) => a.localeCompare(b));

  return {
    matched,
    matched_count: matched.length,
    missing_from_profile_notes:
      "Only confirmed skills are listed; absence here does not imply lack of experience.",
    summary:
      matched.length === 0
        ? "No confirmed skills from Daniel Amieva Rodriguez's profile were detected in this job description."
        : `The job description mentions ${matched.length} skill(s) confirmed in Daniel Amieva Rodriguez's profile: ${matched.join(", ")}.`,
  };
}

export const TOOLS = [
  {
    name: "get_profile",
    description:
      "Get the verified professional profile summary of Daniel Amieva Rodriguez: headline, location, links, languages, years of experience.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_experience",
    description:
      "List work experience roles. Optionally filter by company name (case-insensitive substring).",
    inputSchema: {
      type: "object",
      properties: {
        company: { type: "string", description: "Company name filter" },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_skills",
    description:
      "List skill categories, certifications, and education. Optionally filter skills by category name.",
    inputSchema: {
      type: "object",
      properties: {
        category: { type: "string", description: "Skill category filter" },
      },
      additionalProperties: false,
    },
  },
  {
    name: "get_projects",
    description: "List public projects with descriptions and URLs.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_services",
    description: "List professional services offered.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_faq",
    description:
      "Get frequently asked questions and answers about Daniel Amieva Rodriguez. Optionally provide a query to rank the top 3 most relevant entries.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Free-text search query" },
      },
      additionalProperties: false,
    },
  },
  {
    name: "score_job_fit",
    description:
      "Score a job description against the confirmed skills in Daniel Amieva Rodriguez's profile. Returns matched skills only — never fabricates.",
    inputSchema: {
      type: "object",
      properties: {
        job_description: {
          type: "string",
          description: "The job description text to evaluate",
        },
      },
      required: ["job_description"],
      additionalProperties: false,
    },
  },
] as const;

export function callTool(
  name: string,
  args: Record<string, unknown> | undefined,
): ToolResult {
  switch (name) {
    case "get_profile":
      return getProfile();
    case "get_experience":
      return getExperience(args as { company?: string });
    case "get_skills":
      return getSkills(args as { category?: string });
    case "get_projects":
      return getProjects();
    case "get_services":
      return getServices();
    case "get_faq":
      return getFaq(args as { query?: string });
    case "score_job_fit":
      return scoreJobFit(args as { job_description: string });
    default:
      throw new ToolNotFoundError(name);
  }
}

export class ToolNotFoundError extends Error {
  constructor(public toolName: string) {
    super(`Unknown tool: ${toolName}`);
  }
}

import Link from "next/link";
import { person } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-semibold tracking-tight">dar4datascience</p>
          <p className="mt-2 text-sm text-muted">{person.headline}</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm" aria-label="Footer">
          <a href={`mailto:${person.email}`} className="text-muted hover:text-accent">
            {person.email}
          </a>
          <a href={person.linkedin} rel="noopener" className="text-muted hover:text-accent">
            LinkedIn
          </a>
          <a href={person.github} rel="noopener" className="text-muted hover:text-accent">
            GitHub
          </a>
          <Link href="/llms.txt" className="text-subtle hover:text-accent">
            llms.txt
          </Link>
          <Link href="/mcp" className="text-subtle hover:text-accent">
            MCP endpoint
          </Link>
        </nav>
        <p className="text-sm text-subtle sm:text-right">
          © {new Date().getFullYear()} {person.name}
          <br />
          {person.location.city}, {person.location.country}
        </p>
      </div>
    </footer>
  );
}

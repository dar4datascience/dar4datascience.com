import { person } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-6 text-sm text-muted">
        <a href={`mailto:${person.email}`} className="hover:text-accent">
          Email
        </a>
        <a
          href={person.linkedin}
          rel="noopener"
          className="hover:text-accent"
        >
          LinkedIn
        </a>
        <a href={person.github} rel="noopener" className="hover:text-accent">
          GitHub
        </a>
        <a href="/llms.txt" className="hover:text-accent">
          llms.txt
        </a>
        <a href="/mcp" className="hover:text-accent">
          MCP
        </a>
        <span className="ml-auto">
          © {new Date().getFullYear()} {person.name}
        </span>
      </div>
    </footer>
  );
}

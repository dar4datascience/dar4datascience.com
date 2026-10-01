import Link from "next/link";

const NAV = [
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function Mark() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-3.5 w-3.5 rounded-[4px] bg-accent"
      style={{ transform: "rotate(45deg) scale(0.9)" }}
    />
  );
}

function StatusPill() {
  return (
    <span className="hidden items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted sm:inline-flex">
      <span className="status-dot" aria-hidden="true" />
      Available for senior roles
    </span>
  );
}

export default function Header() {
  return (
    <header className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-foreground no-underline"
        >
          <Mark />
          dar4datascience
        </Link>

        <nav
          className="ml-auto hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {n.label}
            </Link>
          ))}
          <StatusPill />
        </nav>

        <details className="relative ml-auto md:hidden">
          <summary
            className="flex cursor-pointer list-none items-center rounded-lg border border-border px-3 py-1.5 text-sm text-muted"
            aria-label="Open menu"
          >
            Menu
            <svg
              className="faq-chevron ml-1 h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <nav
            className="absolute right-0 top-10 flex w-48 flex-col gap-1 rounded-xl border border-border bg-background p-2 shadow-lg"
            aria-label="Mobile navigation"
          >
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-accent"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

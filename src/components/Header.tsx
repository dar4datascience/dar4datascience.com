import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-border">
      <nav
        className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="mr-auto font-bold text-accent no-underline"
        >
          dar4datascience
        </Link>
        {NAV.filter((n) => n.href !== "/").map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="text-sm text-foreground hover:text-accent"
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

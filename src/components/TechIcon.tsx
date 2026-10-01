import { techIconFor } from "@/lib/tech-icons";

export default function TechIcon({
  name,
  className = "h-3.5 w-3.5",
}: {
  name: string;
  className?: string;
}) {
  const icon = techIconFor(name);
  if (!icon) return null;
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ "--brand": `#${icon.hex}` } as React.CSSProperties}
    >
      <path d={icon.path} />
    </svg>
  );
}

export function TechChip({ name }: { name: string }) {
  return (
    <li className="group/chip inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
      <TechIcon
        name={name}
        className="h-3.5 w-3.5 shrink-0 transition-colors group-hover/chip:text-[var(--brand)]"
      />
      {name}
    </li>
  );
}

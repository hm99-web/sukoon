import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label={`${brand.name} logo`}
    >
      <defs>
        <linearGradient id="logo-g" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC24B" />
          <stop offset="0.55" stopColor="#FB7A2E" />
          <stop offset="1" stopColor="#E2560F" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#logo-g)" />
      <path
        d="M20 30c-.7 0-1.3-.26-1.8-.74l-6.9-6.9a5.7 5.7 0 0 1 8.05-8.05l.65.64.65-.64a5.7 5.7 0 0 1 8.05 8.05l-6.9 6.9c-.5.48-1.1.74-1.8.74Z"
        fill="#fff"
        fillOpacity="0.97"
      />
      <path
        d="M12 21h3.6l1.5-3 2.5 5.6 1.8-3.1H28"
        stroke="#FB7A2E"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-[1.35rem] font-semibold tracking-tight text-ink">
        {brand.name}
      </span>
    </span>
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="rounded-xl" aria-label={`${brand.name} — home`}>
        {content}
      </button>
    );
  }
  return content;
}

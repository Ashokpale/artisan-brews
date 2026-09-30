type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "h-8 w-8" }: BrandMarkProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="22.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15 22h14v5.5a7 7 0 0 1-14 0V22Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M29 24.5h3.2a3.2 3.2 0 0 1 0 6.4H29"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M18 15.5c.6 1.8-.1 2.6-1.1 3.3M24 13.8c.7 2.1-.1 3.1-1.2 4M30 15.5c.6 1.8-.1 2.6-1.1 3.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M6 26V10l10 8 10-8v16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 18l-6-5v10l6 5 6-5V13l-6 5z"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  );
}

import type { IconKey } from "@/lib/services";

interface Props {
  icon: IconKey;
  className?: string;
}

const paths: Record<IconKey, React.ReactNode> = {
  road: (
    <>
      <path d="M3 17h13l-1.5-5.5A2 2 0 0 0 12.6 10H3" />
      <path d="M16 17h3.5a1.5 1.5 0 0 0 1.5-1.5V13l-2-3h-3" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
      <path d="M3 7h7M3 4h10" />
    </>
  ),
  sea: (
    <>
      <path d="M3 18c1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0" />
      <path d="M5 15V8l7-3 7 3v7" />
      <path d="M12 5V2" />
      <path d="M9 9h6" />
    </>
  ),
  air: (
    <>
      <path d="M21 16v-2L13 9V4a1.5 1.5 0 0 0-3 0v5l-8 5v2l8-2.5V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13 18v-2.5L21 16Z" />
    </>
  ),
  rail: (
    <>
      <rect x="6" y="3" width="12" height="13" rx="2" />
      <path d="M6 10h12" />
      <path d="M9 16l-2 4M15 16l2 4" />
      <circle cx="9.5" cy="13" r="0.6" />
      <circle cx="14.5" cy="13" r="0.6" />
      <path d="M4 20h16" />
    </>
  ),
  multimodal: (
    <>
      <path d="M3 7h6v6H3z" />
      <path d="M14 13l4-2 3 3-3 3-4-2" />
      <path d="M9 10h5" />
      <path d="M6 13v4M6 17h12" />
      <circle cx="8" cy="19" r="1.2" />
      <circle cx="16" cy="19" r="1.2" />
    </>
  ),
};

export default function ServiceIcon({ icon, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}

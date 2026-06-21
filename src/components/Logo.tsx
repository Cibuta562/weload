import Image from "next/image";

interface Props {
  variant?: "light" | "dark";
  className?: string;
}

/** WeLoad wordmark. `light` = for dark backgrounds, `dark` = for light backgrounds. */
export default function Logo({ variant = "dark", className }: Props) {
  const src = variant === "light" ? "/weload-wordmark-white.svg" : "/weload-wordmark.svg";
  return (
    <Image
      src={src}
      alt="WeLoad"
      width={132}
      height={52}
      priority
      className={className}
    />
  );
}

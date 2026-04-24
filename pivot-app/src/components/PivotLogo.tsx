import Link from "next/link";

interface PivotLogoProps {
  size?: "sm" | "md" | "lg";
  light?: boolean; // for white-bg pages
}

export default function PivotLogo({ size = "md", light = false }: PivotLogoProps) {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 44 : 34;
  const textCls = size === "sm" ? "text-[13px]" : size === "lg" ? "text-xl" : "text-[15px]";
  const color = light ? "#0a0a0a" : "#ffffff";

  return (
    <Link href="/" className="inline-flex items-center gap-3 group select-none">
      {/* Geometric SVG mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 34 34"
        fill="none"
        className="group-hover:rotate-90 transition-transform duration-500"
      >
        {/* Outer diamond */}
        <path
          d="M17 2 L32 17 L17 32 L2 17 Z"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />
        {/* Inner diamond */}
        <path
          d="M17 8 L26 17 L17 26 L8 17 Z"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Center cross */}
        <line x1="17" y1="12" x2="17" y2="22" stroke={color} strokeWidth="1.5" opacity="0.7" />
        <line x1="12" y1="17" x2="22" y2="17" stroke={color} strokeWidth="1.5" opacity="0.7" />
        {/* Center dot */}
        <circle cx="17" cy="17" r="1.5" fill={color} />
      </svg>

      {/* Brand text */}
      <div className="flex flex-col leading-none" style={{ color }}>
        <span className={`${textCls} font-bold tracking-tight`}>
          Pivot AI
        </span>
        <span
          className="text-[10px] font-medium tracking-[0.2em] uppercase mt-0.5"
          style={{ color: light ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.35)" }}
        >
          樞智科技
        </span>
      </div>
    </Link>
  );
}

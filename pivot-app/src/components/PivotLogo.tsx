import Link from "next/link";

interface PivotLogoProps {
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export default function PivotLogo({ size = "md", dark = false }: PivotLogoProps) {
  const sizes = {
    sm: { circle: "w-8 h-8", text: "text-sm", sub: "text-[10px]" },
    md: { circle: "w-10 h-10", text: "text-[15px]", sub: "text-[11px]" },
    lg: { circle: "w-14 h-14", text: "text-xl", sub: "text-sm" },
  };
  const s = sizes[size];

  return (
    <Link href="/" className="inline-flex items-center gap-3 group select-none">
      {/* Circle mark */}
      <div
        className={`${s.circle} rounded-full border-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
        style={{ borderColor: "#D4AF37", background: "linear-gradient(145deg, #FDFBF2, #FFF9E6)" }}
      >
        <span
          className="font-black leading-none"
          style={{
            color: "#D4AF37",
            fontSize: size === "lg" ? "22px" : size === "sm" ? "13px" : "16px",
            textShadow: "0 1px 2px rgba(212,175,55,0.3)",
          }}
        >
          P
        </span>
      </div>

      {/* Brand text */}
      <div className="flex flex-col leading-none">
        <span className={`${s.text} font-bold tracking-tight ${dark ? "text-white" : "text-black"}`}>
          Pivot{" "}
          <span style={{ color: "#D4AF37" }}>AI</span>
        </span>
        <span className={`${s.sub} font-medium mt-0.5 ${dark ? "text-white/40" : "text-black/35"} tracking-widest`}>
          樞智科技
        </span>
      </div>
    </Link>
  );
}

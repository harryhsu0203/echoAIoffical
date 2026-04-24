import Link from "next/link";
import { ExternalLink } from "lucide-react";
import PivotLogo from "./PivotLogo";

const cols = [
  {
    title: "Services",
    links: [
      { href: "/services/local-ai", label: "本地生圖部署" },
      { href: "/services/enterprise", label: "企業 AI 方案" },
      { href: "/services/others", label: "硬體調優 & 模型代工" },
      { href: "https://echochat.com.tw/", label: "EchoChat SaaS", ext: true },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "關於我們" },
      { href: "/contact", label: "預約諮詢" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "隱私政策" },
      { href: "#", label: "服務條款" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <PivotLogo size="md" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)", maxWidth: "180px" }}>
              全方位私有化 AI 解決方案。本地算力，不設限創作。
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"ext" in l && l.ext ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm transition-colors hover:text-white/80"
                        style={{ color: "rgba(255,255,255,0.35)" }}>
                        {l.label} <ExternalLink size={10} />
                      </a>
                    ) : (
                      <Link href={l.href} className="text-sm transition-colors hover:text-white/80"
                        style={{ color: "rgba(255,255,255,0.35)" }}>
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>© 2026 Pivot AI 樞智科技. All rights reserved.</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>Built with Next.js · Deployed on Render</p>
        </div>
      </div>
    </footer>
  );
}

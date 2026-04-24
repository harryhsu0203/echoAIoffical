import Link from "next/link";
import { ExternalLink } from "lucide-react";

const cols = [
  {
    title: "服務",
    links: [
      { href: "/services/local-ai", label: "本地生圖部署" },
      { href: "/services/enterprise", label: "企業 AI 方案" },
      { href: "https://echochat.com.tw/", label: "EchoChat SaaS", ext: true },
    ],
  },
  {
    title: "公司",
    links: [
      { href: "/about", label: "關於我們" },
      { href: "/contact", label: "預約諮詢" },
    ],
  },
  {
    title: "資源",
    links: [
      { href: "#", label: "技術文件" },
      { href: "#", label: "隱私政策" },
      { href: "#", label: "服務條款" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-black"
                style={{ background: "linear-gradient(135deg,#00D2FF,#818cf8)" }}
              >
                PA
              </div>
              <span className="text-white font-bold">Pivot AI</span>
            </Link>
            <p className="text-sm text-white/35 leading-relaxed max-w-[200px]">
              全方位私有化 AI 解決方案。本地算力，不設限創作。
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] text-white/35 uppercase tracking-widest font-semibold mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"ext" in l && l.ext ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-white/40 hover:text-[#00D2FF] transition-colors"
                      >
                        {l.label}
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <Link href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/20">© 2026 Pivot AI 樞智科技. All rights reserved.</p>
          <p className="text-xs text-white/15">Built with Next.js · Deployed on Render</p>
        </div>
      </div>
    </footer>
  );
}

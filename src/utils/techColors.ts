export interface TechBadgeStyle {
  text: string;
  bg: string;
  border: string;
  dot: string;
}

const colorMap: Record<string, TechBadgeStyle> = {
  // Languages & Runtimes
  rust: { text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-500/30", dot: "bg-orange-400" },
  python: { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-500/30", dot: "bg-yellow-400" },
  "node.js": { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  node: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  php: { text: "text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-500/30", dot: "bg-indigo-400" },
  "php / laravel": { text: "text-rose-300", bg: "bg-rose-500/10", border: "border-rose-500/30", dot: "bg-rose-400" },
  c: { text: "text-blue-200", bg: "bg-blue-900/25", border: "border-blue-500/30", dot: "bg-blue-400" },

  // Frameworks & Libraries
  react: { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-500/30", dot: "bg-cyan-400" },
  "react 19": { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-500/30", dot: "bg-cyan-400" },
  axum: { text: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/30", dot: "bg-violet-400" },
  laravel: { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30", dot: "bg-red-400" },
  tailwindcss: { text: "text-cyan-300", bg: "bg-cyan-500/10", border: "border-cyan-500/30", dot: "bg-cyan-400" },

  // Protocols & AI
  websockets: { text: "text-pink-300", bg: "bg-pink-500/10", border: "border-pink-500/30", dot: "bg-pink-400" },
  mcp: { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-500/30", dot: "bg-purple-400" },
  "mcp (model context protocol)": { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-500/30", dot: "bg-purple-400" },

  // Databases & Storage
  postgresql: { text: "text-sky-300", bg: "bg-sky-500/10", border: "border-sky-500/30", dot: "bg-sky-400" },
  "sql server": { text: "text-red-300", bg: "bg-red-500/10", border: "border-red-500/30", dot: "bg-red-400" },
  "t-sql": { text: "text-red-300", bg: "bg-red-500/10", border: "border-red-500/30", dot: "bg-red-400" },
  sqlite: { text: "text-sky-300", bg: "bg-sky-500/10", border: "border-sky-500/30", dot: "bg-sky-400" },
  "sqlite (wal)": { text: "text-sky-300", bg: "bg-sky-500/10", border: "border-sky-500/30", dot: "bg-sky-400" },
  zfs: { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "zfs mirror": { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  openzfs: { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "mirroring (raid 1)": { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "cow snapshots": { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "zfs datasets": { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "otimização de índices": { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  "index optimization": { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },

  // DevOps, Infrastructure & Cloud
  docker: { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/30", dot: "bg-blue-400" },
  "docker / lxc": { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/30", dot: "bg-blue-400" },
  lxc: { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-500/30", dot: "bg-yellow-400" },
  "lxc containers": { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-500/30", dot: "bg-yellow-400" },
  "isolamento lxc": { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-500/30", dot: "bg-yellow-400" },
  "proxmox ve": { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", dot: "bg-orange-400" },
  gcp: { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/30", dot: "bg-blue-400" },
  terraform: { text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-500/30", dot: "bg-purple-400" },
  "cloudflare zero-trust": { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "cloudflare tunnels": { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "zero-trust tunnels": { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "zero-trust network": { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "tls end-to-end": { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  mtls: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  "kernel namespaces": { text: "text-yellow-300", bg: "bg-yellow-500/10", border: "border-yellow-500/30", dot: "bg-yellow-400" },
  "debian linux": { text: "text-rose-300", bg: "bg-rose-500/10", border: "border-rose-500/30", dot: "bg-rose-400" },
  debian: { text: "text-rose-300", bg: "bg-rose-500/10", border: "border-rose-500/30", dot: "bg-rose-400" },
  "migração em nuvem": { text: "text-sky-300", bg: "bg-sky-500/10", border: "border-sky-500/30", dot: "bg-sky-400" },
  "cloud migration": { text: "text-sky-300", bg: "bg-sky-500/10", border: "border-sky-500/30", dot: "bg-sky-400" },
  redes: { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  networking: { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },

  // Methodologies & Practices
  "lean coffee": { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/30", dot: "bg-amber-400" },
  "planning poker": { text: "text-sky-300", bg: "bg-sky-500/10", border: "border-sky-500/30", dot: "bg-sky-400" },
  "scrum daily": { text: "text-rose-300", bg: "bg-rose-500/10", border: "border-rose-500/30", dot: "bg-rose-400" },
  "slack export": { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  openspec: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  observabilidade: { text: "text-teal-300", bg: "bg-teal-500/10", border: "border-teal-500/30", dot: "bg-teal-400" },
  observability: { text: "text-teal-300", bg: "bg-teal-500/10", border: "border-teal-500/30", dot: "bg-teal-400" },
  "backup off-site": { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/30", dot: "bg-blue-400" },
  "off-site backups": { text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/30", dot: "bg-blue-400" },
  seo: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  "lgpd / governança": { text: "text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-500/30", dot: "bg-indigo-400" },
  "data governance / lgpd": { text: "text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-500/30", dot: "bg-indigo-400" },
};

const defaultStyle: TechBadgeStyle = {
  text: "text-zinc-300",
  bg: "bg-zinc-900/60",
  border: "border-zinc-800",
  dot: "bg-zinc-400"
};

export function getTechBadgeStyle(tech: string): TechBadgeStyle {
  const normalized = tech.toLowerCase().trim();
  if (colorMap[normalized]) {
    return colorMap[normalized];
  }
  for (const [key, style] of Object.entries(colorMap)) {
    if (normalized.includes(key)) {
      return style;
    }
  }
  return defaultStyle;
}

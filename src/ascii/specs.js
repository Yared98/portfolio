// @ts-nocheck
// Diagramas animados do portfólio. Cada um usa apenas informações que já constam nos
// textos dos cases e da página do homelab (sem métricas ou números inventados).
import { archPiece, flowPiece } from './arch.js';

const t = (lang, pt, en) => (lang === 'pt' ? pt : en);

// ── Imobi: usuário → Cloudflare → Tunnel → Laravel → PostgreSQL ──────────────────────
function imobi(lang) {
  return archPiece({
    slug: `imobi-${lang}`,
    name: 'Imobi architecture',
    note: 'Imobi request path from the user through Cloudflare and a tunnel to Laravel and PostgreSQL in the homelab.',
    cols: 98, rows: 12,
    title: t(lang, 'imobi · produção', 'imobi · production'),
    titleRight: 'fariasdourado.com.br',
    nodes: [
      { x: 1, y: 2, w: 13, label: t(lang, 'Usuário', 'User'), sub: t(lang, 'navegador', 'browser'), color: '3' },
      { x: 18, y: 2, w: 15, label: 'Cloudflare', sub: t(lang, 'DNS · borda', 'DNS · edge'), color: '7' },
      { x: 37, y: 2, w: 18, label: 'Tunnel', sub: 'Docker · LXC 200', color: '6' },
      { x: 59, y: 2, w: 19, label: 'Imobi', sub: 'Laravel · LXC 106', color: '4' },
      { x: 82, y: 2, w: 15, label: 'PostgreSQL', sub: 'LXC 101', color: '5', double: true },
    ],
    edges: [
      { pts: [[14, 3], [17, 3]], color: '3', rate: 1.6, label: { x: 14, y: 6, text: 'HTTPS' } },
      { pts: [[33, 3], [36, 3]], color: '7', rate: 1.4, label: { x: 33, y: 6, text: 'tunnel' } },
      { pts: [[55, 3], [58, 3]], color: '6', rate: 1.2, label: { x: 55, y: 6, text: 'LAN' } },
      { pts: [[78, 3], [81, 3]], color: '4', rate: 1, label: { x: 78, y: 6, text: 'SQL' } },
    ],
    labels: [
      { x: 37, y: 7, text: `╰${'─'.repeat(58)}╯`, color: '2' },
      { x: 57, y: 8, text: 'homelab · Proxmox VE', color: '1' },
    ],
    legend: [{ color: '3', text: t(lang, 'requisição', 'request') }],
    foot: t(lang, 'sem portas abertas no roteador', 'no open ports on the router'),
  });
}

// ── Retroyrd: SPA ⇄ WebSocket ⇄ Axum/Tokio → FSM / MCP / SQLite ──────────────────────
function retroArch(lang) {
  return archPiece({
    slug: `retroyrd-arch-${lang}`,
    name: 'Retroyrd architecture',
    note: 'Retroyrd: React SPA over WebSocket to an Axum and Tokio broker, with a phase state machine, an MCP server and SQLite.',
    cols: 98, rows: 25,
    title: t(lang, 'retroyrd · arquitetura', 'retroyrd · architecture'),
    titleRight: 'Rust · Axum · Tokio',
    nodes: [
      { x: 2, y: 2, w: 26, label: t(lang, 'Usuários', 'Users'), sub: 'React SPA', color: '3' },
      { x: 40, y: 2, w: 30, label: 'Axum + Tokio', sub: 'WebSocket broker', color: '7' },
      { x: 22, y: 10, w: 28, label: t(lang, 'FSM de 6 fases', '6-phase FSM'), sub: t(lang, 'transições em Rust', 'Rust transitions'), color: '4' },
      { x: 60, y: 10, w: 30, label: t(lang, 'Servidor MCP', 'MCP server'), sub: 'JSON-RPC 2.0 · /mcp', color: '6' },
      { x: 22, y: 17, w: 28, label: 'SQLite (WAL)', sub: t(lang, 'persistência local', 'local persistence'), color: '5', double: true },
      { x: 60, y: 17, w: 30, label: t(lang, 'Agentes de IA', 'AI agents'), sub: t(lang, 'Claude · copilotos', 'Claude · copilots'), color: '8' },
    ],
    edges: [
      { pts: [[28, 3], [39, 3]], color: '3', bidir: true, rate: 1.6, label: { x: 29, y: 2, text: 'WebSocket' } },
      { pts: [[48, 6], [48, 8], [36, 8], [36, 9]], color: '4', rate: 1.2, label: { x: 50, y: 7, text: 'broadcast' } },
      { pts: [[62, 6], [62, 8], [75, 8], [75, 9]], color: '6', bidir: true, rate: 0.8 },
      { pts: [[36, 14], [36, 16]], color: '5', rate: 0.6 },
      { pts: [[75, 16], [75, 14]], color: '8', rate: 0.6 },
    ],
    legend: [
      { color: '3', text: 'WebSocket' },
      { color: '4', text: t(lang, 'transição de fase', 'phase transition') },
      { color: '6', text: 'MCP' },
      { color: '5', text: t(lang, 'persistência', 'persistence') },
    ],
  });
}

// ── Homelab: borda Zero-Trust → Proxmox → LXC / workloads / ZFS / backup ─────────────
function homelab(lang) {
  return archPiece({
    slug: `homelab-${lang}`,
    name: 'Homelab topology',
    note: 'Homelab topology: Cloudflare Zero-Trust and an outbound tunnel into Proxmox VE with LXC, workloads, mirrored ZFS and off-site backup.',
    cols: 98, rows: 26,
    title: t(lang, 'topologia do homelab', 'homelab topology'),
    titleRight: t(lang, 'zero portas públicas abertas', 'zero open public ports'),
    nodes: [
      { x: 1, y: 7, w: 16, label: 'Cloudflare', sub: 'Zero-Trust', color: '7' },
      { x: 23, y: 7, w: 18, label: 'Tunnel', sub: t(lang, 'somente saída', 'outbound only'), color: '6' },
      { x: 47, y: 7, w: 20, label: 'Proxmox VE', sub: 'Debian bare-metal', color: '3' },
      { x: 77, y: 1, w: 20, label: 'LXC', sub: t(lang, 'não privilegiados', 'unprivileged'), color: '4' },
      { x: 77, y: 7, w: 20, label: 'Workloads', sub: 'Rust · PostgreSQL', color: '4' },
      { x: 77, y: 13, w: 20, label: 'ZFS', sub: t(lang, 'pools em mirror', 'mirrored pools'), color: '5', double: true },
      { x: 77, y: 19, w: 20, label: 'Backup', sub: 'off-site', color: '5' },
    ],
    edges: [
      { pts: [[17, 8], [22, 8]], color: '7', rate: 1.4, label: { x: 17, y: 6, text: 'HTTPS' } },
      { pts: [[41, 8], [46, 8]], color: '6', rate: 1.2 },
      { pts: [[67, 8], [72, 8], [72, 2], [76, 2]], color: '4', rate: 0.9 },
      { pts: [[67, 8], [76, 8]], color: '4', rate: 1 },
      { pts: [[67, 8], [72, 8], [72, 14], [76, 14]], color: '5', rate: 0.7 },
      { pts: [[87, 17], [87, 18]], color: '5', rate: 0.5 },
    ],
    legend: [
      { color: '7', text: t(lang, 'tráfego externo', 'external traffic') },
      { color: '4', text: 'workloads' },
      { color: '5', text: t(lang, 'dados e backup', 'data and backup') },
    ],
  });
}

// ── Fluxos de estado (FSM) ───────────────────────────────────────────────────────────
function retroFsm(lang) {
  return flowPiece({
    slug: `retroyrd-fsm-${lang}`,
    name: 'Retroyrd phase flow',
    note: 'The six phases of a Retroyrd retrospective, lit in sequence.',
    steps: lang === 'pt'
      ? ['SAFETY_CHECK', 'BRAINSTORM', 'GROUPING', 'VOTING', 'ACTION_ITEMS', 'ARCHIVED']
      : ['ICEBREAKER', 'REFLECT', 'GROUP', 'VOTE', 'DISCUSS', 'ACTION ITEMS'],
    subPrefix: t(lang, 'fase', 'phase'),
    title: t(lang, 'ciclo da retrospectiva · FSM em Rust', 'retrospective lifecycle · Rust FSM'),
    legend: t(lang, 'estado ativo', 'active state'),
  });
}

function coffeeFsm(lang) {
  return flowPiece({
    slug: `coffeeyrd-fsm-${lang}`,
    name: 'CoffeeYrd session flow',
    note: 'The four stages of a CoffeeYrd session, lit in sequence.',
    steps: ['IDEATION', 'VOTING', 'DISCUSSION', 'COMPLETED'],
    subPrefix: t(lang, 'etapa', 'step'),
    title: t(lang, 'ciclo da sessão · FSM em Rust', 'session lifecycle · Rust FSM'),
    legend: t(lang, 'estado ativo', 'active state'),
  });
}

export const diagrams = {};
for (const lang of ['pt', 'en']) {
  diagrams[`imobi-${lang}`] = imobi(lang);
  diagrams[`retroyrd-arch-${lang}`] = retroArch(lang);
  diagrams[`retroyrd-fsm-${lang}`] = retroFsm(lang);
  diagrams[`coffeeyrd-fsm-${lang}`] = coffeeFsm(lang);
  diagrams[`homelab-${lang}`] = homelab(lang);
}

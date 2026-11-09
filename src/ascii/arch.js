// @ts-nocheck
/*
 * Motor de diagramas ASCII animados, derivado do desenho da peça "architecture-map"
 * da biblioteca ascii-magic-art (MIT, Copyright (c) 2026 ASCII Magic, ascii-magic.com).
 * https://github.com/kailashsr38/ascii-magic-art  (texto da licença: ./LICENSE.ascii-magic-art)
 *
 * Em vez de nós fixos, recebe uma especificação (nós, ligações, rótulos) e devolve
 * um módulo no mesmo formato das peças da biblioteca ({ meta, default: create }),
 * para ser tocado pelo `play()` do runtime deles.
 */
import { Grid, palette, fbm } from 'ascii-magic-art/lib/kit.js';

// Mesma paleta da peça original (tema escuro, GitHub-like).
// 0 texto · 1 apagado · 2 linha fraca · 3 azul · 4 verde · 5 laranja · 6 violeta
// 7 ciano · 8 rosa · 9 branco · a dourado · b cinza (ligações)
const PAL = palette([
  '#e6edf3', '#8b949e', '#30363d', '#79c0ff', '#7ee787', '#ffa657',
  '#d2a8ff', '#56d4dd', '#f778ba', '#ffffff', '#f2cc60', '#6e7681',
]);

const dirOf = (a, b) => (b[0] > a[0] ? 'R' : b[0] < a[0] ? 'L' : b[1] > a[1] ? 'D' : 'U');
const GLYPH = {
  L: '─', R: '─', LR: '─', U: '│', D: '│', UD: '│',
  DR: '╭', DL: '╮', UR: '╰', UL: '╯',
  DLR: '┬', ULR: '┴', UDR: '├', UDL: '┤', UDLR: '┼',
};
const ARROW = { R: '▸', L: '◂', D: '▾', U: '▴' };

function cellsOf(pts) {
  const out = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    let [x, y] = out[out.length - 1];
    const [tx, ty] = pts[i];
    if (x !== tx && y !== ty) throw new Error('arch: segmento diagonal entre pontos de uma ligação');
    while (x !== tx || y !== ty) {
      x += Math.sign(tx - x);
      y += Math.sign(ty - y);
      out.push([x, y]);
    }
  }
  return out;
}

const nodeH = (n) => (n.sub ? 4 : 3);

function validate(spec) {
  const fail = (m) => { throw new Error(`arch "${spec.slug}": ${m}`); };
  for (const n of spec.nodes) {
    const pad = n.center ? 2 : 4;
    if (n.label.length + pad > n.w) fail(`rótulo "${n.label}" não cabe em w=${n.w}`);
    if (n.sub && n.sub.length > n.w - 2) fail(`sub "${n.sub}" não cabe em w=${n.w}`);
    if (n.x < 0 || n.y < 0 || n.x + n.w > spec.cols || n.y + nodeH(n) > spec.rows) fail(`nó "${n.label}" fora da grade`);
  }
  for (const e of spec.edges) {
    for (const [x, y] of e.pts) if (x < 0 || y < 0 || x >= spec.cols || y >= spec.rows) fail(`ligação fora da grade (${x},${y})`);
    if (e.label && e.label.x + e.label.text.length > spec.cols) fail(`rótulo de ligação "${e.label.text}" passa da borda`);
  }
}

export function archPiece(spec) {
  validate(spec);
  const { cols, rows, nodes } = spec;
  const meta = {
    slug: spec.slug,
    name: spec.name,
    category: 'explainers',
    note: spec.note,
    tags: ['architecture', 'diagram'],
    cols, rows, fps: 24,
    palette: PAL,
  };
  const edges = spec.edges.map((e) => ({ ...e, cells: cellsOf(e.pts) }));
  const cycle = spec.cycle || null;

  // Glifos das ligações: cada célula guarda quais lados se conectam; o caractere
  // (reta, curva, T, cruzamento) sai dessa combinação.
  const conn = new Map();
  const touch = (x, y, d) => {
    const k = `${x},${y}`;
    if (!conn.has(k)) conn.set(k, { x, y, d: new Set(), arrow: null });
    conn.get(k).d.add(d);
    return conn.get(k);
  };
  for (const e of edges) {
    const c = e.cells;
    const L = c.length;
    for (let k = 0; k < L; k++) {
      const ent = touch(c[k][0], c[k][1], k < L - 1 ? dirOf(c[k], c[k + 1]) : dirOf(c[k], c[k - 1]));
      if (k < L - 1 && k > 0) ent.d.add(dirOf(c[k], c[k - 1]));
      if (k === L - 1 && L > 1) ent.arrow = ARROW[dirOf(c[L - 2], c[L - 1])];
      if (k === 0 && e.bidir) ent.arrow = ARROW[dirOf(c[1], c[0])];
    }
  }
  const glyphs = [...conn.values()].map((c) => ({
    x: c.x, y: c.y,
    ch: c.arrow || GLYPH[['U', 'D', 'L', 'R'].filter((d) => c.d.has(d)).join('')] || '·',
    arrow: !!c.arrow,
  }));

  function create() {
    const g = new Grid(cols, rows);
    const N = nodes.length;
    const P = cycle ? cycle.period : 0;

    return (t) => {
      g.clear();
      const active = cycle ? Math.floor(t / P) % N : -1;
      const phase = cycle ? (t % P) / P : 0;

      // ligações
      for (const c of glyphs) g.set(c.x, c.y, c.ch, c.arrow ? '9' : 'b');

      // pacotes
      edges.forEach((e, ei) => {
        const cells = e.cells, L = cells.length;
        const co = e.color || '3';
        if (cycle) {
          if (ei === active && phase >= 0.5) {
            const k = Math.min(L - 2, Math.floor(((phase - 0.5) * 2) * (L - 1)));
            if (k >= 0) {
              g.set(cells[k][0], cells[k][1], '●', 'a');
              if (k > 0) g.set(cells[k - 1][0], cells[k - 1][1], '•', 'a');
            }
          }
          return;
        }
        const speed = 12;
        const gap = Math.max(4, Math.round(7 / (e.rate || 1)));
        const off = Math.floor(t * speed + ei * 3.7);
        const run = (dirSign) => {
          for (let k = off % gap; k < L - 1; k += gap) {
            const burst = fbm(t * 0.7 + k * 0.05, ei * 3 + (dirSign < 0 ? 17 : 0), 2, 5);
            if (burst < 0.22) continue;
            const idx = dirSign > 0 ? k : L - 1 - k;
            if (idx <= 0 || idx >= L - 1) continue;
            g.set(cells[idx][0], cells[idx][1], '●', co);
            const tr = idx - dirSign;
            if (tr > 0 && tr < L - 1) g.set(cells[tr][0], cells[tr][1], '•', co);
          }
        };
        run(1);
        if (e.bidir) run(-1);
      });

      // nós
      nodes.forEach((n, i) => {
        const h = nodeH(n);
        const lit = i === active;
        g.box(n.x, n.y, n.w, h, n.double ? 'double' : 'round', lit ? 'a' : n.color);
        const lx = n.center ? n.x + Math.floor((n.w - n.label.length) / 2) : n.x + 2;
        g.text(lx, n.y + 1, n.label, lit ? '9' : '0');
        if (n.sub) {
          const sx = n.center ? n.x + Math.floor((n.w - n.sub.length) / 2) : n.x + 2;
          g.text(sx, n.y + 2, n.sub, lit ? 'a' : '1');
        }
      });

      // rótulos soltos (protocolos etc.)
      for (const e of edges) if (e.label) g.text(e.label.x, e.label.y, e.label.text, e.label.color || '1');
      for (const l of spec.labels || []) g.text(l.x, l.y, l.text, l.color || '1');

      // cabeçalho e legenda
      if (spec.title) g.text(1, 0, spec.title, '0');
      if (spec.titleRight) g.text(cols - 1 - spec.titleRight.length, 0, spec.titleRight, '1');
      if (spec.legend) {
        g.hline(0, cols - 1, rows - 3, '─', '2');
        let x = 1;
        for (const item of spec.legend) {
          g.text(x, rows - 2, '●', item.color);
          g.text(x + 2, rows - 2, item.text, '1');
          x += item.text.length + 5;
        }
        if (spec.foot) g.text(cols - 1 - spec.foot.length, rows - 2, spec.foot, '1');
      }
      return g.frame();
    };
  }

  return { meta, default: create };
}

/**
 * Fluxo de estados em linha (FSM): n caixas ligadas por setas, com o estado ativo
 * acendendo em sequência e um token percorrendo a seta de saída.
 */
export function flowPiece({ slug, name, note, steps, title, legend, subPrefix, period = 1.6 }) {
  const n = steps.length;
  const maxLen = Math.max(...steps.map((s) => s.length));
  const wide = n <= 4;
  const w = maxLen + (wide ? 4 : 2);
  const gap = wide ? 8 : 3;
  const cols = 2 + n * w + (n - 1) * gap;
  const rows = 9;
  const nodes = steps.map((s, i) => ({
    x: 1 + i * (w + gap), y: 2, w, label: s, sub: `${subPrefix} ${i + 1}`, color: '3', center: true,
  }));
  const edges = [];
  for (let i = 0; i < n - 1; i++) {
    const x0 = nodes[i].x + w, x1 = nodes[i + 1].x - 1;
    edges.push({ pts: [[x0, 3], [x1, 3]] });
  }
  return archPiece({
    slug, name, note, cols, rows, nodes, edges,
    cycle: { period }, title, legend: [{ color: 'a', text: legend }],
  });
}

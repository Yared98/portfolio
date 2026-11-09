// @ts-nocheck
// Mapa "nome → módulo da peça". As peças da biblioteca ascii-magic-art (MIT) são
// importadas sob demanda, uma a uma, para o bundle só incluir as que o site usa.
import { diagrams } from './specs.js';

const library = {
  'peekaboo-box': () => import('ascii-magic-art/pieces/peekaboo-box.js'),
  'pulse-line': () => import('ascii-magic-art/pieces/pulse-line.js'),
  'dotted-rule': () => import('ascii-magic-art/pieces/dotted-rule.js'),
};

export const registry = {
  ...Object.fromEntries(Object.entries(diagrams).map(([k, mod]) => [k, () => Promise.resolve(mod)])),
  ...library,
};

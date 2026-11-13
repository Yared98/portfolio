import type { Lang } from '../i18n/ui';

// Catálogo de serviços. Cada "prova" aponta para um case já publicado no site:
// nenhum número aqui é novo, todos vêm dos estudos de caso.
export interface Service {
  id: string;
  /** Nome curto, no estilo de comando, usado na barra de título da janela. */
  cmd: string;
  title: string;
  pitch: string;
  /** Para quem é / quando faz sentido contratar. */
  when: string;
  deliverables: string[];
  stack: string[];
  proof?: { label: string; slug: string };
}

const pt: Service[] = [
  {
    id: 'sob-medida',
    cmd: 'software-sob-medida',
    title: 'Software sob medida',
    pitch: 'Sistemas web, portais e painéis internos construídos em torno do seu processo, em vez de adaptar o seu processo a uma ferramenta pronta.',
    when: 'Quando planilhas e sistemas genéricos já não acompanham a operação, ou a mensalidade de um SaaS deixou de fazer sentido.',
    deliverables: [
      'Levantamento do problema e escopo por escrito',
      'Aplicação em produção, no seu domínio',
      'Painel administrativo para a sua equipe',
      'Código-fonte e documentação entregues a você',
    ],
    stack: ['Rust', 'Laravel', 'React', 'PostgreSQL'],
    proof: { label: 'Imobi: portal imobiliário em produção', slug: 'imobi' },
  },
  {
    id: 'integracoes-ia',
    cmd: 'integracoes-e-ia',
    title: 'Integrações e automação com IA',
    pitch: 'Conecto os sistemas que você já usa entre si e a agentes de IA, para que tarefas repetitivas deixem de depender de copiar e colar.',
    when: 'Quando a equipe perde tempo levando informação de um sistema para outro, ou quer usar IA sobre os dados reais da empresa.',
    deliverables: [
      'Servidores MCP para as suas ferramentas internas',
      'Integrações entre APIs, ERPs e bancos de dados',
      'Automação de rotinas manuais',
      'Credenciais e dados permanecem no seu ambiente',
    ],
    stack: ['TypeScript', 'Node.js', 'MCP', 'REST'],
    proof: { label: 'kanbn-mcp-server: agentes de IA operando um quadro Kanban', slug: 'kanbn-mcp-server' },
  },
  {
    id: 'migracao-nuvem',
    cmd: 'migracao-e-nuvem',
    title: 'Migração e nuvem',
    pitch: 'Planejo e executo a mudança de servidores e bancos de dados para a nuvem, ou para uma infraestrutura própria mais enxuta, sem perder dados no caminho.',
    when: 'Quando o servidor atual chegou ao limite, o contrato de hospedagem ficou caro ou a mudança é arriscada demais para improvisar.',
    deliverables: [
      'Plano de migração com janela de manutenção definida',
      'Infraestrutura como código (Terraform)',
      'Validação de integridade dos dados após a migração',
      'Rede e acesso seguros entre os ambientes',
    ],
    stack: ['GCP', 'Terraform', 'SQL Server', 'Proxmox'],
    proof: { label: 'ERP de 6 TB migrado para a GCP em um fim de semana', slug: 'gcp-migration-6tb' },
  },
  {
    id: 'diagnostico',
    cmd: 'diagnostico-e-performance',
    title: 'Diagnóstico e performance',
    pitch: 'Investigo sistemas lentos ou instáveis até a causa raiz e corrijo o que realmente está errado, em vez de empilhar remendos.',
    when: 'Quando o banco de dados degrada sob carga, a aplicação cai em horário de pico ou ninguém sabe explicar a fatura da nuvem.',
    deliverables: [
      'Análise de causa raiz do problema',
      'Relatório com prioridades e riscos',
      'Otimização de consultas e índices',
      'Acompanhamento até a estabilização',
    ],
    stack: ['SQL Server', 'PostgreSQL', 'T-SQL', 'Observabilidade'],
  },
];

const en: Service[] = [
  {
    id: 'sob-medida',
    cmd: 'custom-software',
    title: 'Custom software',
    pitch: 'Web systems, portals and internal dashboards built around your process, instead of bending your process to fit an off-the-shelf tool.',
    when: 'When spreadsheets and generic systems no longer keep up with the operation, or a SaaS subscription has stopped making sense.',
    deliverables: [
      'Problem discovery and written scope',
      'Application in production, on your domain',
      'Admin panel for your team',
      'Source code and documentation handed over to you',
    ],
    stack: ['Rust', 'Laravel', 'React', 'PostgreSQL'],
    proof: { label: 'Imobi: real estate portal in production', slug: 'imobi' },
  },
  {
    id: 'integracoes-ia',
    cmd: 'integrations-and-ai',
    title: 'Integrations and AI automation',
    pitch: 'I connect the systems you already use to each other and to AI agents, so repetitive work stops depending on copy and paste.',
    when: 'When the team loses time carrying information from one system to another, or wants to use AI on the company’s real data.',
    deliverables: [
      'MCP servers for your internal tools',
      'Integrations between APIs, ERPs and databases',
      'Automation of manual routines',
      'Credentials and data stay in your environment',
    ],
    stack: ['TypeScript', 'Node.js', 'MCP', 'REST'],
    proof: { label: 'kanbn-mcp-server: AI agents operating a Kanban board', slug: 'kanbn-mcp-server' },
  },
  {
    id: 'migracao-nuvem',
    cmd: 'migration-and-cloud',
    title: 'Migration and cloud',
    pitch: 'I plan and execute the move of servers and databases to the cloud, or to a leaner infrastructure of your own, without losing data along the way.',
    when: 'When the current server has hit its limit, the hosting contract got expensive, or the move is too risky to improvise.',
    deliverables: [
      'Migration plan with a defined maintenance window',
      'Infrastructure as code (Terraform)',
      'Data integrity validation after the migration',
      'Secure networking and access between environments',
    ],
    stack: ['GCP', 'Terraform', 'SQL Server', 'Proxmox'],
    proof: { label: '6 TB ERP migrated to GCP over a weekend', slug: 'gcp-migration-6tb' },
  },
  {
    id: 'diagnostico',
    cmd: 'diagnosis-and-performance',
    title: 'Diagnosis and performance',
    pitch: 'I investigate slow or unstable systems down to the root cause and fix what is actually wrong, instead of stacking workarounds.',
    when: 'When the database degrades under load, the application falls over at peak hours, or nobody can explain the cloud bill.',
    deliverables: [
      'Root-cause analysis of the problem',
      'Report with priorities and risks',
      'Query and index optimization',
      'Follow-up until the system is stable',
    ],
    stack: ['SQL Server', 'PostgreSQL', 'T-SQL', 'Observability'],
  },
];

export const services: Record<Lang, Service[]> = { pt, en };

export interface Step {
  title: string;
  desc: string;
}

// Como um projeto anda, da primeira conversa à entrega.
export const process: Record<Lang, Step[]> = {
  pt: [
    { title: 'Conversa', desc: 'Você conta o problema e como a operação funciona hoje. Eu faço as perguntas que definem o que precisa ser construído.' },
    { title: 'Proposta', desc: 'Você recebe escopo, prazo e preço por escrito, antes de qualquer linha de código.' },
    { title: 'Construção', desc: 'Entregas em etapas, que você acompanha e testa conforme ficam prontas.' },
    { title: 'Entrega', desc: 'Sistema em produção, documentado, com o código-fonte nas suas mãos.' },
  ],
  en: [
    { title: 'Conversation', desc: 'You describe the problem and how the operation works today. I ask the questions that define what needs to be built.' },
    { title: 'Proposal', desc: 'You get scope, timeline and price in writing, before any line of code.' },
    { title: 'Build', desc: 'Delivered in stages that you follow and test as they are finished.' },
    { title: 'Delivery', desc: 'System in production, documented, with the source code in your hands.' },
  ],
};

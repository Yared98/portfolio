export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
  pt: {
    // Navigation
    'nav.projects': 'Projetos',
    'nav.trajectory': 'Trajetória',
    'nav.homelab': 'Homelab',
    'nav.available': 'Disponível',
    'nav.software_arch': 'Software & Architecture',

    // Breadcrumbs
    'crumbs.home': 'Início',
    'crumbs.projects': 'Projetos',
    'crumbs.trajectory': 'Trajetória',
    'crumbs.homelab': 'Homelab',

    // Hero
    'hero.overline': 'ENGENHARIA DE SOFTWARE & ARQUITETURA DE SISTEMAS',
    'hero.title_start': 'Engenharia de sistemas com',
    'hero.title_highlight': 'rigor arquitetural',
    'hero.title_end': 'e foco em causa raiz.',
    'hero.lead': 'Desenvolvo softwares resilientes, migrações de dados em larga escala e infraestruturas de alta disponibilidade. Atuação tática onde a estabilidade do negócio não pode falhar.',
    'hero.cta_consulting': 'Solicitar Diagnóstico Técnico',
    'hero.cta_trajectory': 'Ver Trajetória',
    'hero.stat_years_value': '+5 anos',
    'hero.stat_years_label': 'Experiência em produção',
    'hero.stat_scale_value': 'Escala TB',
    'hero.stat_scale_label': 'Migrações e dados críticos',
    'hero.stat_focus_value': 'Causa raiz',
    'hero.stat_focus_label': 'Arquitetura pragmática',

    // Services / Operational Philosophy
    'services.tag': 'DIRETRIZES TÉCNICAS',
    'services.title': 'Filosofia Operacional & Especialidades',
    'services.desc': 'Como abordo desafios de engenharia para criar sistemas duráveis e de fácil manutenção.',
    'services.p1_title': 'Simplicidade Arquitetural',
    'services.p1_desc': 'Preferência por código legível, poucas dependências pesadas e separação rígida de responsabilidades antes de recorrer a soluções complexas.',
    'services.p2_title': 'Confiabilidade de Dados',
    'services.p2_desc': 'Modelagem sólida em bancos relacionais, normalização estratégica, otimização de consultas e rotinas rígidas de backup e integridade.',
    'services.p3_title': 'Migrações & Nuvem',
    'services.p3_desc': 'Planejamento e execução de transição de dados legados para GCP e Proxmox com checagem bit-a-bit e sem perda de histórico.',
    'services.p4_title': 'Resolução Definitiva',
    'services.p4_desc': 'Investigação profunda de incidentes e gargalos para neutralizar a causa raiz, evitando soluções paliativas temporárias.',

    // Projects
    'projects.tag': 'PORTFÓLIO TÉCNICO',
    'projects.title': 'Projetos Selecionados',
    'projects.desc': 'Estudos de caso e aplicações em produção real com foco em resiliência, baixa latência e total governança de dados.',
    'projects.all_cases_title': 'Todos os Casos.',
    'projects.all_cases_desc': 'Um registro técnico das transformações arquiteturais e produtos em que atuei diretamente.',
    'projects.problem': 'Problema',
    'projects.solution': 'Solução',
    'projects.impact': 'Impacto',
    'projects.open_tool': 'Abrir Ferramenta',
    'projects.open_tool_online': 'Abrir Ferramenta Online',
    'projects.github': 'GitHub',
    'projects.code_github': 'Código no GitHub',
    'projects.view_study': 'Ver Estudo Completo',
    'projects.toolkit_badge': 'Yrd Agile Toolkit',

    // Homelab Callout
    'homelab.callout_tag': 'INFRAESTRUTURA & EXPERIMENTAÇÃO',
    'homelab.callout_title': 'Ambiente Isolado de Testes e Validação',
    'homelab.callout_desc': 'Mantenho um laboratório de infraestrutura pessoal dedicado para testes de carga, tolerância a falhas e validação de containers antes de aplicar qualquer solução em ambientes de produção corporativos.',
    'homelab.callout_btn': 'Visão de Infraestrutura',

    // Homelab Page
    'homelab.page_tag': 'LABORATÓRIO PRIVADO · AMBIENTE DE VALIDAÇÃO',
    'homelab.page_title': 'Infraestrutura Soberana & Resiliência.',
    'homelab.page_lead': 'Mais do que um ambiente de hospedagem pessoal, este laboratório funciona como uma bancada de validação de engenharia. Nele, simulo e estresso cenários de alta disponibilidade, tolerância a falhas, integridade de dados e segurança de rede antes de propor tais padrões em ambientes corporativos.',
    'homelab.page_sublead': 'A arquitetura segue o princípio de mínima exposição e máxima eficiência: nenhum serviço expõe portas diretas na internet, todo o armazenamento é respaldado por ZFS com snapshots atômicos, e os processos rodam com isolamento rigoroso de recursos.',
    'homelab.stat_hypervisor_label': 'Hipervisor',
    'homelab.stat_hypervisor_val': 'Proxmox VE',
    'homelab.stat_hypervisor_sub': 'Debian Bare-Metal',
    'homelab.stat_storage_label': 'Armazenamento',
    'homelab.stat_storage_val': 'ZFS Mirror',
    'homelab.stat_storage_sub': 'Checksum & CoW',
    'homelab.stat_edge_label': 'Borda de Rede',
    'homelab.stat_edge_val': 'Zero-Trust',
    'homelab.stat_edge_sub': '0 portas WAN abertas',
    'homelab.stat_isolation_label': 'Isolamento',
    'homelab.stat_isolation_val': 'LXC Containers',
    'homelab.stat_isolation_sub': '<1% CPU overhead',
    'homelab.pillars_title': 'Pilares da Arquitetura Operacional',
    'homelab.why_title': 'Por que manter um laboratório de engenharia próprio?',
    'homelab.case_tag': 'Caso de Uso em Produção',
    'homelab.case_title': 'Veja o Retroyrd rodando sobre esta infraestrutura',
    'homelab.case_desc': 'Aplicação em tempo real escrita em Rust, consumindo menos de 20MB de memória e exposta com segurança sem nenhum IP residencial público.',
    'homelab.case_btn': 'Ver Estudo de Caso',

    // Recommendations
    'rec.tag': 'VALIDAÇÃO PROFISSIONAL',
    'rec.title': 'Recomendações de Pares & Liderança',
    'rec.linkedin': 'Ver no LinkedIn',

    // Consultation CTA
    'consulting.tag': 'DIAGNÓSTICO & CONSULTORIA TÉCNICA',
    'consulting.title': 'Vamos conversar sobre a sua arquitetura?',
    'consulting.desc': 'Disponível para diagnósticos técnicos de causa raiz, auditorias de desempenho e refatoração de bancos de dados relacionais, planejamento de migrações em massa ou consultoria de sustentação crítica.',
    'consulting.email_btn': 'Iniciar Contato por E-mail',
    'consulting.linkedin_btn': 'LinkedIn',
    'consulting.direct_email': 'Email direto:',
    'consulting.location': 'Atendimento: Remoto · Base Curitiba / PR',

    // Footer
    'footer.rights': '© 2026 Matheus Yared · Engenharia de Software & Arquitetura',
    'footer.github': 'GitHub',
    'footer.linkedin': 'LinkedIn',

    // Career / Trajetória
    'career.tag': 'HISTÓRICO TÉCNICO · 5+ ANOS DE CARREIRA',
    'career.title': 'Engenharia de Software & Soluções de Negócio.',
    'career.lead': 'Atuo na intersecção entre a Engenharia de Software e a Análise de Negócios. Minha carreira é pautada por resolver problemas complexos com uma visão agnóstica de tecnologia: acredito que a lógica, a integridade operacional e a arquitetura precedem a sintaxe.',
    'career.consultative_title': 'Abordagem Consultiva:',
    'career.consultative_desc': 'Possuo uma busca constante pela resolução definitiva de problemas (foco na causa raiz). Se existe um desafio de desempenho, integridade de dados ou processo ineficiente, meu foco é trazer a solução técnica mais estável e rentável para a operação do seu negócio.',
    'career.experience_title': 'Experiência Corporativa',
    'career.skills_title': 'Competências & Domínio Técnico',
    'career.education_title': 'Formação & Especializações',
  },
  en: {
    // Navigation
    'nav.projects': 'Projects',
    'nav.trajectory': 'Career',
    'nav.homelab': 'Homelab',
    'nav.available': 'Available',
    'nav.software_arch': 'Software & Architecture',

    // Breadcrumbs
    'crumbs.home': 'Home',
    'crumbs.projects': 'Projects',
    'crumbs.trajectory': 'Career',
    'crumbs.homelab': 'Homelab',

    // Hero
    'hero.overline': 'SOFTWARE ENGINEERING & SYSTEMS ARCHITECTURE',
    'hero.title_start': 'Systems engineering with',
    'hero.title_highlight': 'architectural rigor',
    'hero.title_end': 'and root-cause focus.',
    'hero.lead': 'I build resilient software, execute large-scale data migrations, and design high-availability infrastructure. Tactical execution where business stability is non-negotiable.',
    'hero.cta_consulting': 'Request Technical Diagnosis',
    'hero.cta_trajectory': 'View Career Journey',
    'hero.stat_years_value': '+5 years',
    'hero.stat_years_label': 'Production experience',
    'hero.stat_scale_value': 'TB Scale',
    'hero.stat_scale_label': 'Critical data migrations',
    'hero.stat_focus_value': 'Root cause',
    'hero.stat_focus_label': 'Pragmatic architecture',

    // Services / Operational Philosophy
    'services.tag': 'TECHNICAL GUIDELINES',
    'services.title': 'Operational Philosophy & Specialties',
    'services.desc': 'How I approach engineering challenges to build durable, maintainable software and infrastructure.',
    'services.p1_title': 'Architectural Simplicity',
    'services.p1_desc': 'A strong preference for readable code, minimal third-party dependencies, and strict separation of concerns before reaching for complex tooling.',
    'services.p2_title': 'Data Integrity & Reliability',
    'services.p2_desc': 'Solid relational database design, strategic normalization, query performance tuning, and disciplined zero-loss backup routines.',
    'services.p3_title': 'Migrations & Cloud',
    'services.p3_desc': 'Planning and executing legacy-to-cloud transitions (GCP & Proxmox) with bit-by-bit consistency verification and zero historical loss.',
    'services.p4_title': 'Root-Cause Resolution',
    'services.p4_desc': 'Deep-dive investigation into systemic bottlenecks to neutralize underlying flaws rather than applying fragile workarounds.',

    // Projects
    'projects.tag': 'TECHNICAL PORTFOLIO',
    'projects.title': 'Selected Projects',
    'projects.desc': 'Case studies and production systems built for resilience, low latency, and full data sovereignty.',
    'projects.all_cases_title': 'All Case Studies.',
    'projects.all_cases_desc': 'A technical record of architectural transformations and production systems I personally designed and engineered.',
    'projects.problem': 'Problem',
    'projects.solution': 'Solution',
    'projects.impact': 'Impact',
    'projects.open_tool': 'Open Tool',
    'projects.open_tool_online': 'Open Live Tool',
    'projects.github': 'GitHub',
    'projects.code_github': 'Source on GitHub',
    'projects.view_study': 'View Case Study',
    'projects.toolkit_badge': 'Yrd Agile Toolkit',

    // Homelab Callout
    'homelab.callout_tag': 'INFRASTRUCTURE & EXPERIMENTATION',
    'homelab.callout_title': 'Isolated Testing & Validation Environment',
    'homelab.callout_desc': 'I operate a private bare-metal infrastructure lab to stress test distributed systems, high availability, and containerized microservices before deploying to client production.',
    'homelab.callout_btn': 'Infrastructure Overview',

    // Homelab Page
    'homelab.page_tag': 'PRIVATE LAB · VALIDATION ENVIRONMENT',
    'homelab.page_title': 'Sovereign Infrastructure & Resilience.',
    'homelab.page_lead': 'More than personal hosting, this lab serves as an engineering testbed. Here, I simulate and stress test high-availability failovers, fault tolerance, data integrity, and network security before applying these patterns in corporate architectures.',
    'homelab.page_sublead': 'The architecture adheres to minimal attack surface and maximum efficiency: no services expose public ports directly, all storage is safeguarded by ZFS with atomic snapshots, and workloads run with strict cgroup isolation.',
    'homelab.stat_hypervisor_label': 'Hypervisor',
    'homelab.stat_hypervisor_val': 'Proxmox VE',
    'homelab.stat_hypervisor_sub': 'Debian Bare-Metal',
    'homelab.stat_storage_label': 'Storage',
    'homelab.stat_storage_val': 'ZFS Mirror',
    'homelab.stat_storage_sub': 'Checksum & CoW',
    'homelab.stat_edge_label': 'Network Edge',
    'homelab.stat_edge_val': 'Zero-Trust',
    'homelab.stat_edge_sub': '0 open WAN ports',
    'homelab.stat_isolation_label': 'Isolation',
    'homelab.stat_isolation_val': 'LXC Containers',
    'homelab.stat_isolation_sub': '<1% CPU overhead',
    'homelab.pillars_title': 'Operational Architecture Pillars',
    'homelab.why_title': 'Why maintain a private engineering testbed?',
    'homelab.case_tag': 'Production Use Case',
    'homelab.case_title': 'See RetroYrd running on this infrastructure',
    'homelab.case_desc': 'Real-time platform built in Rust, using less than 20MB of memory and securely exposed with zero open residential ports.',
    'homelab.case_btn': 'View Case Study',

    // Recommendations
    'rec.tag': 'PROFESSIONAL VALIDATION',
    'rec.title': 'Peer & Leadership Endorsements',
    'rec.linkedin': 'View on LinkedIn',

    // Consultation CTA
    'consulting.tag': 'TECHNICAL ADVISORY & DIAGNOSIS',
    'consulting.title': "Let's discuss your system architecture",
    'consulting.desc': 'Available for root-cause bottleneck diagnosis, relational database performance tuning, large-scale migration roadmaps, or critical production support.',
    'consulting.email_btn': 'Start Conversation via Email',
    'consulting.linkedin_btn': 'LinkedIn',
    'consulting.direct_email': 'Direct email:',
    'consulting.location': 'Engagement: Remote · Base in Curitiba, Brazil',

    // Footer
    'footer.rights': '© 2026 Matheus Yared · Software Engineering & Architecture',
    'footer.github': 'GitHub',
    'footer.linkedin': 'LinkedIn',

    // Career / Trajetória
    'career.tag': 'CAREER RECORD · 5+ YEARS IN PRODUCTION',
    'career.title': 'Software Engineering & Business Solutions.',
    'career.lead': 'I operate at the intersection of Software Engineering and Business Analysis. My career centers on solving complex operational challenges with a technology-agnostic mindset: logic, system integrity, and architecture always precede syntax.',
    'career.consultative_title': 'Consultative Mindset:',
    'career.consultative_desc': 'A disciplined commitment to root-cause problem resolution. When a business faces performance bottlenecks, data anomalies, or fragile workflows, my focus is delivering the most stable, cost-effective technical remedy.',
    'career.experience_title': 'Enterprise Experience',
    'career.skills_title': 'Technical Competencies & Domain Mastery',
    'career.education_title': 'Education & Certifications',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['pt']): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  // Strip leading locale (/pt or /en) if present
  const cleaned = currentPath.replace(/^\/(pt|en)(\/|$)/, '/');
  const path = cleaned === '/' ? '' : cleaned;
  return `/${targetLang}${path}`;
}

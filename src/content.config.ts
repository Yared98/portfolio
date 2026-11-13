import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    problem: z.string(),
    solution: z.string(),
    impact: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    brandColor: z.enum(['indigo', 'amber', 'sky', 'rose', 'emerald', 'zinc']).optional(),
    toolkit: z.boolean().optional(),
    lang: z.enum(['pt', 'en']).default('pt'),
  }),
});

// Artigos: textos técnicos e notas de projetos pessoais.
const articlesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    /** Rascunhos aparecem só em `astro dev`. */
    draft: z.boolean().default(false),
    lang: z.enum(['pt', 'en']).default('pt'),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'articles': articlesCollection,
};

import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Article = CollectionEntry<'articles'>;

/** "pt/meu-artigo" → "meu-artigo" */
export const articleSlug = (a: Article) => a.id.split('/').pop() as string;

export const articleLang = (a: Article): Lang => (a.id.includes('/') ? (a.id.split('/')[0] as Lang) : a.data.lang);

/** Artigos publicados de um idioma, do mais recente ao mais antigo. Rascunhos só em dev. */
export async function getArticles(lang: Lang): Promise<Article[]> {
  const all = await getCollection('articles', ({ data }) => import.meta.env.DEV || !data.draft);
  return all
    .filter((a) => articleLang(a) === lang)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' });

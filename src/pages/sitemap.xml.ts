import type { APIRoute } from 'astro';
import { languages, routes } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const urls = languages.flatMap((language) => routes.map((slug) => new URL(`/${language}/${slug ? `${slug}/` : ''}`, site)));
  const entries = urls.map((url) => `<url><loc>${url.href}</loc></url>`).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' }
  });
};

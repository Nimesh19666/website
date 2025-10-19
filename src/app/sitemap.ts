import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://nuopod.com'; 

  const pages = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/faq',
  ];

  return pages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '/' ? 1 : 0.8, 
  }));
}
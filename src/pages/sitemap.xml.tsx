// TODO: post and project data mapping
// @ts-nocheck

import { GetServerSideProps } from 'next';
import { format, parseISO } from 'date-fns';

import { getPostIndex, getProjectIndex } from '@/content/helpers';

export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
  ctx.res.setHeader('Content-Type', 'text/xml');
  const xml = await generateSitemap();
  ctx.res.write(xml);
  ctx.res.end();

  return {
    props: {},
  };
};

async function generateSitemap(): Promise<string> {
  const projects = await getProjectIndex();
  const posts = await getPostIndex();

  const baseUrl = 'https://www.gardenofkarl.com';

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${projects?.data?.attributes?.projects?.data
      ?.map(({ attributes }) => {
        return `<url>
      <loc>${baseUrl}/${attributes?.slug}</loc>
      <lastmod>${format(parseISO(attributes?.updatedAt), 'MMM d, yyyy')}</lastmod>
    </url>`;
      })
      .join('')}
    ${posts?.data?.attributes?.posts?.data
      ?.map(({ attributes }) => {
        return `<url>
      <loc>${baseUrl}/${attributes?.slug}</loc>
      <lastmod>${format(parseISO(attributes?.updatedAt), 'MMM d, yyyy')}</lastmod>
    </url>`;
      })
      .join('')}
  </urlset>`;
}

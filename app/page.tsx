import type { Metadata } from 'next';
import Link from 'next/link';

import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import news from '@/data/news';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
};

function formatNewsDate(date: string) {
  const [year, month] = date.split('-');
  return `${month} / ${year}`;
}

export default function HomePage() {
  return (
    <PageWrapper mainClassName="page-main--hero">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />
      <section
        className="home-writing home-news"
        aria-labelledby="home-news-title"
      >
        <div className="home-writing-header">
          <div>
            <span className="home-section-kicker">Academic updates</span>
            <h2 id="home-news-title">Recent News</h2>
          </div>
          <Link href="/news/" className="home-writing-all">
            View all
          </Link>
        </div>
        <ul className="home-news-list">
          {news.slice(0, 5).map((item) => (
            <li key={`${item.date}-${item.text}`}>
              <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
}

import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import news from '@/data/news';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'News',
  description: "Recent academic news from Kaidi Xu's research group.",
  path: '/news/',
});

function monthName(date: string) {
  return new Date(`${date}-01T12:00:00`).toLocaleDateString('en-US', {
    month: 'short',
  });
}

export default function NewsPage() {
  const years = [...new Set(news.map((item) => item.date.slice(0, 4)))];
  return (
    <PageWrapper>
      <section className="news-page">
        <header className="projects-header">
          <h1 className="page-title">News</h1>
        </header>
        {years.map((year) => (
          <section className="publication-year" key={year}>
            <h2>{year}</h2>
            <ul className="home-news-list">
              {news
                .filter((item) => item.date.startsWith(year))
                .map((item) => (
                  <li key={`${item.date}-${item.text}`}>
                    <time dateTime={item.date}>{monthName(item.date)}</time>
                    <span>{item.text}</span>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </section>
    </PageWrapper>
  );
}

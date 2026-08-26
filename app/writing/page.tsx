import type { Metadata } from 'next';

import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import publications from '@/data/publications';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';

const PUBLICATIONS_URL = `${SITE_URL}/writing/`;
const DESCRIPTION =
  'Selected publications by Kaidi Xu in trustworthy AI, formal verification, adversarial machine learning, and neural network verification.';
export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Publications',
    description: DESCRIPTION,
    path: '/writing/',
  }),
  alternates: {
    canonical: `${SITE_URL}/writing/`,
    types: { 'application/rss+xml': '/feed.xml' },
  },
};

export default function PublicationsPage() {
  const years = [...new Set(publications.map((paper) => paper.year))];
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: PUBLICATIONS_URL,
            name: 'Publications',
            description: DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(PUBLICATIONS_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Publications', url: PUBLICATIONS_URL },
          ]),
        ]}
      />
      <article className="writing-page">
        <header className="writing-header">
          <div className="writing-header-row">
            <h1 className="page-title">Publications</h1>
            <a
              href="https://scholar.google.com/citations?hl=en&user=lYK0wlsAAAAJ"
              className="writing-rss-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar ↗
            </a>
          </div>
        </header>
        <section className="writing-group">
          {years.map((year) => (
            <section key={year} className="publication-year">
              <h2 className="writing-section-label">{year}</h2>
              <div className="writing-list">
                {publications
                  .filter((paper) => paper.year === year)
                  .map((paper) => (
                    <article
                      className="writing-item publication-item"
                      key={paper.title}
                    >
                      <time className="writing-date" dateTime={paper.date}>
                        {paper.month}
                      </time>
                      <div>
                        <h3 className="writing-title">{paper.title}</h3>
                        <p className="writing-description">{paper.authors}</p>
                        <p className="publication-venue">{paper.venue}</p>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </section>
      </article>
    </PageWrapper>
  );
}

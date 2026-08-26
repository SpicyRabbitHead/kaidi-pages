import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HomePage from '../page';
import PublicationsPage from '../writing/page';

describe('academic information architecture', () => {
  it('surfaces the five newest news items on the homepage', () => {
    render(<HomePage />);
    const section = screen.getByRole('region', { name: 'Recent News' });
    expect(section.querySelectorAll('.home-news-list li')).toHaveLength(5);
    expect(
      screen.getByRole('heading', { name: 'Open Positions' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View all' })).toHaveAttribute(
      'href',
      '/news',
    );
  });
  it('groups publications by year and links Google Scholar', () => {
    const { container } = render(<PublicationsPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Publications' }),
    ).toBeInTheDocument();
    expect(container.querySelectorAll('.publication-item')).toHaveLength(4);
    expect(
      screen.getAllByRole('link', { name: /Google Scholar/ })[0],
    ).toHaveAttribute(
      'href',
      'https://scholar.google.com/citations?hl=en&user=lYK0wlsAAAAJ',
    );
  });
});

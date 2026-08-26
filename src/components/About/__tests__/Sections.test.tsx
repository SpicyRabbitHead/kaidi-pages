import { render, screen } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '@/data/about';
import AboutContent from '../Sections';

function getActualSectionTitles(markdown: string) {
  return Array.from(markdown.matchAll(/^# (.+)$/gm))
    .map((match) => match[1])
    .filter((title) => title !== 'Intro');
}

describe('AboutContent', () => {
  it('renders intro copy without an Intro heading', () => {
    render(
      <AboutContent
        markdown={
          '# Intro\n\nHello from the intro.\n\n# Some History\n\n- Built a thing.'
        }
      />,
    );

    expect(screen.getByText('Hello from the intro.')).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Intro' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Some History' }),
    ).toBeInTheDocument();
  });

  it('assigns section variants for compact and links sections', () => {
    const { container } = render(
      <AboutContent
        markdown={
          '# Intro\n\nLead paragraph.\n\n# I Like\n\n- Running\n\n# Websites from People I Admire\n\n- [Example](https://example.com)'
        }
      />,
    );

    const sections = container.querySelectorAll('.about-section');

    expect(sections).toHaveLength(2);
    expect(sections[0]).toHaveClass('about-section--compact');
    expect(sections[1]).toHaveClass('about-section--links');
  });

  it('adds stable heading ids for deep links', () => {
    render(
      <AboutContent
        markdown={
          '# Intro\n\nLead paragraph.\n\n# Some History\n\n- Built a thing.\n\n# Open Positions\n\n- Went somewhere.'
        }
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Some History' }),
    ).toHaveAttribute('id', 'some-history');
    expect(
      screen.getByRole('heading', { name: 'Open Positions' }),
    ).toHaveAttribute('id', 'open-positions');
  });

  it('does not render section navigation when the real about markdown has no sections', () => {
    const sectionTitles = getActualSectionTitles(aboutMarkdown);
    const { container } = render(<AboutContent markdown={aboutMarkdown} />);

    expect(sectionTitles).toEqual([]);
    expect(
      screen.queryByRole('navigation', { name: 'About sections' }),
    ).not.toBeInTheDocument();
    expect(container.querySelectorAll('.about-section')).toHaveLength(0);
  });

  it('does not emit old Open Positions anchors in static about markup', () => {
    const html = renderToStaticMarkup(
      <AboutContent markdown={aboutMarkdown} />,
    );

    expect(html).not.toContain('href="#open-positions"');
    expect(html).not.toContain('id="open-positions"');
  });

  it('does not expose hash navigation when the real about markdown has no sections', () => {
    window.history.replaceState({}, '', '/about/');
    render(<AboutContent markdown={aboutMarkdown} />);

    expect(
      screen.queryByRole('navigation', { name: 'About sections' }),
    ).not.toBeInTheDocument();
    expect(window.location.hash).toBe('');
  });
});

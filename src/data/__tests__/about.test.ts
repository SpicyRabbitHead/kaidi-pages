import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('contains the academic biography', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('City University of Hong Kong');
    expect(aboutMarkdown).toContain('Trustworthy AI');
    expect(aboutMarkdown).toContain('Northeastern University');
  });
  it('keeps recruiting information on the homepage instead of biography', () => {
    expect(aboutMarkdown).not.toContain('# Open Positions');
    expect(aboutMarkdown).not.toContain('Two postdocs and five PhD positions');
  });
  it('contains valid markdown links', () => {
    expect(aboutMarkdown.match(/\[.+?\]\(.+?\)/g)).not.toBeNull();
  });
  it('contains properly formatted headers', () => {
    expect(aboutMarkdown.match(/^#+ .+$/gm)).not.toBeNull();
  });
});

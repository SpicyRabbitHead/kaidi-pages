import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders Kaidi Xu and academic appointments', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Kaidi Xu',
    );
    expect(
      screen.getByRole('link', { name: /department of data science/i }),
    ).toHaveAttribute('href', 'https://www.ds.cityu.edu.hk/');
    expect(
      screen.getByRole('link', { name: /h kai-sci|hong kong institute/i }),
    ).toHaveAttribute('href', 'https://www.cityu.edu.hk/hkai-sci/');
  });
  it('describes trustworthy AI research and primary CTAs', () => {
    render(<Hero />);
    expect(screen.getByText(/Trustworthy AI/)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Open Positions' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'email' })).toHaveAttribute(
      'href',
      'mailto:kaidixu@cityu.edu.hk',
    );
    expect(screen.getByRole('link', { name: /biography/i })).toHaveAttribute(
      'href',
      '/about',
    );
    expect(screen.getByRole('link', { name: /publications/i })).toHaveAttribute(
      'href',
      '/writing',
    );
  });
  it('keeps personal telemetry off the homepage', () => {
    render(<Hero />);
    expect(screen.queryByText('Countries visited')).not.toBeInTheDocument();
  });
  it('renders the ruled background', () => {
    render(<Hero />);
    expect(document.querySelector('.hero-bg')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });
});

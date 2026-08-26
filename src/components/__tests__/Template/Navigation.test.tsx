import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Navigation from '../../Template/Navigation';

const mockPathname = vi.fn();
vi.mock('next/navigation', () => ({ usePathname: () => mockPathname() }));

describe('Navigation', () => {
  beforeEach(() => {
    mockPathname.mockReturnValue('/');
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });
  it('renders the Kaidi Xu home link', () => {
    render(<Navigation />);
    expect(
      screen.getByRole('link', { name: /kaidi xu.*home/i }),
    ).toHaveAttribute('href', '/');
  });
  it('renders primary routes including all news', () => {
    render(<Navigation />);
    for (const label of [
      'About',
      'Publications',
      'Group',
      'Teaching',
      'Contact',
      'All News',
    ])
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'Stats' }),
    ).not.toBeInTheDocument();
  });
});

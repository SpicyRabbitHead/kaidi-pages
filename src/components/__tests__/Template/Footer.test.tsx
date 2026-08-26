import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from '../../Template/Footer';

describe('Footer', () => {
  it('renders Kaidi identity and role', () => {
    render(<Footer />);
    expect(screen.getByText('Kaidi Xu')).toBeInTheDocument();
    expect(
      screen.getByText(/Associate Professor, Department of Data Science/),
    ).toBeInTheDocument();
  });
  it('renders academic navigation links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Publications' })).toHaveAttribute(
      'href',
      '/writing',
    );
    expect(screen.getByRole('link', { name: 'Group' })).toHaveAttribute(
      'href',
      '/projects',
    );
    expect(screen.getByRole('link', { name: 'Teaching' })).toHaveAttribute(
      'href',
      '/teaching',
    );
  });
});

import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import members from '@/data/members';
import MembersPage from '../members/page';

describe('members page', () => {
  it('renders every member as an external homepage link', () => {
    const { container } = render(<MembersPage />);
    const links = container.querySelectorAll('.member-card-link');

    expect(links).toHaveLength(members.length);
    members.forEach((member) => {
      const link = screen.getByRole('link', {
        name: member.name + "'s homepage",
      });
      expect(link).toHaveAttribute('href', member.homepage);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('keeps portrait alt text paired with each member name', () => {
    const { container } = render(<MembersPage />);
    const cards = container.querySelectorAll<HTMLElement>('.member-card');

    cards.forEach((card, index) => {
      expect(
        within(card).getByAltText('Portrait of ' + members[index].name),
      ).toBeInTheDocument();
    });
  });
});

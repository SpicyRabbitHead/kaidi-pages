import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import members from '@/data/members';
import MembersPage from '../members/page';

describe('members page', () => {
  it('renders every member in the correct identity group', () => {
    const { container } = render(<MembersPage />);
    const sections = container.querySelectorAll('.members-section');

    expect(sections).toHaveLength(4);
    expect(
      screen.getByRole('heading', { name: 'Postdocs' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'PhD Students' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: "Master's Students" }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Alumni' })).toBeInTheDocument();

    const expectedGroups = {
      postdoc: 'Postdocs',
      phd: 'PhD Students',
      master: "Master's Students",
      alumni: 'Alumni',
    } as const;

    members.forEach((member) => {
      const group = screen.getByRole('region', {
        name: expectedGroups[member.category],
      });
      const link = within(group).getByRole('link', { name: member.name });
      expect(link).toHaveAttribute('href', member.homepage);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      const memberCard = [
        ...group.querySelectorAll<HTMLElement>('.member-card'),
      ].find((candidate) => candidate.textContent?.includes(member.name));
      expect(memberCard).toBeDefined();
      expect(
        within(memberCard as HTMLElement).getByText(
          member.position + ' · ' + member.tenure,
        ),
      ).toBeInTheDocument();
    });

    Object.entries(expectedGroups).forEach(([category, title]) => {
      const group = screen.getByRole('region', { name: title });
      const groupMembers = members.filter(
        (member) => member.category === category,
      );

      if (groupMembers.length === 0) {
        expect(
          within(group).getByText('No members listed yet.'),
        ).toBeInTheDocument();
      } else {
        expect(group.querySelectorAll('.member-card')).toHaveLength(
          groupMembers.length,
        );
      }
    });
  });

  it('keeps portrait alt text paired with each member name', () => {
    const { container } = render(<MembersPage />);
    const cards = container.querySelectorAll<HTMLElement>('.member-card');

    members.forEach((member) => {
      const card = [...cards].find((candidate) =>
        candidate.textContent?.includes(member.name),
      );

      expect(card).toBeDefined();
      expect(
        within(card as HTMLElement).getByAltText('Portrait of ' + member.name),
      ).toBeInTheDocument();
    });
  });
});

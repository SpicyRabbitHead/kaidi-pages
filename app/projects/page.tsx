import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import { groupSections } from '@/data/group';
import { createPageMetadata } from '@/lib/metadata';

const DESCRIPTION =
  'Kaidi Xu research group, current positions, alumni, and recruitment information.';
export const metadata: Metadata = createPageMetadata({
  title: 'Group',
  description: DESCRIPTION,
  path: '/projects/',
});

export default function GroupPage() {
  return (
    <PageWrapper>
      <section className="projects-page group-page">
        <header className="projects-header">
          <h1 className="page-title">Group</h1>
          <p className="page-subtitle">
            Research group and recruitment information.
          </p>
        </header>
        {groupSections.length > 0 ? (
          groupSections.map((section) => (
            <section className="people-section" key={section.title}>
              <h2 className="projects-section-title">{section.title}</h2>
              <div className="member-list">
                {section.members.map((member) => (
                  <article className="member" key={member.name}>
                    <div>
                      <h3>{member.name}</h3>
                      <p className="member-meta">
                        {member.role} · Joined {member.joined}
                      </p>
                      <p>{member.research}.</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="group-empty">
            Member profiles will be added as they are confirmed.
          </p>
        )}
        <section className="section recruiting">
          <h2>Join the group</h2>
          <p>
            We are seeking highly motivated students and postdoctoral
            researchers with strong backgrounds in deep learning. Fully
            supported positions are available for Spring and Fall 2027.
          </p>
        </section>
      </section>
    </PageWrapper>
  );
}

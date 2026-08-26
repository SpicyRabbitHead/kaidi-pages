import type { Metadata } from 'next';

import MemberCard from '@/components/Members/MemberCard';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import members from '@/data/members';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';

const MEMBERS_URL = SITE_URL + '/members/';
const MEMBERS_DESCRIPTION =
  'A directory of members, with links to their personal homepages.';

const groups = [
  { key: 'postdoc', title: 'Postdocs', role: 'Postdoctoral Researcher' },
  { key: 'phd', title: 'PhD Students', role: 'PhD Student' },
  { key: 'master', title: "Master's Students", role: "Master's Student" },
  { key: 'alumni', title: 'Alumni', role: 'Alumni' },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: 'Members',
  description: MEMBERS_DESCRIPTION,
  path: '/members/',
});

export default function MembersPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: MEMBERS_URL,
            name: 'Members',
            description: MEMBERS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(MEMBERS_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Members', url: MEMBERS_URL },
          ]),
        ]}
      />
      <section className="members-page" aria-labelledby="members-title">
        <header className="members-header">
          <h1 id="members-title" className="page-title">
            Members
          </h1>
        </header>

        {groups.map((group) => {
          const groupMembers = members.filter(
            (member) => member.category === group.key,
          );

          if (groupMembers.length === 0) return null;

          return (
            <section
              className="members-section"
              aria-labelledby={'members-' + group.key}
              key={group.key}
            >
              <h2 id={'members-' + group.key}>{group.title}</h2>
              <div className="members-list">
                {groupMembers.map((member) => (
                  <MemberCard
                    key={member.homepage}
                    member={member}
                    role={group.role}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </PageWrapper>
  );
}

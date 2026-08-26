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
          <div>
            <span className="members-kicker">People / 05</span>
            <h1 id="members-title" className="page-title">
              Members
            </h1>
          </div>
          <p className="members-intro">
            A small constellation of people and the places they build on the
            web.
          </p>
        </header>
        <div className="members-grid">
          {members.map((member, index) => (
            <MemberCard key={member.homepage} member={member} index={index} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

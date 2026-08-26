import Image from 'next/image';

import type { Member } from '@/data/members';
import { withBasePath } from '@/lib/utils';

interface MemberCardProps {
  member: Member;
  role: string;
}

export default function MemberCard({ member, role }: MemberCardProps) {
  return (
    <article className="member-card">
      <Image
        className="member-card-image"
        src={withBasePath(member.image)}
        alt={'Portrait of ' + member.name}
        width={member.width}
        height={member.height}
        sizes="96px"
      />
      <div className="member-card-content">
        <h3 className="member-card-name">
          <a href={member.homepage} target="_blank" rel="noopener noreferrer">
            {member.name}
          </a>
        </h3>
        <p className="member-card-meta">{role}</p>
        <a
          className="member-card-homepage"
          href={member.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal homepage <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}

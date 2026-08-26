import Image from 'next/image';

import type { Member } from '@/data/members';
import { withBasePath } from '@/lib/utils';

interface MemberCardProps {
  member: Member;
  index: number;
}

export default function MemberCard({ member, index }: MemberCardProps) {
  return (
    <article className="member-card">
      <a
        className="member-card-link"
        href={member.homepage}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={member.name + "'s homepage"}
      >
        <div className="member-card-image">
          <Image
            src={withBasePath(member.image)}
            alt={'Portrait of ' + member.name}
            width={member.width}
            height={member.height}
            sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 33vw"
          />
        </div>
        <div className="member-card-content">
          <div className="member-card-heading">
            <span className="member-card-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="member-card-name">{member.name}</h2>
            <span className="member-card-affordance" aria-hidden="true">
              ↗
            </span>
          </div>
          <span className="member-card-homepage">
            Visit homepage<span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </a>
    </article>
  );
}

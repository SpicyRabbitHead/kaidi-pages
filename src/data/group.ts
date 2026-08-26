export interface GroupMember {
  name: string;
  role: string;
  joined: string;
  research: string;
}

export interface GroupSection {
  title: string;
  members: GroupMember[];
}

// The source page labels its sample member cards as demo content. Keep the
// group page honest until verified student and alumni profiles are available.
export const groupSections: GroupSection[] = [];

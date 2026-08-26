import { AUTHOR_NAME } from '@/lib/utils';

export interface Route {
  label: string;
  path: string;
  index?: boolean;
  primary?: boolean;
}

const routes: Route[] = [
  { index: true, label: AUTHOR_NAME, path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Publications', path: '/writing' },
  { label: 'Group', path: '/projects' },
  { label: 'Teaching', path: '/teaching' },
  { label: 'Contact', path: '/contact' },
  { label: 'All News', path: '/news' },
  { label: 'Stats', path: '/stats', primary: false },
];

export default routes;

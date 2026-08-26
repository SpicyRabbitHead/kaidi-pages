import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
import { faBuilding } from '@fortawesome/free-regular-svg-icons/faBuilding';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import profile from './profile.json';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://scholar.google.com/citations?hl=en&user=lYK0wlsAAAAJ',
    label: 'Google Scholar',
    icon: faGoogleScholar,
  },
  {
    link: 'https://github.com/Verified-Intelligence',
    label: 'GitHub',
    icon: faGithub,
  },
  {
    link: 'https://www.ds.cityu.edu.hk/',
    label: 'CityU Data Science',
    icon: faBuilding,
  },
  {
    link: 'https://www.cityu.edu.hk/hkai-sci/',
    label: 'HKAI-Sci',
    icon: faBuilding,
  },
  { link: `mailto:${profile.email}`, label: 'Email', icon: faEnvelope },
];

export default data;

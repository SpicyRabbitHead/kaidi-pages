/** Shared site constants and formatting helpers. */
import profile from '@/data/profile.json';

export const SITE_URL = 'https://spicyrabbithead.github.io/kaidi-pages';
export const SITE_BASE_PATH = '/kaidi-pages';
export const AUTHOR_NAME = profile.name;
export const TWITTER_HANDLE = '@KaidiXu';
export const SITE_IMAGE_PATH = '/images/kaidi_photo_2025.jpg';
export const SITE_IMAGE_DIMENSIONS = { width: 3623, height: 3623 } as const;
export const SHARE_IMAGE_PATH = '/og.png';
export const SHARE_IMAGE_DIMENSIONS = { width: 1200, height: 630 } as const;
export const SITE_DESCRIPTION =
  'Kaidi Xu is an Associate Professor at City University of Hong Kong and Deputy Director of HKAI-Sci, researching trustworthy AI, formal verification, adversarial attacks, and uncertainty quantification.';
export const PROJECT_IMAGE = { width: 600, height: 400 } as const;
export const MAX_COMPETENCY = 5;

export function withBasePath(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (path === SITE_BASE_PATH || path.startsWith(`${SITE_BASE_PATH}/`))
    return path;
  return SITE_BASE_PATH + path;
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

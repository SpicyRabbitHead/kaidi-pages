import { AUTHOR_NAME, withBasePath } from '@/lib/utils';

interface ThemePortraitProps {
  width: number;
  height: number;
  priority?: boolean;
}

export default function ThemePortrait({
  width,
  height,
  priority = false,
}: ThemePortraitProps) {
  return (
    <span className="theme-portrait">
      {/* biome-ignore lint/performance/noImgElement: Native img keeps static export lightweight. */}
      <img
        src={withBasePath('/images/kaidi_photo_2025.jpg')}
        alt={AUTHOR_NAME}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </span>
  );
}

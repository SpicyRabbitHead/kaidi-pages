import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>
          <div className="hero-appointments">
            <p>
              <strong>Associate Professor</strong>
              <a href="https://www.ds.cityu.edu.hk/">
                Department of Data Science, City University of Hong Kong
              </a>
            </p>
            <p>
              <strong>Deputy Director</strong>
              <a href="https://www.cityu.edu.hk/hkai-sci/">
                The Hong Kong Institute of AI for Science (HKAI-Sci)
              </a>
            </p>
          </div>
          <p className="hero-tagline">
            My research focuses on{' '}
            <Link href="/about/" className="hero-highlight">
              Trustworthy AI
            </Link>
            , including formal verification, practical adversarial attacks, and
            uncertainty quantification.
          </p>
          <div className="hero-cta">
            <Link href="/about/" className="button">
              Biography
            </Link>
            <Link href="/writing/" className="hero-resume-link">
              Publications <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>
      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}

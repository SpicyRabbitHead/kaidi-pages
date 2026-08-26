import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import teaching from '@/data/teaching';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Teaching',
  description: 'Courses taught by Kaidi Xu at City University of Hong Kong.',
  path: '/teaching/',
});

export default function TeachingPage() {
  return (
    <PageWrapper>
      <section className="teaching-page">
        <header className="projects-header">
          <h1 className="page-title">Teaching</h1>
        </header>
        <section className="teaching-list">
          {teaching.map((course) => (
            <article className="teaching-item" key={course.code}>
              <time className="teaching-term">
                {course.term}
                <span>{course.semester}</span>
              </time>
              <div>
                <span className="course-code">{course.code}</span>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>
              {course.syllabus ? (
                <a href={course.syllabus}>Syllabus</a>
              ) : (
                <span className="teaching-placeholder">
                  Syllabus unavailable
                </span>
              )}
            </article>
          ))}
        </section>
      </section>
    </PageWrapper>
  );
}

export interface TeachingItem {
  term: string;
  semester: string;
  code: string;
  title: string;
  description: string;
  syllabus?: string;
}

const teaching: TeachingItem[] = [
  {
    term: '2026–27',
    semester: 'Semester A',
    code: 'CS486',
    title: 'Robust Machine Learning',
    description:
      'Adversarial examples, robustness, certification, and reliable deployment.',
  },
  {
    term: '2025–26',
    semester: 'Semester B',
    code: 'CS613',
    title: 'Machine Learning',
    description:
      'Foundations, algorithms, optimization, and modern applications.',
  },
  {
    term: '2025–26',
    semester: 'Semester A',
    code: 'CS616',
    title: 'Robust Deep Learning',
    description:
      'Advanced topics in attacks, defenses, and neural network verification.',
  },
];

export default teaching;

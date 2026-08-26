export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Robust Machine Learning',
    number: 'CS486',
    link: 'https://www.ds.cityu.edu.hk/',
    university: 'City University of Hong Kong · 2026–27 Semester A',
  },
  {
    title: 'Machine Learning',
    number: 'CS613',
    link: 'https://www.ds.cityu.edu.hk/',
    university: 'City University of Hong Kong · 2025–26 Semester B',
  },
  {
    title: 'Robust Deep Learning',
    number: 'CS616',
    link: 'https://www.ds.cityu.edu.hk/',
    university: 'City University of Hong Kong · 2025–26 Semester A',
  },
];

export default courses;

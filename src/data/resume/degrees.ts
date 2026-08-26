export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Northeastern University',
    degree: 'Ph.D.',
    link: 'https://www.northeastern.edu/',
    year: 2021,
  },
  {
    school: 'University of Florida',
    degree: 'M.S.',
    link: 'https://www.ufl.edu/',
    year: 2017,
  },
];

export default degrees;

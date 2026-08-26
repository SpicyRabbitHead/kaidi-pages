export interface NewsItem {
  date: string;
  text: string;
}

const news: NewsItem[] = [
  { date: '2026-05', text: 'Two papers were accepted (2× ICML)!' },
  {
    date: '2026-04',
    text: 'Three papers were accepted (1× ACL, 1× AIED, 1× ICDM)!',
  },
  {
    date: '2026-03',
    text: 'I am serving as an Area Chair for NeurIPS and COLM 2026.',
  },
  {
    date: '2026-01',
    text: 'Five papers were accepted (3× ICLR, 1× EACL, 1× CPAL)!',
  },
  {
    date: '2025-11',
    text: 'Two papers were accepted to AAAI 2026 (1 oral, 1 poster)!',
  },
  { date: '2025-10', text: 'I am serving as an Area Chair for ARR OCT 2026!' },
  { date: '2025-08', text: 'I am serving as an Area Chair for ICLR 2026!' },
  {
    date: '2025-08',
    text: 'Four papers were accepted (1× ACM MM, 1× ICCV, 2× EMNLP).',
  },
  { date: '2025-05', text: 'Three papers were accepted (1× ICML, 2× ACL)!' },
  { date: '2025-03', text: 'I am serving as an Area Chair for NeurIPS 2025!' },
  {
    date: '2024-09',
    text: 'Four papers were accepted (1× NDSS, 1× EMNLP, 2× NeurIPS)!',
  },
  {
    date: '2024-07',
    text: 'Three papers were accepted (1× ECCV, 1× ACM MM, 1× RSS)',
  },
  {
    date: '2024-05',
    text: 'Received the Faculty Research Excellence Award from CCI at Drexel.',
  },
  {
    date: '2024-03',
    text: 'Received an NSF grant on decision-embedded deep learning for transit systems.',
  },
];

export default news;

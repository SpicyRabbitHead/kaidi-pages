export interface Publication {
  year: number;
  month: string;
  date: string;
  title: string;
  authors: string;
  venue: string;
  links?: { label: string; url: string }[];
}

const publications: Publication[] = [
  {
    year: 2023,
    month: 'July',
    date: '2023-07',
    title: 'Are diffusion models vulnerable to membership inference attacks?',
    authors: 'Jinhao Duan, Fei Kong, Shiqi Wang, Xiaoshuang Shi, Kaidi Xu',
    venue: 'ICML',
  },
  {
    year: 2023,
    month: 'November',
    date: '2023-11',
    title: 'Semantic adversarial attacks via diffusion models',
    authors:
      'Chenan Wang, Jinhao Duan, Chaowei Xiao, Edward Kim, Matthew Stamm, Kaidi Xu',
    venue: 'BMVC',
  },
  {
    year: 2022,
    month: 'December',
    date: '2022-12',
    title:
      'General cutting planes for bound-propagation-based neural network verification',
    authors: 'Huan Zhang, Shiqi Wang, Kaidi Xu, et al.',
    venue: 'NeurIPS',
  },
  {
    year: 2022,
    month: 'July',
    date: '2022-07',
    title:
      'A branch and bound framework for stronger adversarial attacks of ReLU networks',
    authors: 'Huan Zhang, Shiqi Wang, Kaidi Xu, et al.',
    venue: 'ICML',
  },
];

export default publications;

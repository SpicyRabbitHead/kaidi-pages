export interface Skill {
  title: string;
  competency: number;
  category: string[];
}
export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  ['Trustworthy AI', 'Research'],
  ['Formal Verification', 'Research'],
  ['Adversarial Attacks', 'Research'],
  ['Uncertainty Quantification', 'Research'],
  ['Robust Machine Learning', 'Research'],
  ['Neural Network Verification', 'Research'],
  ['Machine Learning', 'Methods'],
  ['Computer Vision', 'Methods'],
  ['Natural Language Processing', 'Methods'],
].map(([title, category]) => ({ title, competency: 5, category: [category] }));

const categories: Category[] = [
  { name: 'Methods', color: 'var(--color-accent)' },
  { name: 'Research', color: 'var(--color-accent)' },
];

export { categories, skills };

export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'City University of Hong Kong',
    position: 'Associate Professor, Department of Data Science',
    url: 'https://www.ds.cityu.edu.hk/',
    startDate: '2025-01-01',
    summary:
      'Researching trustworthy AI, formal verification, adversarial attacks, and uncertainty quantification.',
  },
  {
    name: 'The Hong Kong Institute of AI for Science (HKAI-Sci)',
    position: 'Deputy Director',
    url: 'https://www.cityu.edu.hk/hkai-sci/',
    startDate: '2025-01-01',
    summary:
      'Supporting interdisciplinary AI research for science at City University of Hong Kong.',
  },
  {
    name: 'Drexel University',
    position: 'Assistant Professor, Department of Computer Science',
    url: 'https://drexel.edu/cci/',
    startDate: '2021-01-01',
    endDate: '2025-01-01',
    summary:
      'Led research and teaching in trustworthy machine learning and neural network verification.',
    highlights: [
      'Faculty Research Excellence Award (2024)',
      'Principal Investigator on projects funded by the U.S. NSF and national laboratories.',
    ],
  },
];

export default work;

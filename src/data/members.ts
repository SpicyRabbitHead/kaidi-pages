export type MemberCategory = 'postdoc' | 'phd' | 'master' | 'alumni';

export interface Member {
  name: string;
  homepage: string;
  image: string;
  width: number;
  height: number;
  category: MemberCategory;
  position: string;
  tenure: string;
}

const members: Member[] = [
  {
    name: '廉家伟',
    homepage: 'https://jiaweilian.github.io/',
    image: '/images/members/member-1.jpg',
    width: 800,
    height: 1120,
    category: 'phd',
    position: 'PhD',
    tenure: 'Joined 2025',
  },
  {
    name: '汪志远',
    homepage: 'https://zhiyuan-gg.github.io/zhiyuanwang.github.io/',
    image: '/images/members/member-2.jpg',
    width: 800,
    height: 1000,
    category: 'phd',
    position: 'PhD',
    tenure: 'Joined 2025',
  },
  {
    name: '黄宇',
    homepage: 'https://hardenyu21.github.io/',
    image: '/images/members/member-3.jpg',
    width: 800,
    height: 800,
    category: 'phd',
    position: 'PhD',
    tenure: 'Joined 2025',
  },
  {
    name: '林绍卿',
    homepage: 'https://shaoqlin.github.io/',
    image: '/images/members/member-4.jpg',
    width: 800,
    height: 800,
    category: 'phd',
    position: 'PhD',
    tenure: 'Joined 2025',
  },
  {
    name: '甘江璋',
    homepage: 'https://hunnnj.github.io/',
    image: '/images/members/member-5.jpg',
    width: 800,
    height: 1120,
    category: 'postdoc',
    position: 'Postdoc',
    tenure: 'Joined 2026',
  },
  {
    name: 'Jinhao Duan',
    homepage: 'https://jinhaoduan.github.io/',
    image: '/images/members/jinhao-duan-square.jpg',
    width: 400,
    height: 400,
    category: 'alumni',
    position: 'Ph.D.',
    tenure: '2021–2025',
  },
];

export default members;

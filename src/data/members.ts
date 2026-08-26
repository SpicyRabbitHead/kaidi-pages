export type MemberCategory = 'postdoc' | 'phd' | 'master' | 'alumni';

export interface Member {
  name: string;
  homepage: string;
  image: string;
  width: number;
  height: number;
  category: MemberCategory;
}

const members: Member[] = [
  {
    name: '廉家伟',
    homepage: 'https://jiaweilian.github.io/',
    image: '/images/members/member-1.jpg',
    width: 800,
    height: 1120,
    category: 'phd',
  },
  {
    name: '汪志远',
    homepage: 'https://zhiyuan-gg.github.io/zhiyuanwang.github.io/',
    image: '/images/members/member-2.jpg',
    width: 800,
    height: 1000,
    category: 'master',
  },
  {
    name: '黄宇',
    homepage: 'https://hardenyu21.github.io/',
    image: '/images/members/member-3.jpg',
    width: 800,
    height: 800,
    category: 'alumni',
  },
  {
    name: '林绍卿',
    homepage: 'https://shaoqlin.github.io/',
    image: '/images/members/member-4.jpg',
    width: 800,
    height: 800,
    category: 'phd',
  },
  {
    name: '甘江璋',
    homepage: 'https://hunnnj.github.io/',
    image: '/images/members/member-5.jpg',
    width: 800,
    height: 1120,
    category: 'postdoc',
  },
];

export default members;

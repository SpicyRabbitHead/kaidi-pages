export interface Member {
  name: string;
  homepage: string;
  image: string;
  width: number;
  height: number;
}

const members: Member[] = [
  {
    name: '廉家伟',
    homepage: 'https://jiaweilian.github.io/',
    image: '/images/members/member-1.jpg',
    width: 800,
    height: 1120,
  },
  {
    name: '汪志远',
    homepage: 'https://zhiyuan-gg.github.io/zhiyuanwang.github.io/',
    image: '/images/members/member-2.jpg',
    width: 800,
    height: 1000,
  },
  {
    name: '黄宇',
    homepage: 'https://hardenyu21.github.io/',
    image: '/images/members/member-3.jpg',
    width: 800,
    height: 800,
  },
  {
    name: '林绍卿',
    homepage: 'https://shaoqlin.github.io/',
    image: '/images/members/member-4.jpg',
    width: 800,
    height: 800,
  },
  {
    name: '甘江璋',
    homepage: 'https://hunnnj.github.io/',
    image: '/images/members/member-5.jpg',
    width: 800,
    height: 1120,
  },
];

export default members;

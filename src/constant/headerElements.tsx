interface HeaderElements {
  path: string;
  title: string;
}

type HeaderElementsList = HeaderElements[];

export const headerElementsList: HeaderElementsList = [
  {
    path: '/',
    title: 'Home',
  },

  {
    path: '/boothlist',
    title: '부스 정보',
  },
  {
    path: '/timetalbe',
    title: '공연 정보',
  },
  {
    path: '/about',
    title: '제작자',
  },
];

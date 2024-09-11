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
    title: 'BOOTH',
  },
  {
    path: '/timetable',
    title: 'TIMETABLE',
  },
  {
    path: '/about',
    title: 'ABOUT',
  },
];

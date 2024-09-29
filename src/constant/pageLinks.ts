interface Id {
  id: number;
}

interface PageLink extends Id {
  path: string;
  gridPosition: string;
  title: string;
  content?: string;
  icon: string;
}

export const pageLink: PageLink[] = [
  {
    id: 1,
    path: '/boothlist',
    gridPosition: 'col-start-1 col-end-3 row-start-1 row-end-3',
    title: '부스 소개',
    content: '각 부스별 위치 확인',
    icon: '⛺️',
  },
  {
    id: 2,
    path: '/timetable',
    gridPosition: 'col-start-3 col-end-5 row-start-1 row-end-3',
    title: '운영 시간',
    content: '행사 일정 안내',
    icon: '⏰',
  },
  {
    id: 3,
    path: '/',
    gridPosition: 'col-start-1 col-end-5 row-start-3 row-end-5',
    title: '유형 테스트',
    content: '나에게 꼭 맞는 동아리를 찾아봐!',
    icon: '😇',
  },
  {
    id: 4,
    path: '/boothlist',
    gridPosition: 'col-start-3 col-end-5 row-start-5 row-end-6',
    title: '제작자',
    icon: '‍🧑‍💻',
  },
];

interface TimeTable {
  id: number;
  content: string;
  time: string;
  img: string;
}

type TimeTableList = TimeTable[];

export const timeTable: TimeTableList = [
  {
    id: 1,
    content: '동아리 공연 리허설',
    time: '10:00~12:00',
    img: 'common',
  },
  {
    id: 2,
    content: '총동연 소개',
    time: '13:00~13:20',
    img: 'common',
  },
  {
    id: 3,
    content: 'SDR',
    time: '13:30~14:20',
    img: 'logo_sdr',
  },
  {
    id: 4,
    content: '유드림',
    time: '14:20~15:00',
    img: 'logo_udream',
  },
  {
    id: 5,
    content: '휴식 및 이벤트',
    time: '15:00~15:20',
    img: 'common',
  },
  {
    id: 6,
    content: '그라미',
    time: '15:20~16:10',
    img: 'logo_gramy',
  },
  {
    id: 7,
    content: '애니문',
    time: '16:10~16:30',
    img: 'logo_aniMoon',
  },
  {
    id: 8,
    content: 'WORKERS',
    time: '16:30~17:20',
    img: 'logo_workers',
  },
  {
    id: 9,
    content: '이벤트 뽑기',
    time: '17:20~17:50',
    img: 'common',
  },
  {
    id: 10,
    content: '해오름제',
    time: '18:00~',
    img: 'common',
  },
];

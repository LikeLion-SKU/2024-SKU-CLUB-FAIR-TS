interface Id {
  id: number;
}

export interface Representatives {
  part: string;
  name: string;
  phone: string;
}

export interface ClubInfo {
  menu?: {
    name: string;
    price: string;
  }[];
  game?: {
    name: string;
    price: string;
  }[];
}

export interface Booth extends Id {
  title: string;
  type: string;
  description: string;
  activity: string;
  representatives: Representatives[];
  sns: string;
  snsLink: string;
  map: string;
  clubInfo: ClubInfo;
}

export const boothList: Booth[] = [
  {
    id: 1,
    title: '멋쟁이사자처럼',
    type: '학술',
    description:
      '나만의 웹페이지를 만들고 싶거나, 상상만 했던 아이디어를 현실로 실현 할 수 있는 전국 최대 규모 IT창업 동아리 입니다',
    activity:
      '매주 1회 필참 파트별 트랙, 자율 스터디, 아이디어톤, 해커톤, 데모데이, 연합해커톤 등등 다양한 IT 주요활동을 경험 할 수 있습니다.',
    representatives: [
      {
        part: '대표',
        name: '홍길동',
        phone: '010-1234-5678',
      },
      {
        part: '부대표',
        name: '홍길동',
        phone: '010-1234-5678',
      },
    ],
    sns: '인스타그램 (@likelion_skuniv)',
    snsLink: '/',
    map: '1',
    clubInfo: {
      menu: [
        {
          name: '달고나',
          price: '3000원',
        },
        {
          name: '사탕',
          price: '3000원',
        },
      ],
      game: [
        {
          name: '동아리 유형 테스트,',
          price: '0원',
        },
        {
          name: '운영진과 타자대결,',
          price: '0원',
        },
        {
          name: '그림 퀴즈.',
          price: '0원',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'CCC',
    type: '종교',
    description: 'Campus Cursade for Christ의 약어로 한국 대학생 선교회이자, 기독교 동아리입니다!',
    activity: '1 대 1 맨토링, 가족순모임, 목요 채플, 여름/겨울 수련회, 단기선교 등이 있습니다.',
    representatives: [
      {
        part: '대표',
        name: '홍길동',
        phone: '010-1234-5678',
      },
      {
        part: '간사',
        name: '홍길동',
        phone: '010-1234-5678',
      },
    ],
    sns: '인스타그램 (@sku_ccc)',
    snsLink: '/',
    map: '2',
    clubInfo: {
      menu: [
        {
          name: '팝콘',
          price: '무료',
        },
      ],
      game: [
        {
          name: '더 포 설문조사.',
          price: '무료',
        },
      ],
    },
  },
];

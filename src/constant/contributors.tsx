interface Contributor {
  name: string;
  major: string;
  mention: string;
  role?: string;
}

type ContributorsList = Contributor[];

export const contributors: ContributorsList = [
  {
    name: '송유진',
    major: '아동학과 21',
    mention: '서로 총동아리연합회가 응원하겠습니다.',
  },
  {
    name: '황현진',
    major: '컴퓨터공학과 20',
    mention: '알림제를 시작으로 다양한 활동을 보여드리겠습니다.',
    role: 'PM',
  },
  {
    name: '서현은',
    major: '컴퓨터공학과 22',
    mention: '행복하세요',
    role: 'DESIGN',
  },
  {
    name: '민동명',
    major: '컴퓨터공학과 22',
    mention: '사랑한다 동기들아!',
    role: 'DESIGN',
  },
  {
    name: '고승범',
    major: '소프트웨어학과 18',
    mention: '이 페이지를 시작으로 앞으로 다른사람들에게 많은 도움이 되는 사람이 되었으면 좋겠습니다.',
    role: 'DEVELOPER',
  },
  {
    name: '김효중',
    major: '컴퓨터공학과 19',
    mention: '남에겐 작게 보이지만 내겐 큰 한 걸음',
    role: 'DEVELOPER',
  },
  {
    name: '유창호',
    major: '컴퓨터공학과 20',
    mention: '프로젝트 참여한 모든분들 고생하셨고 이 페이지 보는 모든 분들 올해 잘되시길',
    role: 'DEVELOPER',
  },
];

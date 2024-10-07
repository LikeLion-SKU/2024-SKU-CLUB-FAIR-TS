import { createFileRoute } from '@tanstack/react-router';

// components
import TitleImage from '../components/home/TitleImage';
import DateImage from '../components/home/DateImage';
import ScrollImage from '../components/home/ScrollImage';
import PageLink from '../components/home/PageLink';
import InstaLink from '../components/home/InstaLink';

/**
 * 이 코드는 '/' 즉 제일 처음 들어올 때 마주하는 페이지야.
 * tanstack라우터는 파일기반, 코드기반 라우터를 둘 다 지원해.
 * 코드기반은 기존 React-Router와 비슷해, 파일기반은 Next.js에 app라우터 기반과 비슷해.
 * 원하는 주소를 폴더로 만들고 index.ts파일을 만들면 정확히 그 경로와 일치 했을 시 렌더링을 시켜줘.
 * booth폴더는 /booth이여만 페이지가 렌더링되고 /booths, /buoth 이러면 notfound페이지를 렌더링이 돼.
 */

export const Route = createFileRoute('/')({
  component: () => <HomePage />,
});

function HomePage() {
  return (
    <div className="grid grid-rows-5 gap-14 py-24">
      <TitleImage />
      <DateImage />
      <ScrollImage />
      <PageLink />
      <InstaLink />
    </div>
  );
}

import { createFileRoute, Outlet } from '@tanstack/react-router';
import Header from '../components/common/header/Header';

/**
 * 이 코드는 tanstack라우터의 기능(?) 중 하나를 이용한 거야.
 * 공식 문서에 내용을 살펴보면
 * Routes segments with the _ prefix are considered layout-routes and will not be used when matching its child routes against the URL pathname.
 * 쉽게 말하면 _접두사를 사용하면 레이아웃 라우트로 tanstackquery는 생각하고 라우트 매칭에서 제외시켜버려.
 * 즉 레이아웃을 정의가 필요한 곳에 사용하면 돼. 그리고 그 레이아웃이 필요한 폴더를 만들어 그 밑에 원하는 주소를 정의 해주면 돼.
 * 여기서는 _required-header 폴더 밑에 about, boothlist, timetable이 존재하지
 * 따라서 /about과 /boothlist, /timetable은 모두 여기에 정의된 레이아웃이 적용될꺼야
 * 이 프로젝트에서 첫 페이지('/')를 제외하고 모두 헤더가 필요하기에 Headr를 사용하고 나머지 요소들을
 * outlet을 이용해 렌더링 해주고 있어.
 */
export const Route = createFileRoute('/_required-header')({
  component: () => <Layout />,
});

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

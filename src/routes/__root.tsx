import { Outlet, createRootRoute } from '@tanstack/react-router';
import NotFound from '../components/not-found/NotFound';

/**
 * component
 * coomponent는 말 그대로 렌더링할 컴포넌트를 작성해 주는 곳이야. 난 여기에 div태그를 이용해서 배경이미지,
 * 최대 넓이, 등을 설정해서 가운데 정렬을 해놓고 그 안에 outlet을 이용해 페이지를 렌더링했어.
 *
 * notFoundComponent
 * notFoundComponent는 404페이지 즉 등록되지 않은 라우트에 들어갔을 때 보여줄 컴포넌트를 렌더링해주는 역할이야.
 */
export const Route = createRootRoute({
  component: () => (
    <div
      id="container"
      className="container max-w-[480px] min-h-screen px-[14px] bg-[url('src/assets/images/common/background.png')] bg-cover"
    >
      <Outlet />
    </div>
  ),
  notFoundComponent: () => (
    <div className="grid grid-rows-3 h-screen">
      <NotFound />
    </div>
  ),
});

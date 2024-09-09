import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <div className="container max-w-[480px] min-h-screen px-[14px] bg-[url('src/assets/images/common/background.png')] bg-cover">
      <Outlet />
    </div>
  ),
});

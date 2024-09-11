import { createFileRoute, Outlet } from '@tanstack/react-router';
import Header from '../components/common/header/Headrer';
import { headerElementsList } from '../constant/headerElements';

export const Route = createFileRoute('/_required-header')({
  component: () => <Layout />,
});

function Layout() {
  return (
    <>
      <Header>
        <Header.ItemList>
          {headerElementsList.map((prod, idx) => (
            <Header.Item key={idx} path={prod.path} title={prod.title} />
          ))}
        </Header.ItemList>
      </Header>
      <Outlet />
    </>
  );
}

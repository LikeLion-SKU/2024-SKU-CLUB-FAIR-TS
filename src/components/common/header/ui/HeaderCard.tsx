import { Link } from '@tanstack/react-router';

export default function HeaderCard({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <header className="w-full h-[50px]">{children}</header>;
}

function NavList({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <nav className="flex items-center w-full h-full">
      <ul className="flex justify-around items-center w-full">{children}</ul>
    </nav>
  );
}

function NavItems({ path, title }: { path: string; title: string }) {
  return (
    <li>
      <Link to={path} className="[&.active]:underline [&.active]:underline-offset-4">
        {title}
      </Link>
    </li>
  );
}

HeaderCard.NavList = NavList;
HeaderCard.NavItems = NavItems;

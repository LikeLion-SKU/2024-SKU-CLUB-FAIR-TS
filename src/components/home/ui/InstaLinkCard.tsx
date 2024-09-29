import { Link } from '@tanstack/react-router';

export default function InstaLinkCard({ children }: { children: React.ReactNode[] | React.ReactNode }) {
  return <div className="grid grid-rows-3 grid-cols-5 gap-3 h-[90%]">{children}</div>;
}

interface InstaButtonProps {
  children: JSX.Element | JSX.Element[];
  path: string;
}

function InstaButton({ children, path }: InstaButtonProps) {
  return (
    <button className="bg-white rounded-2xl">
      <Link to={path}>{children}</Link>
    </button>
  );
}

InstaLinkCard.LinkButton = InstaButton;

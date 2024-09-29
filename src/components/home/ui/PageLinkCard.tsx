import { Link } from '@tanstack/react-router';

export default function PageLinkCard({ children }: { children: React.ReactNode[] | React.ReactNode }) {
  return <div className="grid grid-rows-5 grid-cols-4 gap-4 h-[300px]">{children}</div>;
}

interface PageLinkButtonProps {
  path: string;
  gridPostion: string;
  children: JSX.Element | JSX.Element[];
}

function PageLinkButton({ path, children, gridPostion }: PageLinkButtonProps) {
  const className = `border-[2px] border-black rounded-2xl bg-[#FDF0EE] p-[10px] + ${gridPostion}`;
  return (
    <button className={className}>
      <Link to={path}>{children}</Link>
    </button>
  );
}

PageLinkCard.Button = PageLinkButton;

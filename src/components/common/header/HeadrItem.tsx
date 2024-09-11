import { Link } from '@tanstack/react-router';

interface Props {
  path: string;
  title: string;
}

export default function HeaderItem({ path, title }: Props) {
  return (
    <li>
      <Link to={path} className="[&.active]:underline [&.active]:underline-offset-4">
        {title}
      </Link>
    </li>
  );
}

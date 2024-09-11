interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function HeaderItemList({ children }: Props) {
  return (
    <nav className="flex items-center w-full h-full">
      <ul className="flex justify-around items-center w-full">{children}</ul>
    </nav>
  );
}

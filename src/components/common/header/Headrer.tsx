import { createContext } from 'react';
import HeaderItemList from './HeaderItemList';
import HeaderItem from './HeadrItem';

interface Props {
  children: JSX.Element;
}

const HeaderContext = createContext<null>(null);

export default function Header({ children }: Props) {
  return (
    <HeaderContext.Provider value={null}>
      <header className="w-full h-[50px]">{children}</header>
    </HeaderContext.Provider>
  );
}

Header.ItemList = HeaderItemList;
Header.Item = HeaderItem;

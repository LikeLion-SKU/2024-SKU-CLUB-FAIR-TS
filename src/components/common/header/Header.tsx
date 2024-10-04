import { headerElementsList } from '../../../constant/headerElements';
import HeaderCard from './ui/HeaderCard';

export default function Header() {
  return (
    <HeaderCard>
      <HeaderCard.NavList>
        {headerElementsList.map((prod, idx) => (
          <HeaderCard.NavItems key={idx} path={prod.path} title={prod.title} />
        ))}
      </HeaderCard.NavList>
    </HeaderCard>
  );
}

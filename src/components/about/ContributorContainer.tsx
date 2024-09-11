import { contributors } from '../../constant/contributors';
import ContributorCard from './ui/ContributorCard';

interface ContriButorContainerProps {
  role?: string;
}

export default function ContriButorContainer({ role }: ContriButorContainerProps) {
  return (
    <div className="w-full my-[10px]">
      <h1 className="text-center font-normal text-[20px]">{role ? role : '총동연 회장'}</h1>
      {contributors
        .filter((prod) => prod.role === role)
        .map((prod, idx) => (
          <ContributorCard key={idx} name={prod.name} major={prod.major} mention={prod.mention} />
        ))}
    </div>
  );
}

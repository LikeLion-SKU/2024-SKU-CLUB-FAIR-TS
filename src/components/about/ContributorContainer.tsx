import { contributors } from '../../constant/contributors';
import ContributorCard from './ui/ContributorCard';

interface ContriButorProps {
  role?: string;
}

export default function ContriButor({ role }: ContriButorProps) {
  return (
    <div className="w-full my-[10px]">
      <h1 className="text-center font-normal text-[20px]">{role ? role : '총동연 회장'}</h1>
      {contributors
        .filter((prod) => prod.role === role)
        .map((prod, idx) => (
          <ContributorCard key={idx}>
            <ContributorCard.InfoBox>
              <ContributorCard.InfoBox.Img />
              <ContributorCard.InfoBox.Name name={prod.name} />
              <ContributorCard.InfoBox.Major major={prod.major} />
            </ContributorCard.InfoBox>
            <ContributorCard.Mention mention={prod.mention} />
          </ContributorCard>
        ))}
    </div>
  );
}

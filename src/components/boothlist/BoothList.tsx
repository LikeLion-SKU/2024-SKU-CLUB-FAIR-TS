import { boothList } from '../../constant/boothList';
import BoothListCard from './ui/BoothListCard';

export default function BoothList() {
  return (
    <BoothListCard>
      <BoothListCard.Title title="동아리 목록" />
      <BoothListCard.ButtonBox>
        {boothList.map((prod) => {
          return <BoothListCard.Button clubName={prod.title} clubType={prod.type} id={prod.id} key={prod.id} />;
        })}
      </BoothListCard.ButtonBox>

      <BoothListCard.Modal />
    </BoothListCard>
  );
}

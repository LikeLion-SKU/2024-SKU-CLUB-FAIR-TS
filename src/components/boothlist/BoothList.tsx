import BoothListCard from './ui/BoothListCard';

import { boothList } from '../../constant/boothList';

export default function BoothList() {
  return (
    <BoothListCard>
      <BoothListCard.ButtonBox>
        {boothList.map((booth) => {
          return (
            <BoothListCard.Button key={booth.id} clubName={booth.title} clubType={booth.type} boothId={booth.id} />
          );
        })}
      </BoothListCard.ButtonBox>
      <BoothListCard.BottomModal />
    </BoothListCard>
  );
}

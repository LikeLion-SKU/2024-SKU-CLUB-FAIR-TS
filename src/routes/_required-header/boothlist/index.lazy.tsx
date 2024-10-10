import { createLazyFileRoute } from '@tanstack/react-router';
import MapImage from '../../../components/boothlist/MapImage';
import BoothList from '../../../components/boothlist/BoothList';

export const Route = createLazyFileRoute('/_required-header/boothlist/')({
  component: () => <BoothListPage />,
});

function BoothListPage() {
  return (
    <div className="grid grid-flow-col grid-rows-2 h-[calc(100vh-50px)] ">
      <MapImage />
      <BoothList />
    </div>
  );
}

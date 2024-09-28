import { createFileRoute } from '@tanstack/react-router';

import MapImage from '../../../components/boothlist/MapImage';
import BoothList from '../../../components/boothlist/BoothList';

export const Route = createFileRoute('/_required-header/boothlist/')({
  component: () => <BoothListPage />,
});

function BoothListPage() {
  return (
    <main className="flex flex-col flex-1 min-h-[calc(100vh-50px)]">
      <MapImage />
      <BoothList />
    </main>
  );
}

import { createFileRoute } from '@tanstack/react-router';

// components
import TitleImage from '../components/home/TitleImage';
import DateImage from '../components/home/DateImage';
import ScrollImage from '../components/home/ScrollImage';
import PageLink from '../components/home/PageLink';
import InstaLink from '../components/home/InstaLink';

export const Route = createFileRoute('/')({
  component: () => <HomePage />,
});

function HomePage() {
  return (
    <div className="grid grid-rows-5 gap-14 py-24">
      <TitleImage />
      <DateImage />
      <ScrollImage />
      <PageLink />
      <InstaLink />
    </div>
  );
}

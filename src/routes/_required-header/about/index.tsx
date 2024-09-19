import { createFileRoute } from '@tanstack/react-router';
import ContriButor from '../../../components/about/ContributorContainer';

import union from '../../../assets/images/about/unionlogo.png';
export const Route = createFileRoute('/_required-header/about/')({
  component: () => <AboutPage />,
});

function AboutPage() {
  return (
    <main>
      <div className="flex justify-center my-[40px]">
        <img src={union} alt="unionlogo" />
      </div>
      <ContriButor />
      <ContriButor role="PM" />
      <ContriButor role="DESIGN" />
      <ContriButor role="DEVELOPER" />
    </main>
  );
}

import PageLinkCard from './ui/PageLinkCard';

import { pageLink } from '../../constant/pageLinks';

export default function PageLink() {
  return (
    <PageLinkCard>
      {pageLink.map((prod) => {
        if (typeof prod.content !== 'undefined') {
          return (
            <PageLinkCard.Button key={prod.id} path={prod.path} gridPostion={prod.gridPosition}>
              <h1 className="text-left text-[22px] font-bold">{prod.title}</h1>
              <p className="text-left text-[15px] font-bold">{prod.content}</p>
              <p className="text-right">{prod.icon}</p>
            </PageLinkCard.Button>
          );
        }
        return (
          <PageLinkCard.Button key={prod.id} path={prod.path} gridPostion={prod.gridPosition}>
            <h1 className="flex justify-between text-left text-[22px] font-bold">
              {prod.title} <span className="text-[16px]">{prod.icon}</span>
            </h1>
          </PageLinkCard.Button>
        );
      })}
    </PageLinkCard>
  );
}

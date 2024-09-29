import instaLink from '../../constant/instaLink';
import InstaLinkCard from './ui/InstaLinkCard';

import lion from '../../assets/images/home/logo_lion.png';

export default function InstaLink() {
  return (
    <InstaLinkCard>
      {instaLink.map((prod) => {
        return (
          <InstaLinkCard.LinkButton key={prod.id} path={prod.instaLink}>
            <img src={lion} />
          </InstaLinkCard.LinkButton>
        );
      })}
    </InstaLinkCard>
  );
}

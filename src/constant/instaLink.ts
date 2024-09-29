interface Id {
  id: number;
}

interface InstaLink extends Id {
  instaLink: string;
}

const instaLink: InstaLink[] = [];

for (let i = 0; i < 15; i++) {
  instaLink.push({
    id: i + 1,
    instaLink: '/',
  });
}

export default instaLink;

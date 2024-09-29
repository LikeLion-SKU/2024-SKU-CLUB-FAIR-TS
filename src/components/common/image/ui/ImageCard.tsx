import getImageUrl from '../../../../utils/getImageUrl';

interface ImageCardProps {
  imageName: string;
  imageFormat: string;
  dirName: string;
  alt: string;
}

export default function ImageCard({ imageName, imageFormat, dirName, alt }: ImageCardProps) {
  return <img src={getImageUrl(dirName, imageName, imageFormat)} alt={alt} className="object-fill" />;
}

import getImageUrl from '../../../../utils/getImageUrl';

interface ImageCardProps {
  dirName: string;
  imageName: string;
  alt: string;
  imageType: string;
}

export default function ImageCard({ dirName, imageName, alt, imageType }: ImageCardProps) {
  return (
    <div className="w-full h-full p-[25px]">
      <img src={getImageUrl(dirName, imageName, imageType)} alt={alt} className="w-full h-full object-fill " />
    </div>
  );
}

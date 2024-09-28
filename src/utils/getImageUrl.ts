export default function getImageUrl(dirName: string, name: string, imageType: string) {
  return new URL(`../assets/images/${dirName}/${name}.${imageType}`, import.meta.url).href;
}

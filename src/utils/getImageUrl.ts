export default function getImageUrl(dirName: string, name: string, imageFormat: string) {
  return new URL(`../assets/images/${dirName}/${name}.${imageFormat}`, import.meta.url).href;
}

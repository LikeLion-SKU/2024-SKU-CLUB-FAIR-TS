export default function getImageUrl(name: string) {
  return new URL(`../assets/images/timetable/${name}.png`, import.meta.url).href;
}

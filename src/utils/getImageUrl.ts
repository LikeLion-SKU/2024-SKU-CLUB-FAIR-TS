/**
 * 이미지 동적 임포트를 위한 함수
 *
 * 보통 사진을 이름을 두고 임포트를 하게 될탠데 굉장히 코드가 지저분해지고 같은 이미지가 여러 군데 쓰일 일이 있을꺼야.
 * 이럴 경우 이 함수를 쓰면 돼.
 *
 * @param dirName : 디렉토리이름, ex) common, home
 * @param name : 이미지 이름, ex) logo_lion, unionlogo
 * @param imageFormat : 이미지 포멧, ex) png, svg, jpg
 * @returns 이미지 url
 */

export default function getImageUrl(dirName: string, name: string, imageFormat: string) {
  return new URL(`../assets/images/${dirName}/${name}.${imageFormat}`, import.meta.url).href;
}

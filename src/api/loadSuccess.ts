export default async function loadSuccess(): Promise<string> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve('페이지를 보여줄 준비가 끝남.');
    }, 5000);
  });
}

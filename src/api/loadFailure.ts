export default function loadFailure(): Promise<never> {
  return new Promise((_, reject) => {
    const error = new Error('페이지 로드에 실패했습니다.');
    setTimeout(() => {
      reject(error);
    }, 5000);
  });
}

import { Link } from '@tanstack/react-router';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center row-start-2 row-end-3 p-[20%]">
      <p className="mb-[20px]">페이지를 찾지 못했습니다.</p>
      <button className="rounded ">
        <Link to="/" className="w-full">
          <p>홈으로 돌아가기</p>
        </Link>
      </button>
    </div>
  );
}

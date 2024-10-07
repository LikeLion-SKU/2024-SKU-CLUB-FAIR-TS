import getImageUrl from '../../../utils/getImageUrl';

interface TimeTableCardProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * 뭐 코드를 대충 보면 알탠데 중요한 설명들만 적고 갈게
 * 리액트 디자인 패턴 중 compound component 패턴이 있어 이걸 적용할려고 노력했어
 * compound component 패턴의 핵심은 종속과 공유 인 것 같아
 * 이게 무슨 말이냐면 보통 만들다보면 a컴포넌트가 b컴포넌트 밑에 존재하게 되고 a,b컴포넌트가 동시에 공유하는
 * 상태나 로직이 있는 경우 가 있을꺼야 보통 이럴 땐 상위 컴포넌트에서 하위 컴포넌트로 프롭스로 많이 넘길탠데
 * 여기서는 context api를 활용해서 원하는 컴포넌트에서 모든 로직과 상태를 공유할 수 있어
 * 여기에는 공유 할 로직이나 상태가 없기에 사용하지 않았지만 혹시 있으면 아까 말했듯이 context api로 넘기면 돼
 *
 * 종속은 위에 설명했듯이 a컴포넌트가 b컴포넌트 밑에 존재하는데 a컴포넌트는 b컴포넌트에서만 사용하고, 사용하게 하고 싶어
 * 이럴 때 JS 함수는 일급 객체라는 특징을 활용해 속성을 할당해주는 거야. 일급객체는 구글에 조금만 검색해도 나오고 여기서 핵심은
 * 객체이기 때문에 프로퍼티를 가질 수 있다가 핵심이야
 *
 * 그래서 밑에보면 TimeTableCard.~~ 이런 걸 볼 수 있는데 .을 썼다는 것에서부터 이미 객체라는 것을 의미하는 거지
 *
 * 여기에 사용 된 컴포넌트(함수들은) 외부에서 그냥 사용이 불가능하고 TimeTalbeCard에 의해서 사용이 가능해.
 *
 * 나머지 컴포넌트들도 다 같은 방식으로 작성되어 있어
 */
export default function TimeTableCard({ children }: TimeTableCardProps) {
  return <div className="table w-full h-[600px] bg-[#FFF5F5] rounded ">{children}</div>;
}

interface TimeTableListProps {
  children: JSX.Element | JSX.Element[];
}

function TimeTableList({ children }: TimeTableListProps) {
  return <ul className="px-[20px]">{children}</ul>;
}

interface TimeTableItemProps {
  children: JSX.Element | JSX.Element[];
}

function TimeTableItem({ children }: TimeTableItemProps) {
  return (
    <li className="flex justify-between content-center w-full px-[20px] py-[10px] border-b-2 border-[#50A65D] border-dotted last:border-b-0">
      {children}
    </li>
  );
}

function TimeTableLogo({
  dirName,
  imageName,
  imageFormat,
}: {
  imageName: string;
  dirName: string;
  imageFormat: string;
}) {
  return (
    <div className="w-[40px] h-[40px]">
      <img src={getImageUrl(dirName, imageName, imageFormat)} alt="club-logo" className=" object-cover" />
    </div>
  );
}

function TimeTableTimeInfo({ time }: { time: string }) {
  return (
    <div className="flex justify-center items-center basis-[100px]">
      <p className=" text-center text-[16px]">{time}</p>
    </div>
  );
}

function TimeTableContent({ content }: { content: string }) {
  return (
    <div className="flex justify-center items-center basis-[150px]">
      <p className=" text-center text-[16px] ">{content}</p>
    </div>
  );
}

TimeTableCard.List = TimeTableList;
TimeTableCard.Item = TimeTableItem;
TimeTableCard.Logo = TimeTableLogo;
TimeTableCard.TimeInfo = TimeTableTimeInfo;
TimeTableCard.Content = TimeTableContent;

import getImageUrl from '../../../utils/getImageUrl';

interface TimeTableCardProps {
  children: JSX.Element | JSX.Element[];
}

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

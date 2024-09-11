import logo from '../../../assets/images/about/logo_lion.png';

interface ContributorCardProps {
  name: string;
  major: string;
  mention: string;
}

export default function ContributorCard({ name, major, mention }: ContributorCardProps) {
  return (
    <div className="w-[90%] h-[75px] mx-[auto] mt-[20px] px-[15px] bg-[#F3E2DB] rounded-2xl border-[0.53px] border-[#383448] shadow-xl opacity-90">
      <div className="flex items-center h-[40px]">
        <div>
          <img src={logo} alt="contributor" className="w-[35px] object-cover" />
        </div>
        <p className="ml-[10px] font-extrabold text-[21px]">{name}</p>
        <p className="ml-[10px] font-medium text-[13px]">{major}</p>
      </div>

      <div>
        <p className="font-medium text-[10px]">{mention}</p>
      </div>
    </div>
  );
}

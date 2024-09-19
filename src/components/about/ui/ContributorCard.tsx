import logo from '../../../assets/images/about/logo_lion.png';

export default function ContributorCard({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="w-[90%] h-[75px] mx-[auto] mt-[20px] px-[15px] bg-[#F3E2DB] rounded-2xl border-[0.53px] border-[#383448] shadow-xl opacity-90">
      {children}
    </div>
  );
}

function ContributorInfoBox({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div className="flex items-center h-[40px]">{children}</div>;
}

function ContributorImg() {
  return (
    <div>
      <img src={logo} alt="contributor" className="w-[35px] object-cover" />
    </div>
  );
}

function ContributorName({ name }: { name: string }) {
  return <p className="ml-[10px] font-extrabold text-[21px]">{name}</p>;
}

function ContributorMajor({ major }: { major: string }) {
  return <p className="ml-[10px] font-medium text-[13px]">{major}</p>;
}

ContributorInfoBox.Img = ContributorImg;
ContributorInfoBox.Name = ContributorName;
ContributorInfoBox.Major = ContributorMajor;

function ContributorMention({ mention }: { mention: string }) {
  return (
    <div>
      <p className="font-medium text-[10px]">{mention}</p>
    </div>
  );
}

ContributorCard.InfoBox = ContributorInfoBox;
ContributorCard.Mention = ContributorMention;

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Sheet } from 'react-modal-sheet';

import { Booth, boothList } from '../../../constant/boothList';
import { ClubInfo, Representatives } from '../../../constant/boothList';
import ImageCard from '../../common/image/ui/ImageCard';
import { Link } from '@tanstack/react-router';

interface BoothContext {
  id: number | null;
  isOpen: boolean;
  openModal: (boothId: number) => void;
  closeModal: () => void;
  boothList: Booth[];
}
const BoothListContext = createContext<BoothContext | null>(null);

function useBoothListContext() {
  const ctx = useContext(BoothListContext);

  if (!ctx) {
    throw new Error('BoothListCard내에서 사용하세요');
  }

  return ctx;
}

export default function BoothListCard({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal(boothId: number) {
    setId(boothId);
    setIsOpen(true);
  }

  function closeModal() {
    setId(null);
    setIsOpen(false);
  }

  const contextValue = {
    id,
    isOpen,
    boothList,
    openModal,
    closeModal,
  };

  return <BoothListContext.Provider value={contextValue}>{children}</BoothListContext.Provider>;
}

function BoothListBox({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className="flex-1 w-full bg-white rounded-t-2xl px-[20px]">
      <h1 className="text-center p-[20px]">동아리 목록</h1>
      {children}
    </div>
  );
}

function BoothListButton({ clubName, clubType, boothId }: { clubName: string; clubType: string; boothId: number }) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { openModal } = useBoothListContext();

  return (
    <button
      ref={ref}
      className="flex w-full bg-[#FDF0EE] rounded p-[10px] my-[10px]"
      onClick={() => openModal(boothId)}
    >
      <p className="w-[80%] text-start ">{clubName}</p>
      <p>{clubType}</p>
    </button>
  );
}

function BoothBottomModal() {
  const [left, setLeft] = useState<number | null>(null);
  const { id, isOpen, boothList, closeModal } = useBoothListContext();
  const boothInfo = boothList.find((booth) => booth.id === id);

  useEffect(() => {
    const element = document.getElementById('container');
    if (element) {
      setLeft(element.offsetLeft);
    }
  }, []);

  return (
    <Sheet
      isOpen={isOpen}
      onClose={closeModal}
      style={{
        maxWidth: '480px',
        left: left !== null ? `${left}px` : '0px',
      }}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>
            <div className="w-full">
              <ButtonModalDescription description={boothInfo?.description} />
              <ButtonModalMapImg mapNumber={boothInfo?.map} />
              <ButtonModalInformationBox>
                <ButtonModalActivity activity={boothInfo?.activity} />
                <ButtonModalRepresentatives representatives={boothInfo?.representatives} />
                <ButtonModalContent content={boothInfo?.clubInfo} />
                <ButtonModalInstaLink instaLink={boothInfo?.snsLink} />
              </ButtonModalInformationBox>
            </div>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}

function ButtonModalDescription({ description }: { description: string | undefined }) {
  if (typeof description !== 'undefined')
    return (
      <div className="w-[80%] mx-auto">
        <h1 className="text-[12px]">{description}</h1>
      </div>
    );
}

function ButtonModalMapImg({ mapNumber }: { mapNumber: string | undefined }) {
  if (typeof mapNumber !== 'undefined')
    return <ImageCard dirName="boothlist" imageName={mapNumber} imageType="svg" alt="map" />;
}

function ButtonModalInformationBox({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div className="grid grid-rows-4 gap-[15px]">{children}</div>;
}

function ButtonModalActivity({ activity }: { activity: string | undefined }) {
  if (typeof activity !== 'undefined')
    return (
      <div className="flex px-[14px]">
        <p className="flex-1 text-[16px] font-bold ">주요 활동</p>
        <p className="flex-1 text-[13px]">{activity}</p>
      </div>
    );
}

// 이것도 나눠야 하나
function ButtonModalRepresentatives({ representatives }: { representatives: Representatives[] | undefined }) {
  if (typeof representatives !== 'undefined')
    return (
      <div className="flex px-[14px] ">
        <p className="flex-1 text-[16px] font-bold ">지원 문의</p>
        <div className="flex-1 justify-end ">
          {representatives.map((prod, idx) => (
            <div className="flex justify-end mb-[15px]" key={idx}>
              <p className="mr-[3px]  text-[13px]">{prod.part}</p>
              <p className="mr-[3px]  text-[13px]">{prod.name}</p>
              <p className="mr-[3px]  text-[13px]">{prod.phone}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

// 이거 나눠야 되나
function ButtonModalContent({ content }: { content: ClubInfo | undefined }) {
  if (typeof content !== 'undefined')
    return (
      <div className="flex px-[14px]  ">
        <p className="flex-1 text-[16px] font-bold ">부스 컨텐츠</p>
        <div className="flex flex-col">
          <div className="flex  justify-start  ">
            <p className="text-[13px] mr-2">메뉴 :</p>
            {content.menu?.map((prod, idx) => (
              <p key={idx} className="mr-[3px]  text-[13px] h-[10px]">
                {prod.name}
              </p>
            ))}
          </div>
          <div className="flex">
            <p className="text-[13px] mr-2">활동 : </p>
            <div className="flex flex-col flex-1 justify-end ">
              {content.game?.map((prod, idx) => (
                <p key={idx} className="mb-[10px]  text-[13px] h-[10px]">
                  {prod.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

function ButtonModalInstaLink({ instaLink }: { instaLink: string | undefined }) {
  if (typeof instaLink !== 'undefined')
    return (
      <button className="w-[30%] h-[30px] mx-[auto] border-[1px] rounded-2xl bg-gray-400">
        <Link to={instaLink} className="w-full ">
          <p className="font-bold">SNS 구경가기</p>
        </Link>
      </button>
    );
}

BoothListCard.Button = BoothListButton;
BoothListCard.ButtonBox = BoothListBox;
BoothListCard.BottomModal = BoothBottomModal;

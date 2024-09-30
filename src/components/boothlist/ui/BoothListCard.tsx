import { createContext, useContext, useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';

// components
import { Sheet } from 'react-modal-sheet';
import ImageCard from '../../common/image/ui/ImageCard';

// types
import { boothList, ClubInfo, Representatives } from '../../../constant/boothList';

interface BoothListContext {
  id: number | null;
  isOpen: boolean;
  openModal: (param: number) => void;
  closeModal: () => void;
}

const BoothListContext = createContext<BoothListContext | null>(null);

function useBoothListContext() {
  const ctx = useContext(BoothListContext);

  if (!ctx) {
    throw new Error('boothlistcard에서 사용해주세요');
  }

  return ctx;
}

export default function BoothListCard({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);

  function openModal(selectedId: number) {
    setId(selectedId);
    setIsOpen(true);
  }

  function closeModal() {
    setId(null);
    setIsOpen(false);
  }

  const contextValue = {
    isOpen,
    id,
    openModal,
    closeModal,
  };

  return (
    <BoothListContext.Provider value={contextValue}>
      <div className="h-[100%] bg-white p-[30px] rounded-t-2xl ">{children}</div>
    </BoothListContext.Provider>
  );
}

function Title({ title }: { title: string }) {
  return <h1 className="text-center mb-[20px]">{title}</h1>;
}

function ButtonBox({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div>{children}</div>;
}

function Button({ clubName, clubType, id }: { clubName: string; clubType: string; id: number }) {
  const { openModal } = useBoothListContext();

  return (
    <button onClick={() => openModal(id)} className="flex w-full h-[50px] rounded bg-[#FDF0EE] mb-[10px] items-center">
      <p className="w-[80%] text-left pl-[20px]">{clubName}</p>
      <p>{clubType}</p>
    </button>
  );
}

function Modal() {
  const { isOpen, closeModal, id } = useBoothListContext();
  const [leftOffSet, setLeftOffSet] = useState<number>(0);
  const boothInformation = boothList.filter((prod) => prod.id === id);

  useEffect(() => {
    const container = document.getElementById('container');
    if (container) {
      setLeftOffSet(container.offsetLeft);
    }
  }, []);

  return (
    <Sheet isOpen={isOpen} onClose={closeModal}>
      <Sheet.Container
        style={{
          maxWidth: '480px',
          left: leftOffSet ? `${leftOffSet}px` : `0px`,
        }}
      >
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>
            {boothInformation.map((prod) => {
              return (
                <div key={prod.id} className="flex flex-col p-[20px]">
                  <ModalTitle title={prod.title} />
                  <ModalDescription description={prod.description} />
                  <ModalMapImage map={prod.map} />
                  <ModalBoothInformationBox>
                    <ModalBoothActivity activity={prod.activity} />
                    <ModalBoothRepresentatives representatives={prod.representatives} />
                    <ModalBoothContent content={prod.clubInfo} />
                    <ModalLinkButton snsLink={prod.snsLink} />
                  </ModalBoothInformationBox>
                </div>
              );
            })}
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
function ModalMapImage({ map }: { map: string }) {
  return (
    <div className="w-[60%] mx-auto">
      <ImageCard dirName="boothlist" imageName={map} imageFormat="svg" alt="map-image" />
    </div>
  );
}

function ModalTitle({ title }: { title: string }) {
  return <h1 className="text-center text-[30px] font-bold my-[20px]">{title}</h1>;
}

function ModalDescription({ description }: { description: string }) {
  return <p className="text-[12px] p-[20px]">{description}</p>;
}

function ModalBoothInformationBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return <div className="grid grid-rows-3 gap-5 mt-[30px]">{children}</div>;
}

function ModalBoothActivity({ activity }: { activity: string }) {
  return (
    <div className="flex justify-between">
      <p className="w-[100px] text-[16px] font-bold">주요활동</p>
      <p className="w-[250px] text-[13px]">{activity}</p>
    </div>
  );
}

function ModalBoothRepresentatives({ representatives }: { representatives: Representatives[] }) {
  return (
    <div className="flex justify-between">
      <p className="w-[100px] text-[16px] font-bold">지원 문의</p>

      <div className="w-[250px]">
        {representatives.map((prod, idx) => {
          return (
            <div key={idx} className="flex justify-end">
              <p className=" text-[13px] pr-[5px]">{prod.part}</p>
              <p className=" text-[13px] pr-[5px]">{prod.name}</p>
              <p className=" text-[13px]">{prod.phone} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ModalBoothContent({ content }: { content: ClubInfo }) {
  if (typeof content.menu !== 'undefined' && typeof content.game !== 'undefined') {
    return (
      <div className="flex  justify-between">
        <p className="w-[100px] text-[16px] font-bold">부스 컨텐츠</p>

        <div className="flex flex-col w-[250px]">
          <div className="flex justify-end">
            <p className="text-[13px]">메뉴 : </p>
            {content.menu.map((prod, idx) => {
              return (
                <p key={idx} className="px-[2px] text-[13px]">
                  {prod.name}
                </p>
              );
            })}
          </div>
          <div className="text-right">
            <span className="text-[13px]">활동 : </span>
            {content.game.map((prod, idx) => {
              return (
                <span key={idx} className="px-[2px] text-[13px]">
                  {prod.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function ModalLinkButton({ snsLink }: { snsLink: string }) {
  return (
    <button className="w-[30%] rounded-2xl bg-stone-500 mx-auto text-[13px] font-bold">
      <Link to={snsLink}>SNS 구경가기</Link>
    </button>
  );
}

BoothListCard.Title = Title;
BoothListCard.ButtonBox = ButtonBox;
BoothListCard.Button = Button;
BoothListCard.Modal = Modal;

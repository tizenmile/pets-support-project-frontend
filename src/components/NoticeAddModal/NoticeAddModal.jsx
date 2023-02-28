import { useState } from "react";
import { ModalBackdrop } from "../ModalBackdrop/ModalBackdrop";
import { AllModalWrapper } from "./NoticeAddModal.styled";
import { AddNoticeModalStep1 } from "./NoticeAddModalStep1/NoticeAddModalStep1";
import { AddNoticeModalStep2 } from "./NoticeAddModalStep2/NoticeAddModalStep2";

export const NoticeAddModal = ({ onClose }) => {
  const [isNext, setIsNext] = useState(false);
  const [isNotice, setIsNotice] = useState(null);

  const onSubmit = (notice) => {
    setIsNotice(notice);
  };

  const onStep2 = () => {
    setIsNext(true);
  };

  const onStep1 = () => {
    setIsNext(false);
  };
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <ModalBackdrop>
      <AllModalWrapper onClick={handleBackdropClick}>
        {isNext ? (
          <AddNoticeModalStep2
            onClose={onClose}
            isPrev={onStep1}
            notice={isNotice}
          />
        ) : (
          <AddNoticeModalStep1
            onClose={onClose}
            isNext={onStep2}
            onSubmit={onSubmit}
          />
        )}
      </AllModalWrapper>
    </ModalBackdrop>
    //   </div>
  );
};

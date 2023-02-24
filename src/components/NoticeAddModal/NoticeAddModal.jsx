import { useState } from "react";
import { ModalBackdrop } from "../ModalBackdrop/ModalBackdrop";
import { AddNoticeModalStep1 } from "./NoticeAddModalStep1/NoticeAddModalStep1";
import { AddNoticeModalStep2 } from "./NoticeAddModalStep2/NoticeAddModalStep2";

export const NoticeAddModal = ({ onClose }) => {
  const [isNext, setIsNext] = useState(false);
  const [isNotice, setIsNotice] = useState(null);
  // const [isCategory, setIsCategory] = useState("sell");
  // const [isTitle, setIsTitle] = useState("");
  // const [isPetName, setIsPetName] = useState("");
  // const [isBirthDate, setIsBirthDate] = useState(null);
  // const [isBreed, setIsBreed] = useState(null);

  const onSubmit = (notice) => {
    setIsNotice(notice);
  };

  const onStep2 = () => {
    setIsNext(true);
  };

  const onStep1 = () => {
    setIsNext(false);
  };

  return (
    <ModalBackdrop>
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
    </ModalBackdrop>
  );
};

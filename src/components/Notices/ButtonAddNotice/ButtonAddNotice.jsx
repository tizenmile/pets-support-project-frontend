import { useState } from "react";
import { NoticeAddModal } from "../../NoticeAddModal/NoticeAddModal";
import { AddButtonNotice } from "./ButtonAddNotice.styled";

export const ButtonAddNotice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AddButtonNotice>
        <button onClick={openModal}>create notice</button>
      </AddButtonNotice>
      {isModalOpen && <NoticeAddModal onClose={closeModal} />}
    </>
  );
};

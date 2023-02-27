import { useState } from "react";
// import AddPetBtn from "../../AddPetBtn";
import { NoticeAddModal } from "../../NoticeAddModal/NoticeAddModal";
import { AddPetBtnWrapper } from "../../PetsData/PetsData.styled";
import {
  AddNoticeBtn,
  AddNoticeBtnWarpper,
  AddPetIcon,
  AddNoticeBtnTitle,
  AddNoticeBtnItemText,
} from "./ButtonAddNotice.styled";

export const ButtonAddNotice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AddNoticeBtnWarpper>
      <AddPetBtnWrapper>
        <AddNoticeBtnTitle>Add pet</AddNoticeBtnTitle>
        <AddNoticeBtn onClick={openModal}>
          <div>
            <AddPetIcon />
            <AddNoticeBtnItemText>Add pet</AddNoticeBtnItemText>
          </div>
        </AddNoticeBtn>
        {/* <button onClick={openModal}> create notice</button> */}
      </AddPetBtnWrapper>
      {isModalOpen && <NoticeAddModal onClose={closeModal} />}
    </AddNoticeBtnWarpper>
  );
};

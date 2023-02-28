import { ToastContainer, toast } from "react-toastify";
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

export const ButtonAddNotice = ({ isLoggedIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!isLoggedIn) {
      notifyInfo();
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.removeItem("notice");
    localStorage.removeItem("noticeNextPart");
  };

  const notifyInfo = () => toast.info("You need to log in");

  const clearLS = () => {
    if (isModalOpen === false) {
      localStorage.removeItem("notice");
      localStorage.removeItem("noticeNextPart");
    }
  };
  clearLS();
  return (
    <AddNoticeBtnWarpper>
      <AddPetBtnWrapper>
        <AddNoticeBtnTitle>Add pet</AddNoticeBtnTitle>
        <AddNoticeBtn onClick={openModal}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddPetIcon />
            <AddNoticeBtnItemText>Add pet</AddNoticeBtnItemText>
          </div>
        </AddNoticeBtn>
        {/* <button onClick={openModal}> create notice</button> */}
      </AddPetBtnWrapper>
      {isModalOpen && <NoticeAddModal onClose={closeModal} />}
      <ToastContainer />
    </AddNoticeBtnWarpper>
  );
};

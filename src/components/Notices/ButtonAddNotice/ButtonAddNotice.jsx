import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
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
  const isLogin = useSelector(selectIsLoggedIn);
  const notify = () => toast("You need to login first");
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
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
      </AddPetBtnWrapper>
      {isModalOpen && <NoticeAddModal onClose={closeModal} />}
      <ToastContainer />
    </AddNoticeBtnWarpper>
  );
};

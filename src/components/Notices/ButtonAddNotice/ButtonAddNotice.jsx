import { useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
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
  const isLogin = useSelector(selectIsLoggedIn);
  const notify = () => toast("You need to login first");
  const openModal = () => {
    if (isLogin) {
      setIsModalOpen(true);
    }
    notify();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        {/* <button onClick={openModal}> create notice</button> */}
      </AddPetBtnWrapper>
      {isModalOpen && <NoticeAddModal onClose={closeModal} />}
    </AddNoticeBtnWarpper>
  );
};

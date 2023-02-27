import { useEffect } from "react";
import { ModalBackdrop } from "../../ModalBackdrop/ModalBackdrop";
import { AllModalWrapper } from "../../NoticeAddModal/NoticeAddModal.styled";
import {
  Container,
  ButtonContainer,
  ConfirmModalButton,
} from "./NoticeConfirmModal.styled";

export const NoticeConfirmModal = ({ onClose, deleteNotice }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <ModalBackdrop>
      <AllModalWrapper onClick={handleBackdropClick}>
        <Container>
          <h3 style={{ textAlign: "center" }}>Are you sure?</h3>
          <ButtonContainer>
            <ConfirmModalButton onClick={onClose}>Cancel</ConfirmModalButton>
            <ConfirmModalButton onClick={deleteNotice}>
              Delete notice
            </ConfirmModalButton>
          </ButtonContainer>
        </Container>
      </AllModalWrapper>
    </ModalBackdrop>
  );
};

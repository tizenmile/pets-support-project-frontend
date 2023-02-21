import { createPortal } from "react-dom";
import { ModalWrapper } from "./ModalBackdrop.styled";

export const ModalBackdrop = ({ children }) => {
  return createPortal(
    <ModalWrapper>{children}</ModalWrapper>,
    document.querySelector("#modal-root")
  );
};

import { ModalBackdrop } from "../../ModalBackdrop/ModalBackdrop";
import { Container, ButtonContainer, ConfirmModalButton } from "./NoticeConfirmModal.styled";

export const NoticeConfirmModal = ({onClose, deleteNotice}) => { 
    return (
        <ModalBackdrop>
            <Container>
                <h3 style={{textAlign: 'center'}}>Are you sure?</h3>
                <ButtonContainer>
                    <ConfirmModalButton onClick={onClose}>Cancel</ConfirmModalButton>
                    <ConfirmModalButton onClick={deleteNotice}>Delete notice</ConfirmModalButton>
                </ButtonContainer>
            </Container>
        </ModalBackdrop>
    )
}
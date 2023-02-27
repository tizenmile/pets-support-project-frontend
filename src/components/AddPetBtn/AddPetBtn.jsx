import { AddPetWrapper, AddPetIcon } from "./AddPetBtn.styled";

const AddPetBtn = ({ disabled = false, onClick }) => {
  return (
    <>
      <AddPetWrapper active disabled={disabled} type="button" onClick={onClick}>
        <AddPetIcon />
      </AddPetWrapper>
    </>
  );
};

export default AddPetBtn;

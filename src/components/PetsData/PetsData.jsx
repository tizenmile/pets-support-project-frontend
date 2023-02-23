import { useState } from "react";
import AddPetBtn from "../AddPetBtn";
// import Modal from "../../Modal";
import PetsList from "../PetsList";

import {
  PetsWrapper,
  PetsNav,
  PetsTitle,
  AddPetBtnWrapper,
  AddPetBtnTitle,
} from "./PetsData.styled";

const PetsData = () => {
  // const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleAddPetModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <PetsWrapper>
      <PetsNav>
        <PetsTitle>My pets:</PetsTitle>
        <AddPetBtnWrapper>
          <AddPetBtnTitle>Add pet</AddPetBtnTitle>
          <AddPetBtn onClick={toggleAddPetModal} />
        </AddPetBtnWrapper>
      </PetsNav>

      {/* {!isModalOpen && (
        <Modal type="pet" title="Add pet" onClose={toggleAddPetModal} />
      )} */}

      <PetsList />
    </PetsWrapper>
  );
};

export default PetsData;

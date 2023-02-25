import { useState } from "react";
import AddPetBtn from "../AddPetBtn";
import PetsAddModal from "../PetsAddModal";
import PetsList from "../PetsList";

import {
  PetsWrapper,
  PetsNav,
  PetsTitle,
  AddPetBtnWrapper,
  AddPetBtnTitle,
} from "./PetsData.styled";

const PetsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

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

      {!isModalOpen && <PetsAddModal onClose={toggleAddPetModal} />}

      <PetsList />
    </PetsWrapper>
  );
};

export default PetsData;

import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deletePet } from "../../redux/pets/operations";
import { selectIsDeleting } from "../../redux/pets/selectors";
import { transformDate } from "../../helpers/transformDate.js";
import {
  PetItemWrapper,
  ImgPet,
  PetBoxInfo,
  PetDeleteBtm,
  PetDelIcon,
  InfoPet,
  Title,
} from "./PetsListItem.styled";
import { toast } from "react-toastify";
const PetsListItem = ({ id, name, date, breed, comment, petAvatar }) => {
  const { isDeleting } = useSelector(selectIsDeleting);
  const dispatch = useDispatch();

  const removePet = (id) => {
    dispatch(deletePet(id)).unwrap();
  };

  return (
    <PetItemWrapper>
      <ImgPet src={petAvatar} alt={`${name}`}></ImgPet>
      <PetBoxInfo>
        <PetDeleteBtm
          type="button"
          onClick={() => {
            toast.info("Hooray, pet delete successfully");
            removePet(id);
          }}
          disabled={isDeleting}
        >
          <PetDelIcon />
        </PetDeleteBtm>
        <InfoPet>
          <Title>Name: </Title>
          {name}
        </InfoPet>
        <InfoPet>
          <Title>Date of birth: </Title>
          {transformDate(date)}
        </InfoPet>
        <InfoPet>
          <Title>Breed: </Title>
          {breed}
        </InfoPet>
        <InfoPet>
          <Title>Comments: </Title>
          {comment}
        </InfoPet>
      </PetBoxInfo>
    </PetItemWrapper>
  );
};

export default PetsListItem;

PetsListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  petAvatar: PropTypes.string.isRequired,
  removePet: PropTypes.func,
};

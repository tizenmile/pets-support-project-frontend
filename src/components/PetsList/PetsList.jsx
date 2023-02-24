import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../Loader";
import PetsListItem from "../PetsListItem";
import {
  selectPets,
  selectIsLoading,
  selectError,
} from "../../redux/pets/selectors";
import { fetchPets } from "../../redux/pets/operations";
import { NotFoundPet } from "./PetsList.styled";

const PetsList = () => {
  const pets = useSelector(selectPets);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <NotFoundPet>
          <Loader />
        </NotFoundPet>
      ) : error || pets.length === 0 ? (
        <NotFoundPet>Please add your pet</NotFoundPet>
      ) : (
        !error &&
        !isLoading &&
        pets.map(({ _id, name, date, breed, comments, petAvatar }) => (
          <PetsListItem
            key={_id}
            id={_id}
            name={name}
            date={date}
            breed={breed}
            comment={comments}
            petAvatar={petAvatar}
          />
        ))
      )}
    </>
  );
};

export default PetsList;

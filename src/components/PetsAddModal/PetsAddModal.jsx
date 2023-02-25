import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalBackdrop } from "../ModalBackdrop/ModalBackdrop";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { TfiClose, TfiPlus } from "react-icons/tfi";
import { addNewPet } from "../../redux/pets/operations";
import { selectIsAdding } from "../../redux/pets/selectors";
import {
  FormPage,
  FormBox,
  CloseBtn,
  AcseptButton,
  BackButton,
  AddButton,
  ButtonWrapper,
  FileLable,
  Overlay,
} from "./PetsAddModal.styled";

const PetsAddModal = ({ onClose }) => {
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

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [file, setFile] = useState("");

  const { isAdding } = useSelector(selectIsAdding);

  const dateToday = new Date().toISOString().slice(0, 10);

  const changePage = (value) => {
    setPage(page + value);
  };

  const PetValidationSchema = yup.object({
    name: yup
      .string("Please, enter name of the pet")
      .required("Pet name is required")
      .min(5, "Minimum 5 symbols")
      .max(20, "Maximum 20 symbols")
      .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, "Only letters"),
    date: yup
      .date()
      .required()
      .min("2000-01-01", "The min date is 01.01.2000")
      .max(dateToday, "The max date of birth is today"),
    breed: yup
      .string("Please, enter breed of the pet")
      .required("Field required")
      .min(5, "Minimum 5 symbols")
      .max(20, "Maximum 20 symbols")
      .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, "Only letters"),
    petAvatar: yup.string(""),
    comments: yup
      .string()
      .min(5, "Minimum 5 symbols")
      .max(200, "Maximum 200 symbols")
      .required("Field required"),
  });

  const { handleSubmit, handleBlur, values, handleChange, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        date: "",
        breed: "",
        image: "",
        comments: "",
      },
      PetValidationSchema,
      onSubmit: (values) => {
        const formData = new FormData();

        for (let value in values) {
          if (values[value].length > 0) {
            formData.append(value, values[value]);
          }
        }

        if (file) {
          formData.set("image", file);
        }

        dispatch(addNewPet(formData));
        onClose();
      },
    });

  const [yourImage, setYourImage] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/*": [".png", ".jpg"],
    },
    onDrop: (acceptedFiles) => {
      setYourImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );

      setFile(acceptedFiles[0]);
    },
  });
  return (
    <ModalBackdrop>
      <Overlay onClick={handleBackdropClick}>
        <FormBox secondPage={page === 2}>
          <form onSubmit={handleSubmit}>
            <CloseBtn type="button" onClick={onClose}>
              <TfiClose />
            </CloseBtn>
            <h3>Add pet</h3>
            <FormPage isHidden={page === 2} isEmpty={values.date === ""}>
              <label>
                Name pet
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  placeholder="Type name pet"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name || touched.name ? <p>{errors.name}</p> : null}
              </label>
              <label>
                Date of birth
                <input
                  type="date"
                  name="date"
                  value={values.date}
                  min="2000-01-01"
                  max={dateToday}
                  placeholder="Type date of birth"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.date || touched.date ? (
                  <p>{!values.date ? "Date must be a valid" : errors.date}</p>
                ) : null}
              </label>
              <label>
                Breed
                <input
                  type="text"
                  name="breed"
                  value={values.breed}
                  placeholder="Type breed"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.breed || touched.breed ? <p>{errors.breed}</p> : null}
              </label>
              <ButtonWrapper>
                <BackButton type="button" onClick={onClose}>
                  Cancel
                </BackButton>
                <AcseptButton
                  type="button"
                  onClick={() => {
                    const { name, date, breed } = values;
                    if (!name || !date || !breed) {
                      toast.info("Please fill in required fields");
                      return;
                    }
                    changePage(1);
                  }}
                >
                  Next
                </AcseptButton>
              </ButtonWrapper>
            </FormPage>
            <FormPage isHidden={page === 1}>
              <h4>Add photo and some comments</h4>
              <FileLable {...getRootProps()}>
                <input {...getInputProps()} name="image" value={values.image} />
                <AddButton>
                  {isDragActive ? null : (
                    <>
                      <TfiPlus />
                      <span>Click or Drop file</span>
                    </>
                  )}
                </AddButton>
                <div>
                  {yourImage.map((upFile) => {
                    return (
                      <div key={upFile}>
                        <img src={upFile.preview} alt="pet-avatar" />
                      </div>
                    );
                  })}
                </div>
                {/* {!file && <p>Image required</p>} */}
              </FileLable>

              <label>
                Comments
                <textarea
                  name="comments"
                  value={values.comments}
                  placeholder="Type comments"
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                {errors.comments || touched.comments ? (
                  <p>{errors.comments}</p>
                ) : null}
              </label>
              <ButtonWrapper>
                <BackButton
                  type="button"
                  onClick={() => {
                    changePage(-1);
                  }}
                >
                  Back
                </BackButton>
                <AcseptButton type="submit" disabled={isAdding}>
                  Done
                </AcseptButton>
              </ButtonWrapper>
            </FormPage>
          </form>
        </FormBox>
      </Overlay>
    </ModalBackdrop>
  );
};

export default PetsAddModal;

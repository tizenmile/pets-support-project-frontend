import * as yup from "yup";

export const dateToday = new Date().toISOString().slice(0, 10);

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Pet name is required")
    .min(2, "Minimum 2 symbols")
    .max(16, "Maximum 16 symbols")
    .matches(/^[a-zA-Zа-щА-ЩґҐіІїЇєЄ']+$/, "Only letters"),
  date: yup
    .date()
    .required()
    .min("2000-01-01", "The min date is 01.01.2000")
    .max(dateToday, "The max date of birth is today"),
  breed: yup
    .string()
    .required("Field required")
    .min(2, "Minimum 2 symbols")
    .max(16, "Maximum 16 symbols")
    .matches(/^[a-zA-Zа-щА-ЩґҐіІїЇєЄ']+$/, "Only letters"),
  petAvatar: yup.string(),
  comments: yup
    .string()
    .min(8, "Minimum 8 symbols")
    .max(120, "Maximum 120 symbols")
    .required("Field required"),
});

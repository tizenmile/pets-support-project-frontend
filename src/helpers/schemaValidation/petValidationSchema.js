import * as yup from "yup";

export const dateToday = new Date().toISOString().slice(0, 10);

export const validationSchema = yup.object().shape({
  name: yup
    .string()
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
    .string()
    .required("Field required")
    .min(5, "Minimum 5 symbols")
    .max(20, "Maximum 20 symbols")
    .matches(/^[a-zA-Zа-яА-Я-`'іІїЇ]*$/, "Only letters"),
  petAvatar: yup.string(),
  comments: yup
    .string()
    .min(5, "Minimum 5 symbols")
    .max(200, "Maximum 200 symbols")
    .required("Field required"),
});

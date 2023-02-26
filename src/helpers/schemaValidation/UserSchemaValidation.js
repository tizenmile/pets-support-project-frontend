import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(2, "Username must be at least 2 characters")
    .max(30, "Username must be less than 30 characters")
    .matches(
      /^[a-zA-Zа-щА-ЩЬьЮюЯяІіЇїЄєҐґ\s]+$/,
      "Username can only contain letters and spaces"
    ),
  email: Yup.string()
    .required("Required")
    .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email"),

  mobile: Yup.string()
    .matches(/^[+](380)[0-9]{9}$/, "Invalid phone number")
    .required("Required"),
  city: Yup.string()
    .required("Required")
    .max(30, "City name must be less than 30 characters")
    .matches(
      /^(([a-zA-Zа-яА-Я`'іІїЇ]([-]?)){1,})([^-,?,\s,.,0-9,!])+(,)+((\s?[a-zA-Zа-яА-Я`'іІїЇ](([-]?){0,1})){1,})([^-,?,.,\s,0-9,!])$/,
      "Example: Lviv, Karpaty"
    ),
  birthday: Yup.date().required("Required"),
});

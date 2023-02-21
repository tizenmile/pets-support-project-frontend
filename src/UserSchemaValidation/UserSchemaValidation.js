import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters")
    .matches(
      /^[a-zA-Zа-щА-ЩЬьЮюЯяІіЇїЄєҐґ\s]+$/,
      "Username can only contain letters and spaces"
    ),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .max(255, "Email must be less than 255 characters"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Required"),
  city: Yup.string()
    .required("Required")
    .max(30, "City name must be less than 30 characters")
    .matches(
      /^[a-zA-Zа-щА-ЩЬьЮюЯяІіЇїЄєҐґ\s]+$/,
      "City name can only contain letters and spaces"
    ),
  birthday: Yup.date().required("Required"),
});

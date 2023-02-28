import * as Yup from "yup";

export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(2, "Username must be at least 2 characters")
    .max(16, "Username must be less than 16 characters")
    .matches(
      /^[a-zA-Zа-щА-ЩЬьЮюЯяІіЇїЄєҐґ\s]+$/,
      "Username can only contain letters and spaces"
    ),
  email: Yup.string()
    .required("Required")
    .matches(
      /^[a-zA-Z0-9._][a-zA-Z0-9._-]{0,}[a-zA-Z0-9._-]{0,}[a-zA-Z0-9._]@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/,
      "Invalid email"
    ),

  mobile: Yup.string()
    .matches(/^[+](380)[0-9]{9}$/, "Invalid phone number")
    .required("Required"),
  city: Yup.string()
    .required("Required")
    .max(2, "City name must be less than 30 characters")
    .max(30, "City name must be less than 30 characters")
    .matches(/^[^\d]*$/u, "Example: Kamyanets-Podilsky"),
  birthday: Yup.date().required("Required"),
});

// /^[a-zA-Z0-9._][a-zA-Z0-9._-]{0,}[a-zA-Z0-9._-]{0,}[a-zA-Z0-9._]@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/

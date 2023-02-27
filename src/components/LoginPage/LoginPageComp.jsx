import { useDispatch } from "react-redux";
import * as Yup from "yup";
import isEmail from "validator/lib/isEmail";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer} from "react-toastify";
import {BiHide, BiShow} from "react-icons/bi";
import { IconContext } from "react-icons";

import {
  LoginPageContainer,
  LoginPageTitle,
  LoginPageFormContainer,
  LoginPageFormInput,
  LoginPageButton,
  LoginPageDescription,
  LoginPageDescriptionLink,
} from "./LoginPageCompStyle";

import { useState } from "react";
import { logIn } from "../../redux/auth/operations";
import { FormError } from "../RegistrationPage/AuthForm";
import { PasswordField, PasswordShowHideButton } from "../RegistrationPage/RegistrationPageCompStyle";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .max(63, "Must be between 6 and 63 characters.")
    .min(6, "Must be between 6 and 63 characters.")
    .email("Invalid email address")
    .matches(
      /[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/,
      "The @ symbol must be preceded by at least 2 characters"
    )
    .required("Email is required")
    .test(
      "is-valid",
      (message) => `${message.path} is invalid`,
      (value) =>
        value ? isEmail(value) : new Yup.ValidationError("Invalid value")
    ),
  password: Yup.string()
    .min(7, "Must be between 7 and 32 characters.")
    .max(32, "Must be between 7 and 32 characters.")
    .matches(
      /^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$/,
      "Must include numbers and/or letters (uppercase and lowercase) except for whitespace."
    )
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const [data, setData] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(logIn(e));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
     <Formik
      initialValues={data}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <LoginPageContainer>
          <LoginPageFormContainer>
            <LoginPageTitle>Login</LoginPageTitle>
            <LoginPageFormInput
              placeholder="Email"
              name="email"
            ></LoginPageFormInput>
            <FormError name="email" />
             <PasswordField><LoginPageFormInput
            placeholder="Password"
            name="password"
            type = {showPassword? "text": "password"}
          />
          <PasswordShowHideButton onClick={togglePassword}>
            <IconContext.Provider value={{ color: "rgba(245, 146, 86, 1)", size: 35}}>
              {showPassword? <BiHide/>:<BiShow/>}
            </IconContext.Provider>
          </PasswordShowHideButton>
          
          </PasswordField>
            <FormError name="password" />
            <LoginPageButton type="submit">Login</LoginPageButton>
            <LoginPageDescription>
              Don't have an account?
              <LoginPageDescriptionLink to="/register">
                Register
              </LoginPageDescriptionLink>
            </LoginPageDescription>
          </LoginPageFormContainer>
        </LoginPageContainer>
      )}
    </Formik>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
    </>
   
  );
};

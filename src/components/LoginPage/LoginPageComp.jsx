import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .max(63)
    .min(6)
    .email("Invalid email address")
    .required()
    .label("Email"),
  password: Yup.string().min(7).max(32).required().label("Password"),
});

const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const [data, setData] = useState(initialValues);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(logIn(e));
  };

  return (
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
            <LoginPageFormInput
              placeholder="Password"
              name="password"
            ></LoginPageFormInput>
            <LoginPageButton type="submit">Login</LoginPageButton>
            <LoginPageDescription>
              Don't have an account?
              <LoginPageDescriptionLink>Register</LoginPageDescriptionLink>
            </LoginPageDescription>
          </LoginPageFormContainer>
        </LoginPageContainer>
      )}
    </Formik>
  );
};

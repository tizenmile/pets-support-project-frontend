import { useDispatch } from "react-redux";
import * as Yup from "yup";
import isEmail from "validator/lib/isEmail";
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
import { FormError } from "../RegistrationPage/AuthForm";

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
            <FormError name="email" />
            <LoginPageFormInput
              placeholder="Password"
              type="password"
              name="password"
            ></LoginPageFormInput>
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
  );
};

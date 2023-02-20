import { useDispatch } from "react-redux";

import { Formik, Form, Field } from 'formik';

import { register } from "../../redux/auth/operations";
import {
  RegistrationPageFormInput,
  RegistrationPageButton,
  RegistrationPageFormContainer
} from "./RegistrationPageCompStyle";
import { useState } from "react";

const initialValues = {
email: "", 
 password: "",
 name: "", 
 city: "",
 mobile: "", 
}

export const AuthForm = () => {
  const [currentStepsIsFirst, setcurrentStepsIsFirst] = useState(true)
  const [currentStepsIsSecond, setcurrentStepsIsSecond] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    console.log("values", values);
    console.log("actions", actions);
    // e.preventDefault();
    // const form = e.currentTarget;
    // dispatch(
    //   register({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //     name: form.elements.name.value,
    //     city: form.elements.city.value,
    //     mobile: form.elements.mobile.value
    //   })
    // );
    // form.reset();
  };

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}>
      <Form autoComplete="off">
        {currentStepsIsFirst && <>
          <Field 
        placeholder="Email" 
        type="email" 
        name="email"/>
      <Field 
        placeholder="Password" 
        type="password" 
        name="password"/>
      <Field 
        placeholder="Confirm Password" 
        type="password" 
        name="confirmPassword"/>
      <button>Next</button></>}
         {currentStepsIsSecond && <>
          <Field 
        placeholder="Name" 
        type="text" 
        name="name"/>
      <Field 
        placeholder="City, region" 
        type="text" 
        name="city"/>
      <Field 
        placeholder="Mobile phone" 
        type="text" 
        name="mobile"/>
      <button type="submit">Register</button>
      <button>Back</button></>}
    </Form>
    </Formik>
  );
};
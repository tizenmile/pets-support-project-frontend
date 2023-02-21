import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { register } from "../../redux/auth/operations";
import {
  RegistrationPageFormInput,
  RegistrationPageForm,
  RegistrationPageButton,
  RegistrationPageFormContainer
} from "./RegistrationPageCompStyle";
import { useState } from "react";

const stepOneValidationSchema = Yup.object().shape({
  email: Yup.string()
    .max(63)
    .min(6)
    .email("Invalid email address")
    .required().label("Email"),
  password: Yup.string()
    .min(7)
    .max(32)
    .required().label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
})

const stepTwoValidationSchema  = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  city: Yup.string().required().label("City, region"),
  mobile: Yup.string().min(13).max(13).required().label("Mobile phone")
})

const initialValues = {
  email: "", 
  password: "",
  name: "", 
  city: "",
  mobile: "", 
}

export const AuthForm = () => {
  const [data, setData] = useState(initialValues)
  const [currentStep, setCurrentStep] = useState(0)

  const dispatch = useDispatch()

  const makeRequest = (formData) => {
    console.log(formData);
      dispatch(
        register(formData)
      );
  }

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({...prev, ...newData }))

    if (final) {
      makeRequest(newData)
      return
    }

    setCurrentStep(prev => prev + 1)
  }

  const handlePrevStep = (newData) => {
    setData(prev => ({...prev, ...newData }))
    setCurrentStep(prev => prev - 1)
  }

  const steps = [
  <StepOne next={handleNextStep} data={data}/>, 
  <StepTwo next={handleNextStep} prev={handlePrevStep} data={data}/>
]

  return (
    <>
      {steps[currentStep]}
    </>
  );
};

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values)
  }

  return <Formik
            initialValues={props.data}
            validationSchema={stepOneValidationSchema}
            onSubmit={handleSubmit}>
    {() => (
      
          <RegistrationPageForm>
            <RegistrationPageFormInput placeholder="Email" name="email"/>
            <ErrorMessage name="email"/>
            <RegistrationPageFormInput placeholder="Password" name="password"/>
            <ErrorMessage name="password"/>
            <RegistrationPageFormInput placeholder="Confirm Password"  name="confirmPassword"/>
            <ErrorMessage name="confirmPassword"/>

            <RegistrationPageButton type="submit">Next</RegistrationPageButton>
          </RegistrationPageForm>
          
       
    )}
  </Formik>
}

const StepTwo = (props) => {
  const handleSubmit = (values, actions) => {
    props.next(values, true)
  }

  return <Formik
            initialValues={props.data}
            validationSchema={stepTwoValidationSchema}
            onSubmit={handleSubmit}>
    {({values}) => (
       
          <RegistrationPageForm>
            <RegistrationPageFormInput placeholder="Name" name="name"/>
            <ErrorMessage name="name"/>
            <RegistrationPageFormInput placeholder="City, region" name="city"/>
            <ErrorMessage name="city"/>
            <RegistrationPageFormInput placeholder="Mobile phone" name="mobile"/>
            <ErrorMessage name="mobile"/>

            <RegistrationPageButton type="submit">Register</RegistrationPageButton>
            <RegistrationPageButton type="button" onClick={()=>props.prev(values)}>Back</RegistrationPageButton>
          </RegistrationPageForm>
        
    )}
  </Formik>
}
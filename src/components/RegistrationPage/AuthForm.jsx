import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import isEmail from 'validator/lib/isEmail';
import { Formik, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

import { register } from "../../redux/auth/operations";
import {
  RegistrationPageFormInput,
  RegistrationPageForm,
  RegistrationPageButton,
  ErrorText,
} from "./RegistrationPageCompStyle";
import { useState } from "react";

const stepOneValidationSchema = Yup.object().shape({
  email: Yup.string()
    .max(63, "Must be between 6 and 63 characters.")
    .min(6, "Must be between 6 and 63 characters.")
    .email("Invalid email address")
    .matches(/[a-zA-Z]([-.\s]?[0-9a-zA-Z_-]){1,}@/, "The @ symbol must be preceded by at least 2 characters")
    .required("Email is required")
    .test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmail(value) : new yup.ValidationError("Invalid value")),
  password: Yup.string()
    .min(7, "Must be between 7 and 32 characters.")
    .max(32, "Must be between 7 and 32 characters.")
    .matches(/^([-.\s]?[a-zA-Zа-яёА-ЯЁ0-9]*)*$/)
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
})

const stepTwoValidationSchema  = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  city: Yup.string().required("City, region are required"),
  mobile: Yup.string().length(13, "For example +380##########. Must be 13 characters.").required("Mobile phone is required")
})

const initialValues = {
  email: "", 
  password: "",
  name: "", 
  city: "",
  mobile: "", 
}

const FormError = ({name}) => {
  return (
    <ErrorMessage 
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}/>
  )
}

export const AuthForm = () => {
  const [data, setData] = useState(initialValues)
  const [currentStep, setCurrentStep] = useState(0)

  const dispatch = useDispatch()

  const makeRequest = (formData) => {
    const {email, password, name, city, mobile} = formData
      dispatch(
        register({email, password, name, city, mobile})
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
        theme="colored"></ToastContainer>
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
            <RegistrationPageFormInput placeholder="Email" type="email" name="email"/>
            <FormError name="email"/>
            <RegistrationPageFormInput placeholder="Password" type="password"  name="password"/>
            <FormError name="password"/>
            <RegistrationPageFormInput placeholder="Confirm Password" type="password" name="confirmPassword"/>
            <FormError name="confirmPassword"/>

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
            <RegistrationPageFormInput placeholder="Name" type="text" name="name"/>
            <FormError name="name"/>
            <RegistrationPageFormInput placeholder="City, region" type="text" name="city"/>
            <FormError name="city"/>
            <RegistrationPageFormInput placeholder="Mobile phone" type="text"  name="mobile"/>
            <FormError name="mobile"/>

            <RegistrationPageButton type="submit">Register</RegistrationPageButton>
            <RegistrationPageButton type="button" onClick={()=>props.prev(values)}>Back</RegistrationPageButton>
          </RegistrationPageForm>
        
    )}
  </Formik>
}
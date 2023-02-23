import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import {
  RegistrationPageFormInput,
  RegistrationPageForm,
  RegistrationPageButton,
  RegistrationPageFormContainer,
  ErrorText,
} from "./RegistrationPageCompStyle";
import { useState } from "react";

const stepOneValidationSchema = Yup.object().shape({
  email: Yup.string()
    .max(63, "Must be between 6 and 63 characters.")
    .min(6, "Must be between 6 and 63 characters.")
    .email("Invalid email address")
    .required()
    .label("Email"),
  password: Yup.string().min(7).max(32).required().label("Password"),
  confirmPassword: Yup.string()
    .min(7)
    .max(32)
    .required()
    .label("Confirm password"),
});

const stepTwoValidationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  city: Yup.string().required().label("City, region"),
  mobile: Yup.string().min(13).max(13).required().label("Mobile phone"),
});

const initialValues = {
  email: "",
  password: "",
  name: "",
  city: "",
  mobile: "",
};

const FormError = ({name}) => {
  return (
    <ErrorMessage 
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}/>
  )
}

export const AuthForm = () => {
  const [data, setData] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(0);

  const dispatch = useDispatch();

  const makeRequest = (formData) => {
    console.log(formData);
    dispatch(register(formData).selected("-confirmPassword"));
  };


  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];
  
  return <>{steps[currentStep]}</>;

};

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={stepOneValidationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <RegistrationPageForm>
          <RegistrationPageFormInput placeholder="Email" name="email" />
          <ErrorMessage name="email" />
          <RegistrationPageFormInput placeholder="Password" name="password" />
          <ErrorMessage name="password" />
          <RegistrationPageFormInput
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <ErrorMessage name="confirmPassword" />

          <RegistrationPageButton type="submit">Next</RegistrationPageButton>
        </RegistrationPageForm>
      )}
    </Formik>
  );
};

const StepTwo = (props) => {
  const handleSubmit = (values, actions) => {
    props.next(values, true);
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={stepTwoValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <RegistrationPageForm>
          <RegistrationPageFormInput placeholder="Name" name="name" />
          <ErrorMessage name="name" />
          <RegistrationPageFormInput placeholder="City, region" name="city" />
          <ErrorMessage name="city" />
          <RegistrationPageFormInput placeholder="Mobile phone" name="mobile" />
          <ErrorMessage name="mobile" />

          <RegistrationPageButton type="submit">
            Register
          </RegistrationPageButton>
          <RegistrationPageButton
            type="button"
            onClick={() => props.prev(values)}
          >
            Back
          </RegistrationPageButton>
        </RegistrationPageForm>
      )}
    </Formik>
  );
};


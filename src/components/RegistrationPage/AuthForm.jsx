import { useDispatch } from "react-redux";
import * as Yup from "yup";
import isEmail from "validator/lib/isEmail";
import { Formik, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { register } from "../../redux/auth/operations";
import {BiHide, BiShow} from "react-icons/bi";
import { IconContext } from "react-icons";
import {
  RegistrationPageFormInput,
  RegistrationPageForm,
  RegistrationPageButton,
  ErrorText,
  RegisterPrevButtonStyled,
  PasswordShowHideButton,
  PasswordField,
} from "./RegistrationPageCompStyle";
import { useState } from "react";

const notify = (msg) =>
  toast.info(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const stepOneValidationSchema = Yup.object().shape({
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
    .matches(/^\S*$/, 'Password must not contain spaces')
    .required("Password is required"),
});

const stepTwoValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  city: Yup.string().required("City, region are required"),
  mobile: Yup.string()
    .length(13, "For example +380##########. Must be 13 characters.")
    .matches("^[+](380)[0-9]{9}$", "For example +380##########. Must be 13 characters.")
    .required("Mobile phone is required"),
});

const initialValues = {
  email: "",
  password: "",
  name: "",
  city: "",
  mobile: "",
};

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const AuthForm = () => {
  const [data, setData] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const dispatch = useDispatch();

  const makeRequest = (formData) => {
    const { email, password, name, city, mobile } = formData;
    dispatch(register({ email, password, name, city, mobile }));
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
    <StepOne 
      next={handleNextStep} 
      data={data} 
      showPassword={showPassword} 
      togglePassword={() => togglePassword()}
      showConfirmPassword={showConfirmPassword} 
      toggleConfirmPassword={() => toggleConfirmPassword()}/>,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

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
        theme="colored"
      ></ToastContainer>
    </>
  );
};

const StepOne = (props) => {
  const {showPassword, togglePassword, showConfirmPassword, toggleConfirmPassword,} = props;

  const handleSubmit = (values) => {
    if(!values.confirmPassword){
      notify("Confirm password is required")
      return
    } 

    if (values.confirmPassword === values.password) {
      props.next(values);
    }

    if (values.confirmPassword !== values.password) {
      notify("Passwords must match")
    }
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={stepOneValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values}) => (
        <RegistrationPageForm>
          <RegistrationPageFormInput
            placeholder="Email"
            type="email"
            name="email"
            value={values.email || ""}
          />
          <FormError name="email" />
          <PasswordField><RegistrationPageFormInput
            placeholder="Password"
            name="password"
            value={values.password || ""}
            type = {showPassword? "text": "password"}
          />
          <PasswordShowHideButton onClick={togglePassword}>
            <IconContext.Provider value={{ color: "rgba(245, 146, 86, 1)", size: 35}}>
              {showPassword? <BiHide/>:<BiShow/>}
            </IconContext.Provider>
          </PasswordShowHideButton>
          
          </PasswordField>
          <FormError name="password" />
          <PasswordField>
          <RegistrationPageFormInput
            placeholder="Confirm Password"
            type = {showConfirmPassword? "text": "password"}
            name="confirmPassword"
            validate = {Yup.string()}
          />
          <PasswordShowHideButton onClick={toggleConfirmPassword}>
            <IconContext.Provider value={{ color: "rgba(245, 146, 86, 1)", size: 35}}>
              {showConfirmPassword? <BiHide/>:<BiShow/>}
            </IconContext.Provider>
          </PasswordShowHideButton>
          
          </PasswordField>
          <FormError name="confirmPassword" />
          <RegistrationPageButton type="submit" >Next</RegistrationPageButton>
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
          <RegistrationPageFormInput
            placeholder="Name"
            type="text"
            name="name"
            value={values.name || ""}
          />
          <FormError name="name" />
          <RegistrationPageFormInput
            placeholder="City, region"
            type="text"
            name="city"
            value={values.city || ""}
          />
          <FormError name="city" />
          <RegistrationPageFormInput
            placeholder="Mobile phone"
            type="text"
            name="mobile"
            value={values.mobile || ""}
          />
          <FormError name="mobile" />

          <RegistrationPageButton type="submit">
            Register
          </RegistrationPageButton>
          <RegisterPrevButtonStyled
            type="button"
            onClick={() => props.prev(values)}
          >
            Back
          </RegisterPrevButtonStyled>
        </RegistrationPageForm>
      )}
    </Formik>
  );
};

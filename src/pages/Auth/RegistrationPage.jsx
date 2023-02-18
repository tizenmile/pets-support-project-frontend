import { AuthForm } from "../../components/RegistrationPage/AuthForm";
import {
  RegistrationPageContainer,
  RegistrationPageTitle,
  RegistrationPageFormContainer,
  RegistrationPageDescription,
  RegistrationPageDescriptionLink,
} from "../../styles/RegistrationPageCompStyle";

const RegisterPage = () => {
  return (
    <RegistrationPageContainer>
    <RegistrationPageFormContainer>
      <RegistrationPageTitle>Registration</RegistrationPageTitle>
      <AuthForm/>
      <RegistrationPageDescription>
        Already have an account?
        <RegistrationPageDescriptionLink>
          Login
        </RegistrationPageDescriptionLink>
      </RegistrationPageDescription>
    </RegistrationPageFormContainer>
  </RegistrationPageContainer>
  );
};

export default RegisterPage;
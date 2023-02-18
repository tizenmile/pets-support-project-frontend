import {
  RegistrationPageContainer,
  RegistrationPageTitle,
  RegistrationPageFormContainer,
  RegistrationPageFormInput,
  RegistrationPageButton,
  RegistrationPageDescription,
  RegistrationPageDescriptionLink,
} from "../../styles/RegistrationPageCompStyle";

export const RegistrationPage = () => {
  return (
    <RegistrationPageContainer>
      <RegistrationPageFormContainer>
        <RegistrationPageTitle>Registration</RegistrationPageTitle>
        <RegistrationPageFormInput placeholder="Email"></RegistrationPageFormInput>
        <RegistrationPageFormInput placeholder="Password"></RegistrationPageFormInput>
        <RegistrationPageFormInput placeholder="Confirm Password"></RegistrationPageFormInput>
        <RegistrationPageButton>Next</RegistrationPageButton>
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

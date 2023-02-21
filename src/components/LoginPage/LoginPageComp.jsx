import {
  LoginPageContainer,
  LoginPageTitle,
  LoginPageFormContainer,
  LoginPageFormInput,
  LoginPageButton,
  LoginPageDescription,
  LoginPageDescriptionLink,
} from "./LoginPageCompStyle";

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginPageFormContainer>
        <LoginPageTitle>Login</LoginPageTitle>
        <LoginPageFormInput placeholder="Email"></LoginPageFormInput>
        <LoginPageFormInput placeholder="Password"></LoginPageFormInput>
        <LoginPageButton>Login</LoginPageButton>
        <LoginPageDescription>
          Don't have an account?
          <LoginPageDescriptionLink>Register</LoginPageDescriptionLink>
        </LoginPageDescription>
      </LoginPageFormContainer>
    </LoginPageContainer>
  );
};

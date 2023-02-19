import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import {
  RegistrationPageFormInput,
  RegistrationPageButton,
} from "./RegistrationPageCompStyle";

export const AuthForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        email: form.elements.email.value,
        password: form.elements.password.value,
        name: form.elements.name.value,
        city: form.elements.city.value,
        mobile: form.elements.mobile.value
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <RegistrationPageFormInput 
        placeholder="Email" 
        type="email" 
        name="email"></RegistrationPageFormInput>
      <RegistrationPageFormInput 
        placeholder="Password" 
        type="password" 
        name="password"></RegistrationPageFormInput>
      <RegistrationPageFormInput 
        placeholder="Confirm Password" 
        type="password" 
        name="confirmPassword"></RegistrationPageFormInput>
      <RegistrationPageButton>Next</RegistrationPageButton>
      <RegistrationPageFormInput 
        placeholder="Name" 
        type="text" 
        name="name"></RegistrationPageFormInput>
      <RegistrationPageFormInput 
        placeholder="City, region" 
        type="text" 
        name="city"></RegistrationPageFormInput>
      <RegistrationPageFormInput 
        placeholder="Mobile phone" 
        type="text" 
        name="mobile"></RegistrationPageFormInput>
      <RegistrationPageButton type="submit">Register</RegistrationPageButton>
      <RegistrationPageButton>Back</RegistrationPageButton>
      {/* <FirstStep/>
      <SecondStep/> */}
    </form>
  );
};


const FirstStep = () => {
  return(
    <>
      <RegistrationPageFormInput 
        placeholder="Email" 
        type="email" 
        name="email"></RegistrationPageFormInput>
      <RegistrationPageFormInput 
        placeholder="Password" 
        type="password" 
        name="password"></RegistrationPageFormInput>
      <RegistrationPageFormInput 
        placeholder="Confirm Password" 
        type="password" 
        name="confirmPassword"></RegistrationPageFormInput>
      <RegistrationPageButton>Next</RegistrationPageButton>
      
    </>
  )
}

const SecondStep = () => {
  return(
    <>
      <RegistrationPageFormInput 
        placeholder="Name" 
        type="text" 
        name="name"></RegistrationPageFormInput>
      <RegistrationPageFormInput 
        placeholder="City, region" 
        type="text" 
        name="city"></RegistrationPageFormInput>
      <RegistrationPageFormInput 
        placeholder="Mobile phone" 
        type="text" 
        name="mobile"></RegistrationPageFormInput>
      <RegistrationPageButton type="submit">Register</RegistrationPageButton>
      <RegistrationPageButton>Back</RegistrationPageButton>
    </>
  )
}
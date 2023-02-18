import { LoginButtonStyled } from "../../styles/LoginStyle";
import React from "react";
import { Link } from "react-router-dom";
export const LoginButton = () => {
  return (
    <LoginButtonStyled component={Link} to="/Login">
      Login
    </LoginButtonStyled>
  );
};

import { RegisterButtonStyled } from "../../styles/RegisterStyle";
import React from "react";
import { Link } from "react-router-dom";

export const RegisterButton = () => {
  return (
    <RegisterButtonStyled component={Link} to="/Registration">
      Registration
    </RegisterButtonStyled>
  );
};

import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterButtonStyled = styled(Link)`
  display: flex;
  margin-left: 20px;
  list-style: none;
  padding: 0px;
  background: #ffffff;
  border-radius: 40px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;
  border: 2px solid #f59256;
  padding: 10px 28px;
  cursor: pointer;
  &:hover {
    background: #dc712f;
    border: 2px solid #dc712f;
    color: #ffffff;
  }
`;

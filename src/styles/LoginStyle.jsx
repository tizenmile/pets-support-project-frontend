import styled from "styled-components";
import { Link } from "react-router-dom";
export const LoginButtonStyled = styled(Link)`
  display: flex;

  list-style: none;
  padding: 0px;
  background: #f59256;
  border-radius: 40px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  padding: 10px 28px;
  cursor: pointer;
  &:hover {
    background: #dc712f;
  }
`;

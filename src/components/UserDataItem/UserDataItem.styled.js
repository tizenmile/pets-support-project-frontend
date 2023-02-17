import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";

export const EditTextBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: #fdf7f2;
  color: #f59256;
  cursor: pointer;
  :hover,
  :focus {
    color: #ff6101;
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
  :disabled {
    color: grey;
  }
`;

export const EditTextBtnIcon = styled(HiPencil)`
  width: 13px;
  height: 13px;
  fill: currentColor;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const IconCheck = styled(BsCheckLg)`
  width: 10px;
  height: 8px;
  fill: currentColor;
  @media screen and (min-width: 768px) {
    width: 17px;
    height: 13px;
  }
`;

export const UserDataInput = styled.input`
  ${"" /* padding: 4px 18px; */}
  width: 159px;
  height: 24px;
  ${
    "" /* background-color: ${(p) =>
    p.disabled
      ? p.theme.colors.secondaryBackground
      : p.theme.colors.mainBackground};
  border: ${(p) => (p.disabled ? "none" : p.theme.borders.inputModal)}; */
  }
  border-color: rgba(245, 146, 86, 0.5);
  color: #111111;
  border-radius: 40px;
  font-size: 12px;
  font-weight: 400;
  :focus {
    outline-color: rgba(245, 146, 86, 0.5);
  }
  @media screen and (min-width: 768px) {
    width: 216px;
    height: 32px;
    padding: 4px 12px;
    font-size: 18px;
  }
`;

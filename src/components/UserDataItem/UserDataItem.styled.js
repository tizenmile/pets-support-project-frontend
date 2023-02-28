import styled from "styled-components";
import { HiPencil } from "react-icons/hi";
import { BsCheckLg } from "react-icons/bs";
import { Form } from "formik";

export const EditTextBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(p) => p.theme.space[0]};
  width: 20px;
  height: 20px;
  border-radius: ${(p) => p.theme.radii.round};
  border: none;
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.accent};
  cursor: pointer;
  :hover,
  :focus {
    color: ${(p) => p.theme.colors.active};
  }
  @media ${(p) => p.theme.media.tablet} {
    width: ${(p) => p.theme.space[5]}px;
    height: ${(p) => p.theme.space[5]}px;
  }
  :disabled {
    color: grey;
  }
`;

export const EditTextBtnIcon = styled(HiPencil)`
  width: 13px;
  height: 13px;
  fill: currentColor;
  @media ${(p) => p.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`;
export const IconCheck = styled(BsCheckLg)`
  width: 10px;
  height: 8px;
  fill: currentColor;
  @media ${(p) => p.theme.media.tablet} {
    width: 17px;
    height: 13px;
  }
`;

export const UserDataInput = styled.input`
  width: 159px;
  height: 24px;
  padding: 4px 18px;
  background-color: ${(p) =>
    p.disabled ? p.theme.colors.white : p.theme.colors.background};
  border: ${(p) => (p.disabled ? "none" : p.theme.borders.normal)};
  border-color: ${(p) => p.theme.colors.active};
  color: ${(p) => p.theme.colors.mainText};
  border-radius: ${(p) => p.theme.radii.large};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-family: ${(p) => p.theme.fonts.main};
  line-height: ${(p) => p.theme.lineHeights.body};
  :focus {
    outline-color: ${(p) => p.theme.colors.active};
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 216px;

    height: ${(p) => p.theme.space[5]}px;
    padding: 4px 12px;
    font-size: ${(p) => p.theme.fontSizes.xxm};
  }
`;

export const UserForm = styled(Form)`
  position: relative;
  display: flex;

  justify-content: space-between;
  align-items: center;

  column-gap: 5px;
  @media ${(p) => p.theme.media.tablet} {
    column-gap: 24px;
  }
`;

export const ErrorText = styled.div`
  position: absolute;
  color: red;
  font-size: 9px;
  margin-left: 15px;
`;

export const InputWrapper = styled.div``;

import styled from "styled-components";
import { HiCamera } from "react-icons/hi2";

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  min-height: 537px;
  padding: 20px 12px 20px 16px;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    position: relative;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    min-height: 311px;
    padding: 24px 40px 24px 32px;
    border-radius: 0 40px 40px 0;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: inherit;
    width: 411px;
    min-height: 580px;
    padding: 20px 16px 42px 16px;
  }
`;

export const BoxImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const ImageContainer = styled.div`
  & input {
    position: absolute;
    width: 0px;
    height: 0px;
    z-index: -1;
    opacity: 0;
  }
  & #image-label {
    @media screen and (min-width: 768px) {
      margin-top: 0px;
    }
  }
`;

export const ImgUser = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  background-color: #e1e1e1;
`;
export const EditImgBtn = styled.button`
  display: inline-flex;
  align-items: center;
  margin-bottom: 32px;
  margin-left: auto;
  font-weight: 400;
  font-size: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover svg,
  :focus svg {
    fill: #ff6101;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;
  }
`;

export const IconEditImgBtn = styled(HiCamera)`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  margin-bottom: -5px;
  cursor: pointer;
  fill: #f59256;
`;

export const BoxInfo = styled.div`
  margin-bottom: 42px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 52px;
    margin-top: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 46px;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 8px;
    @media screen and (min-width: 1280px) {
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 379px;
  }
`;

export const Title = styled.label`
  width: 64px;
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    width: 90px;
    font-size: 18px;
  }
`;
export const Text = styled.p`
  margin-left: 18px;
  font-size: 14px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    margin-left: 12px;
    font-size: 18px;
  }
`;
export const Block = styled.div`
  position: relative;
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  @media screen and (min-width: 768px) {
    column-gap: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: space-between;
`;

export const ErrorText = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  &:not(:last-of-type) {
    margin-bottom: 14px;
  }
  font-size: 10px;
  color: red;
  font-weight: 700;
  font-style: italic;
  bottom: -12px;
  z-index: 2;
`;

export const Label = styled.label`
  cursor: pointer;
`;

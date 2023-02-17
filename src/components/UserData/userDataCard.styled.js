import styled from "styled-components";
import { HiCamera } from "react-icons/hi2";

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  min-height: 537px;
  padding: 20px 12px 20px 16px;
  border-radius: ${(p) => p.theme.radii.large};
  box-shadow: 7px 4px 14px ${(p) => p.theme.colors.shadow};
  background-color: ${(p) => p.theme.colors.white};
  @media ${(p) => p.theme.media.tablet} {
    position: relative;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    min-height: 311px;
    padding: 24px 40px 24px 32px;
    border-radius: 0 40px 40px 0;
  }
  @media ${(p) => p.theme.media.desktop} {
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
  @media ${(p) => p.theme.media.desktop} {
    margin-bottom: 36px;
  }
`;

export const ImageContainer = styled.div`
  & input {
    position: absolute;
    width: ${(p) => p.theme.space[0]};
    height: ${(p) => p.theme.space[0]};
    z-index: -1;
    opacity: 0;
  }
  & #image-label {
    @media ${(p) => p.theme.media.tablet} {
      margin-top: ${(p) => p.theme.space[0]};
    }
  }
`;

export const ImgUser = styled.img`
  width: 233px;
  height: 233px;
  border-radius: ${(p) => p.theme.radii.round};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`;
export const EditImgBtn = styled.button`
  display: inline-flex;
  align-items: center;
  margin-bottom: ${(p) => p.theme.space[5]};
  margin-left: auto;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-family: ${(p) => p.theme.fonts.main};
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover svg,
  :focus svg {
    fill: ${(p) => p.theme.colors.active};
  }
  @media ${(p) => p.theme.media.tablet} {
    position: absolute;
    bottom: ${(p) => p.theme.space[0]};
    right: ${(p) => p.theme.space[0]};
    margin: ${(p) => p.theme.space[0]};
  }
`;

export const IconEditImgBtn = styled(HiCamera)`
  width: 20px;
  height: 20px;
  margin-right: ${(p) => p.theme.space[2]};
  margin-bottom: -5px;
  cursor: pointer;
  fill: ${(p) => p.theme.colors.accent};
`;

export const BoxInfo = styled.div`
  margin-bottom: 42px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: ${(p) => p.theme.space[0]};
    margin-right: 52px;
    margin-top: ${(p) => p.theme.space[4]};
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-top: ${(p) => p.theme.space[0]};
    margin-right: ${(p) => p.theme.space[0]};
    margin-bottom: 46px;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${(p) => p.theme.space[3]};
    @media ${(p) => p.theme.media.desktop} {
      margin-bottom: 10px;
    }
  }
  @media s${(p) => p.theme.media.tablet} {
    width: 379px;
  }
`;

export const Title = styled.label`
  width: 64px;
  font-size: 12px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-family: ${(p) => p.theme.fonts.main};
  @media ${(p) => p.theme.media.tablet} {
    width: 90px;
    font-size: 18px;
  }
`;
export const Text = styled.p`
  margin-left: 18px;
  font-size: ${(p) => p.theme.fontSizes.xxm};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-family: ${(p) => p.theme.fonts.main};
  @media ${(p) => p.theme.media.tablet} {
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
  @media ${(p) => p.theme.media.tablet} {
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
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-style: italic;
  bottom: -12px;
  z-index: 2;
`;

export const Label = styled.label`
  cursor: pointer;
`;

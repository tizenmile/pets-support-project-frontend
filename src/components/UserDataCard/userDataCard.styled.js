import styled from "styled-components";
import { HiCamera } from "react-icons/hi2";

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 537px;
  padding: 20px 12px 20px 16px;
  border-radius: ${(p) => p.theme.radii.large};
  box-shadow: 7px 4px 14px ${(p) => p.theme.colors.shadow};
  background-color: ${(p) => p.theme.colors.white};
  @media ${(p) => p.theme.media.tablet} {
    position: relative;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 736px;
    height: 311px;
    padding: 24px 40px 24px 32px;
    border-radius: 0 40px 40px 0;
  }
  @media ${(p) => p.theme.media.desktop} {
    flex-direction: column;
    justify-content: inherit;
    width: 411px;
    min-height: 541px;
    padding: 20px 16px 18px 16px;
  }
`;

export const BoxImg = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(p) => p.theme.space[5]}px;
  align-items: center;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: ${(p) => p.theme.space[0]}px;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-bottom: 36px;
  }
`;

export const ImgUser = styled.img`
  width: 233px;
  height: 233px;
  border-radius: ${(p) => p.theme.radii.round};
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  object-fit: cover;
`;

export const EditImgBtn = styled.button`
  display: inline-flex;
  align-items: center;
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

export const ImageContainer = styled.div`
  & input {
    position: absolute;
    width: ${(p) => p.theme.space[0]};
    height: ${(p) => p.theme.space[0]};
    z-index: -1;
    opacity: 0;
  }
`;

export const IconEditImgBtn = styled(HiCamera)`
  width: 20px;
  height: 20px;
  margin-right: ${(p) => p.theme.space[2]}px;
  margin-bottom: -5px;
  cursor: pointer;
  fill: ${(p) => p.theme.colors.accent};
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const BoxInfo = styled.div`
  margin-bottom: 60px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: ${(p) => p.theme.space[0]};
    margin-right: 52px;
    margin-top: ${(p) => p.theme.space[4]}px;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-top: ${(p) => p.theme.space[0]};
    margin-right: ${(p) => p.theme.space[0]};
    ${"" /* margin-bottom: 46px; */}
  }
`;

export const Block = styled.div``;

export const UserForms = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: space-between;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 11px;
  }
  &:not(:last-child) {
    @media ${(p) => p.theme.media.desktop} {
      margin-bottom: 11px;
    }
  }
`;

export const Title = styled.label`
  width: 56px;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  margin-right: ${(p) => p.theme.space[3]}px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-family: ${(p) => p.theme.fonts.main};
  font-family: ${(p) => p.theme.lineHeights.body};
  @media ${(p) => p.theme.media.tablet} {
    width: 83px;
    font-family: ${(p) => p.theme.lineHeights.body};
    font-size: ${(p) => p.theme.fontSizes.xxm};
    margin-right: 24px;
  }
`;

export const Text = styled.p`
  margin-left: 18px;
  font-size: ${(p) => p.theme.fontSizes.xxm};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-family: ${(p) => p.theme.fonts.main};
  @media ${(p) => p.theme.media.tablet} {
    margin-left: 12px;
    font-size: ${(p) => p.theme.fontSizes.xxm};
  }
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
  z-index: ${(p) => p.theme.space[1]};
`;

import styled from "styled-components";
import { TbSearch } from "react-icons/tb";
import { FiXCircle } from "react-icons/fi";

export const Section1 = styled.section`
  margin-right: auto;
  margin-left: auto;
`;

export const IconSearchReset = styled(FiXCircle)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  fill: white;
  color: black;
  &:hover {
    color: ${(p) => p.theme.colors.accent};
    scale: 1.15;
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media ${(p) => p.theme.media.mobileMax} {
    width: 20px;
    height: 20px;
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const ContainerMain = styled.div`
  margin: 0 0;

  padding-left: 15px;
  padding-right: 15px;
  @media ${(p) => p.theme.media.mobileMax} {
    max-width: 768px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 22px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
  }

  @media ${(p) => p.theme.media.tablet} {

    max-width: 1280px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 64px;
    margin-bottom: 60px;
    margin-right: auto;
    margin-left: auto;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-right: auto;
    margin-left: auto;
    max-width: 1248px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 39px;
    margin-bottom: 60px;
  }
`;

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media ${(p) => p.theme.media.mobileMax} {
    max-width: 280px;
    height: 40px;
    margin-bottom: 28px;
    font-size: ${(p) => p.theme.fontSizes.s};
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 608px;
    height: 44px;
    margin-bottom: 40px;
    font-size: ${(p) => p.theme.fontSizes.xm};
  }
`;

export const Button = styled.button`
  padding: 0px 0px;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const NoticesSearchTitle = styled.h2`
  font-family: ${(p) => p.theme.fonts.main};
  line-height: ${(p) => p.theme.lineHeights.titleSection};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mainText};
  text-align: center;
  @media ${(p) => p.theme.media.mobileMax} {
    font-size: ${(p) => p.theme.fontSizes.m};
    margin-bottom: 28px;
  }
  @media ${(p) => p.theme.media.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xxxl};
    margin-bottom: 40px;
  }
`;

export const IconSearch = styled(TbSearch)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  fill: white;
  color: black;
  &:hover {
    color: ${(p) => p.theme.colors.accent};
    scale: 1.15;
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media ${(p) => p.theme.media.mobileMax} {
    width: 17px;
    height: 17px;
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 100%;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.searchText};
  border-radius: 40px;
  border: solid 2px #fff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  &:hover,
  &:focus,
  &:active {
    border: solid 2px ${(p) => p.theme.colors.accent};
  }

  @media ${(p) => p.theme.media.mobileMax} {
    padding-left: 12px;
  }
  @media ${(p) => p.theme.media.tablet} {
    padding-left: 20px;
  }
`;

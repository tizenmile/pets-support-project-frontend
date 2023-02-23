import styled from "styled-components";
import { TbSearch } from "react-icons/Tb";

export const ContainerMain = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (${(p) => p.theme.media.mobileMax}) {
    max-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (${(p) => p.theme.media.tablet}) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (${(p) => p.theme.media.desktop}) {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const Button = styled.button`
  padding: 0px 0px;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media (${(p) => p.theme.media.mobileMax}) {
    max-width: 280px;
    height: 40px;
    margin-bottom: 28px;
  }
  @media (${(p) => p.theme.media.tablet}) {
    width: 608px;
    height: 44px;
    margin-bottom: 40px;
  }
`;

export const NoticesSearchTitle = styled.h2`
  font-family: ${(p) => p.theme.fonts.main};
  line-height: ${(p) => p.theme.lineHeights.titleSection};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mainText};
  text-align: center;
  @media (${(p) => p.theme.media.mobileMax}) {
    font-size: ${(p) => p.theme.fontSizes.m};
    margin-bottom: 28px;
  }
  @media (${(p) => p.theme.media.tablet}) {
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
  @media (${(p) => p.theme.media.mobileMax}) {
    width: 20px;
    height: 20px;
  }
  @media (${(p) => p.theme.media.tablet}) {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 100%;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.searchText};
  border-radius: 14px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25), 7px 4px 6px rgba(49, 21, 4, 0.07);
  &:hover,
  &:focus,
  &:active {
    border: solid ${(p) => p.theme.colors.accent};
    scale: 1.02;
  }
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (${(p) => p.theme.media.mobileMax}) {
    font-size: ${(p) => p.theme.fontSizes.s};
    padding-left: 12px;
  }
  @media (${(p) => p.theme.media.tablet}) {
    font-size: ${(p) => p.theme.fontSizes.xm};
    padding-left: 20px;
  }
`;

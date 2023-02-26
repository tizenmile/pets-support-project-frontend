import styled from "styled-components";
import { HiTrash } from "react-icons/hi2";

export const PetItemWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
    @media ${(p) => p.theme.media.desktop} {
      margin-bottom: 22px;
    }
  }
  padding: 20px;
  border-radius: ${(p) => p.theme.radii.large};
  box-shadow: 7px 4px 14px ${(p) => p.theme.colors.shadow};
  background-color: ${(p) => p.theme.colors.white};
  @media ${(p) => p.theme.media.tablet} {
    display: flex;
    width: 704px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 821px;
    margin-bottom: 22px;
  }
`;

export const ImgPet = styled.img`
  margin-bottom: 20px;
  width: 240px;
  border-radius: ${(p) => p.theme.radii.normal};
  @media ${(p) => p.theme.media.tablet} {
    margin-right: 32px;
    width: 161px;
  }
`;

export const PetBoxInfo = styled.div`
  position: relative;
  @media ${(p) => p.theme.media.tablet} {
    width: 471px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 580px;
  }
`;

export const PetDeleteBtm = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border: ${(p) => p.theme.borders.none};
  color: ${(p) => p.theme.colors.muted};
  background-color: ${(p) => p.theme.colors.background};
  border-radius: ${(p) => p.theme.radii.round};
  cursor: pointer;
  @media ${(p) => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }
  transition: color ${(p) => p.theme.transition};
  :hover,
  :focus {
    color: ${(p) => p.theme.colors.accent};
  }
  svg {
    fill: currentColor;
  }
`;

export const PetDelIcon = styled(HiTrash)`
  width: 20px;
  height: 20px;
  fill: ${(p) => p.theme.colors.muted};
  @media ${(p) => p.theme.media.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const InfoPet = styled.p`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  @media ${(p) => p.theme.media.tablet} {
    font-size: ${(p) => p.theme.fontSizes.s};
  }
`;
export const Title = styled.span`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  @media ${(p) => p.theme.media.tablet} {
    font-size: ${(p) => p.theme.fontSizes.s};
  }
`;

import styled from "styled-components";
import { TfiPlus } from "react-icons/tfi";

export const AddNoticeBtnWarpper = styled.div`
  min-width: 132px;
  @media (max-width: 767px) {
    position: fixed;
    z-index: 999;
    right: 20px;
    bottom: 100px;
    min-width: fit-content;
  }
`;

export const AddNoticeBtn = styled.button`
  display: flex;
  cursor: pointer;
  width: 44px;
  height: 44px;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: ${(p) => p.theme.radii.round};
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.white};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 250ms;
  :hover,
  :focus {
    transform: scale(1.15);
    background-color: ${(p) => p.theme.colors.hover};
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    @media ${(p) => p.theme.media.mobileMax} {
      visibility: hidden;
    }
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms;
  }
  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
  }
`;

export const AddNoticeBtnTitle = styled.p`
  margin-right: 15px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xm};
  font-family: ${(p) => p.theme.fonts.main};
  @media ${(p) => p.theme.media.desktop} {
    margin-right: 12px;
  }
  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const AddNoticeBtnItemText = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const AddPetIcon = styled(TfiPlus)`
  @media (max-width: 767.98px) {
    width: 22px;
    height: 22px;
  }
`;

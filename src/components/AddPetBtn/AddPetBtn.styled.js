import styled from "styled-components";
import { TfiPlus } from "react-icons/tfi";

export const AddPetWrapper = styled.button`
  display: flex;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  justify-content: center;
  align-items: center;
  border-radius: ${(p) => p.theme.radii.round};
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.white};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: color ${(p) => p.theme.transition};
  :hover,
  :focus {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.hover};
    transform: scale(1.1);
  }
  svg {
    width: 16px;
    height: 16px;
  }
  :hover:before {
    left: 100%;
    @media ${(p) => p.theme.media.mobileMax} {
      visibility: visible;
    }
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
    /* background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transition: all 650ms; */
  }
`;

export const AddPetIcon = styled(TfiPlus)``;

import styled from "styled-components";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export const LogOut = styled.button`
  position: absolute;
  right: 12px;
  bottom: 20px;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: rgba(17, 17, 17, 0.6);
  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: ${(p) => p.theme.lineHeights.body};
  cursor: pointer;
  :hover svg,
  :focus svg,
  :hover {
    fill: ${(p) => p.theme.colors.active};
    color: rgba(17, 17, 17, 1);
  }
  @media ${(p) => p.theme.media.tablet} {
    left: ${(p) => p.theme.space[5]}px;
    bottom: 24px;
    height: 22px;
    margin: ${(p) => p.theme.space[0]};
    padding: ${(p) => p.theme.space[0]};
  }
  @media ${(p) => p.theme.media.desktop} {
    left: 17px;
    bottom: 20px;
  }
`;
export const LogOutIcon = styled(HiArrowRightOnRectangle)`
  width: 20px;
  height: 20px;
  margin-right: ${(p) => p.theme.space[3]}px;
  color: ${(p) => p.theme.colors.accent};
`;

import styled from "styled-components";

export const Button = styled.button`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  background-color: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.mainText};
  border: solid 2px rgba(245, 146, 86, 1);
  border-radius: 40px;
  font-family: ${(p) => p.theme.fonts.main};
  line-height: ${(p) => p.theme.lineHeights.body};
  transition: all 250ms;
  &:hover,
  &:active {
    color: #fff;

    border: solid 2px ${(p) => p.theme.colors.hover};
    background-color: ${(p) => p.theme.colors.hover} !important;
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media ${(p) => p.theme.media.mobileMax} {
    font-size: ${(p) => p.theme.fontSizes.xs};
    padding: 8px 28px;
  }
  @media ${(p) => p.theme.media.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xm};
    padding: 10px 28px;
  }
`;

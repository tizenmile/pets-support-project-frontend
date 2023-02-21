import styled from "styled-components";

export const UserTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  margin-left: ${(p) => p.theme.space[5]}px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 40px;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-left: ${(p) => p.theme.space[4]}px;
    margin-bottom: 24px;
  }
`;

export const TitleUser = styled.h2`
  color: ${(p) => p.theme.colors.mainText};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xm};
  line-height: ${(p) => p.theme.lineHeights.body};
  font-family: ${(p) => p.theme.fonts.main};
  letter-spacing: 0.04em;
  @media ${(p) => p.theme.media.tablet} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
  @media ${(p) => p.theme.media.desktop} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;

import styled from "styled-components";
export const Card = styled.div``;

export const CardList = styled.ul`
  position: reletive;
`;

export const Imge = styled.img`
  width: 158px;
  height: 112px;

  @media ${(p) => p.theme.media.mobileMin} and ${(p) =>
      p.theme.media.mobileMax} {
    width: 110px;
    height: 78px;
  }
  @media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
    width: 120px;
    height: 85px;
  }
`;

export const CardTitle = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.xm};
  line-height: 27px;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: ${(p) => p.theme.colors.active};
  margin-bottom: 16px;
  @media ${(p) => p.theme.media.mobileMin} and ${(p) =>
      p.theme.media.mobileMax} {
    font-size: ${(p) => p.theme.fontSizes.xxs};
    line-height: 16px;

    margin-bottom: 12px;
  }
  @media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: 22px;
  }
`;

export const TitleLink = styled.a`
font-family: "Manrope";
font-style: normal;
font-weight: ${(p) => p.theme.fontWeights.bold};
font-size: ${(p) => p.theme.fontSizes.xm};
line-height: 27px;
align-items: center;
text-align: center;
text-decoration-line: underline;
color: #f59256;
margin-bottom: 16px;
@media ${(p) => p.theme.media.mobileMin} and ${(p) => p.theme.media.mobileMax} {
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 16px;
  margin-bottom: 12px;
}
@media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 22px;
`;

export const CardItem = styled.li`
  margin-bottom: 12px;
  max-width: 206px;
  margin-left: 12px;
  position: relative;
  @media ${(p) => p.theme.media.mobileMin} and ${(p) =>
      p.theme.media.mobileMax} {
    max-width: 150px;
    margin-bottom: 4px;
  }
  @media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
    margin-bottom: 4px;
  }
`;

export const CardInfWrap = styled.div`
  display: flex;
`;

export const CardSpan = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.black};

  @media ${(p) => p.theme.media.mobileMin} and ${(p) =>
      p.theme.media.mobileMax} {
    font-size: ${(p) => p.theme.fontSizes.xs};
    line-height: 19px;
  }
  @media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.xxs};
    line-height: 16px;
  }
`;

export const CardLink = styled.a`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 20px;
  display: flex;
  align-items: center;
  text-decoration-line: none;
  color: ${(p) => p.theme.colors.black};
  &:hover {
    color: #dc712f;
  }

@media ${(p) => p.theme.media.mobileMin} and ${(p) => p.theme.media.mobileMax} {
font-size: ${(p) => p.theme.fontSizes.xxs};
line-height: 16px;
  
}
@media ${(p) => p.theme.media.tablet} and (max-width: 1279px) {
font-size: ${(p) => p.theme.fontSizes.xs};
line-height: 19px;
`;

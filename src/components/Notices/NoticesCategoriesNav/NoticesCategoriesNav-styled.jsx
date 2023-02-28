import styled from "styled-components";

export const Section = styled.section`
  margin: 0 50px;
`;

export const Wrapper = styled.div`
  margin: 30px auto;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media ${(p) => p.theme.media.tablet} {
    margin: 40px 32px 60px 32px;
    width: 768px;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin: 40px 16px 60px 16px;
    width: 1280px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 12px;
  }
  @media ${(p) => p.theme.media.mobileMax} {
    &:nth-child(-n + 3) {
      margin-bottom: 12px;
    }
  }
  @media ${(p) => p.theme.media.tablet} and (max-width: 981px) {
    &:nth-child(-n + 3) {
      margin-bottom: 16px;
    }
  }
  @media (min-width: 982px) {
    &:nth-child(-n + 3) {
      margin-bottom: 0px;
    }
  }
`;

export const NoticesCategoriesNavBox = styled.div`
  @media ${(p) => p.theme.media.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

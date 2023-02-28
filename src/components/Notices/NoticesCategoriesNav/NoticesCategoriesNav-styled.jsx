import styled from "styled-components";

export const Section = styled.section``;

export const Wrapper = styled.div`
  @media ${(p) => p.theme.media.desktop} {
    margin-right: auto;
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

import styled from "styled-components";

export const Section = styled.section``;

export const Wrapper = styled.div`
  @media (${(p) => p.theme.media.desktop}) {
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
  @media (${(p) => p.theme.media.mobileMax}) {
    &:nth-child(-n + 3) {
      margin-bottom: 12px;
    }
  }
  @media (${(p) => p.theme.media.tablet}) {
    &:nth-child(-n + 3) {
      margin-bottom: 16px;
    }
  }
`;

export const NoticesCategoriesNavBox = styled.div`
  @media (${(p) => p.theme.media.tablet}) {
    display: flex;
  }
`;

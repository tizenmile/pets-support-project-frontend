import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 26px 20px 100px 20px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  font-family: ${(p) => p.theme.fonts.main};
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media ${(p) => p.theme.media.tablet} {
    padding: 62px 32px 100px 32px;
    width: 768px;
  }
  @media ${(p) => p.theme.media.desktop} {
    padding: 39px 16px 200px 16px;
    width: 1280px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.m};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl};
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-top: 68px;
    display: grid;
    justify-content: center;
    column-gap: 32px;
    row-gap: 60px;
    grid-template-columns: 336px 336px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 395px 395px 395px;
  }
`;

export const Scroll = styled(ScrollToTop)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding: 8px;
`;

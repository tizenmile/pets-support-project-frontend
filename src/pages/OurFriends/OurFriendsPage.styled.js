import styled from "styled-components";

export const OurFriendWrap = styled.section`
  padding: 54px 20px 100px 20px;
  margin: 0 auto;
  width: 100%;

  font-family: ${(p) => p.theme.fonts.main};
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media ${(p) => p.theme.media.tablet} {
    padding: 90px 32px 100px 32px;
    width: 768px;
  }
  @media ${(p) => p.theme.media.desktop} {
    padding: 70px 16px 200px 16px;
    width: 1280px;
  }
`;

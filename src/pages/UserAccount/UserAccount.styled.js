import styled from "styled-components";

export const UserPageContainer = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 61px;
  padding-bottom: 80px;
  @media ${(p) => p.theme.media.mobileMin} {
    width: 320px;
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 768px;
    padding-left: ${(p) => p.theme.space[0]};
    padding-right: ${(p) => p.theme.space[5]};
    padding-top: 88px;
    padding-bottom: 100px;
  }

  @media ${(p) => p.theme.media.desktop} {
    display: flex;
    padding-left: ${(p) => p.theme.space[0]};
    padding-right: ${(p) => p.theme.space[4]};
    padding-top: 58px;
    padding-bottom: 40px;
    width: 1280px;
  }
`;

export const UserWrapper = styled.section`
  position: relative;
  height: fit-content;
  margin-bottom: 40px;
  @media ${(p) => p.theme.media.tablet} {
    position: relative;
    margin-bottom: 20px;
  }
  @media ${(p) => p.theme.media.desktop} {
    margin-right: ${(p) => p.theme.space[5]};
    margin-bottom: ${(p) => p.theme.space[0]};
  }
`;

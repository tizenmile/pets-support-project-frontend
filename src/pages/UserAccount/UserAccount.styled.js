import styled from "styled-components";

export const UserPageContainer = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 61px;
  padding-bottom: 80px;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 0px;
    padding-right: 32px;
    padding-top: 88px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    padding-left: 0px;
    padding-right: 16px;
    padding-top: 58px;
    padding-bottom: 40px;
    width: 1280px;
  }
`;

export const UserWrapper = styled.section`
  position: relative;
  height: fit-content;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    position: relative;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
    margin-bottom: 0px;
  }
`;

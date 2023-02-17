import styled from "styled-components";

export const UserTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  margin-left: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
    margin-bottom: 24px;
  }
`;

export const TitleUser = styled.h2`
  color: #000000;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

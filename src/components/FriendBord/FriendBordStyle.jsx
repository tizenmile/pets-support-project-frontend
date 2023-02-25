import styled from "styled-components";

export const BordList = styled.ul`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -16px;
  display: flex;
  flex-wrap: wrap;
`;

export const BordItem = styled.li`
  border-radius: 40px;
  background: #ffffff;
  margin: 16px;
  padding: 16px 4px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;

  width: calc(33.3333333333% - 32px);
  @media (min-width: 280px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: calc(50% - 32px);
  }
`;

export const Wrap = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 280px) and (max-width: 767px) {
    max-width: 320px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
  }
`;

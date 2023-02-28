import styled from "styled-components";
export const Title = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
  text-align: center;
  margin-bottom: 60px;

  @media (min-width: 280px) and (max-width: 767px) {
    margin-bottom: 28px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 40px;
  }
`;

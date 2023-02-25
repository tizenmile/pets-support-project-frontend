import { Link } from "react-router-dom";
import styled from "styled-components";
export const Card = styled.div``;

export const CardList = styled.ul`
  position: reletive;
`;

export const Imge = styled.img`
  width: 158px;
  height: 112px;

  @media (min-width: 280px) and (max-width: 767px) {
    width: 110px;
    height: 78px;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    width: 120px;
    height: 85px;
  }
`;

export const CardTitle = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #f59256;
  margin-bottom: 16px;
  @media (min-width: 280px) and (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;

    margin-bottom: 12px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const TitleLink = styled.a`
font-family: "Manrope";
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 27px;
align-items: center;
text-align: center;
text-decoration-line: underline;
color: #f59256;
margin-bottom: 16px;
@media (min-width: 280px) and (max-width: 767px) {
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 12px;
}
@media (min-width: 768px) and (max-width: 1279px) {
  font-size: 16px;
  line-height: 22px;
`;

export const CardItem = styled.li`
  margin-bottom: 12px;
  max-width: 206px;
  margin-left: 12px;
  position: relative;
  @media (min-width: 280px) and (max-width: 767px) {
    max-width: 150px;
    margin-bottom: 4px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 4px;
  }
`;

export const CardInfWrap = styled.div`
  display: flex;
`;

export const CardSpan = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000000;

  @media (min-width: 280px) and (max-width: 767px) {
    font-size: 14px;
    line-height: 19px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const CardLink = styled.a`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000000;
  &:hover {
    color: #dc712f;
  }

@media (min-width: 280px) and (max-width: 767px) {
font-size: 12px;
line-height: 16px;
  
}
@media (min-width: 768px) and (max-width: 1279px) {
font-size: 14px;
line-height: 19px;
`;

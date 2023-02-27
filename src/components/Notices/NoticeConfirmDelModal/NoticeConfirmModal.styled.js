import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 450px;
  height: auto;
  background: #ffffff;
  padding-left: 20px;
  padding-top: 32px;
  padding-right: 24px;
  border-radius: 40px;
  @media (min-width: 320px) and (max-width: 450px) {
    margin-top: 150px;
    width: 280px;
  }
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin: 20px 0 ;
`;

export const ConfirmModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  margin-right: 12px;
  font-family: ${(p) => p.theme.fonts.main};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  transition: ${(p) => p.theme.transition};
  :hover {
    transition: ${(p) => p.theme.transition};
    background: #f59256;
    color: #ffffff;
  }
  @media (min-width: 320px) and (max-width: 450px) {
    width: 240px;
  }
`;
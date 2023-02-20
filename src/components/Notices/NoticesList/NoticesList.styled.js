import styled from "styled-components";

export const Container = styled.ul`
  padding: 20px 16px 20px 16px;
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
  background-color: #FDF7F2;
  display: flex;
  flex-direction: column;

  @media (min-width: 280px) and (max-width: 767px) {
    padding: 20px 16px 20px 16px;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    padding: 24px 32px 24px 32px;
  }
`;


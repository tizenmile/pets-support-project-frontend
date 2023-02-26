import styled from "styled-components";

export const NotFoundPet = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 200px;
  border-radius: ${(p) => p.theme.radii.large};
  box-shadow: 7px 4px 14px ${(p) => p.theme.colors.shadow};
  background-color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.m};
  @media ${(p) => p.theme.media.tablet} {
    width: 704px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 821px;
  }
`;

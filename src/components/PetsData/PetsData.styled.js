import styled from "styled-components";

export const PetsWrapper = styled.section`
  width: 100%;
  @media ${(p) => p.theme.media.tablet} {
    padding-left: ${(p) => p.theme.space[5]}px;
  }
  @media ${(p) => p.theme.media.desktop} {
    padding: ${(p) => p.theme.space[32]}px;
  }
`;

export const PetsNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media ${(p) => p.theme.media.tablet} {
    margin-bottom: 24px;
  }
`;

export const PetsTitle = styled.h2`
  color: ${(p) => p.theme.colors.black};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xm};
  letter-spacing: 0.04em;
  @media ${(p) => p.theme.media.tablet} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;

export const AddPetBtnWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  @media ${(p) => p.theme.media.desktop} {
    display: inline-flex;
  }
`;

export const AddPetBtnTitle = styled.p`
  margin-right: 15px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xm};
`;

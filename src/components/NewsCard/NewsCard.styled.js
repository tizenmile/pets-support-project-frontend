import styled from "styled-components";

export const Item = styled.li`
  padding-top: 40px;
  position: relative;
  @media ${(p) => p.theme.media.tablet} {
    padding-top: 0;
  }
`;

export const CardTitle = styled.h3`
  padding-top: 4px;
  margin: 0;
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.375;
  letter-spacing: -0.01em;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Line = styled.div`
  width: 200px;
  height: 4px;

  background: linear-gradient(90deg, #ff634e, #ffdf48);
  border-radius: ${(p) => p.theme.radii.large};

  @media ${(p) => p.theme.media.tablet} {
    width: 280px;
    height: 8px;
  }
  @media ${(p) => p.theme.media.desktop} {
    width: 340px;
  }
`;

export const Description = styled.p`
  margin: 0;
  padding-top: 16px;
  color: ${(p) => p.theme.colors.newsText};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  line-height: 1.375;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow-x: hidden;
  overflow-y: hidden;

  @media ${(p) => p.theme.media.tablet} {
    -webkit-line-clamp: 6;
  }
  @media ${(p) => p.theme.media.desktop} {
    -webkit-line-clamp: 5;
  }
`;

export const Addition = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 0;
  @media ${(p) => p.theme.media.tablet} {
    padding-top: 40px;
  }
`;

export const Time = styled.time`
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.normal};
  line-height: 1.375;
  color: ${(p) => p.theme.colors.searchText};
`;

export const Link = styled.a`
  color: ${(p) => p.theme.colors.accent};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  line-height: 1.375;
  text-decoration-line: underline;

  &:hover,
  &:focus {
    scale: 1.1;
    color: #ff634e;
  }
`;

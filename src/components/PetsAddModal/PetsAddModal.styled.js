import styled from "styled-components";

export const FormBox = styled.div`
  position: relative;
  width: 280px;
  padding: 40px 20px;
  font-family: ${(p) => p.theme.fonts.main};
  background-color: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.normal};
  @media ${(p) => p.theme.media.tablet} {
    width: 608px;
    padding: ${(p) => (p.secondPage ? "40px 107px" : "40px 80px")};
  }

  h3 {
    margin-bottom: 20px;
    font-size: ${(p) => p.theme.fontSizes.m};
    font-weight: ${(p) => p.theme.fontWeights.semiBold};
    text-align: center;
    @media ${(p) => p.theme.media.tablet} {
      margin-bottom: 40px;
      font-size: ${(p) => p.theme.fontSizes.xxl};
    }
  }

  h4 {
    font-size: ${(p) => p.theme.fontSizes.s};
    font-weight: ${(p) => p.theme.fontWeights.semiBold};
    text-align: center;
    @media ${(p) => p.theme.media.tablet} {
      font-size: ${(p) => p.theme.fontSizes.xm};
    }
  }

  label {
    font-size: ${(p) => p.theme.fontSizes.xxm};
    font-weight: ${(p) => p.theme.fontWeights.semiBold};
    @media ${(p) => p.theme.media.tablet} {
      font-size: ${(p) => p.theme.fontSizes.m};
    }
  }

  p {
    position: absolute;
    left: 10px;
    color: ${(p) => p.theme.colors.active};
    font-size: ${(p) => p.theme.fontSizes.xxs};
    font-weight: ${(p) => p.theme.fontWeights.semiBold};
  }
`;

export const FileLable = styled.div`
  width: 182px;
  height: 182px;
  margin: 0 auto;
  position: relative;
  border-radius: ${(p) => p.theme.radii.mainBorderRadius};
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${(p) => p.theme.radii.secondaryBorderRadius};
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  width: 34px;
  height: 34px;
  color: ${(p) => p.theme.colors.black};
  background-color: ${(p) => p.theme.colors.background};
  border-radius: ${(p) => p.theme.radii.round};
  backdrop-filter: blur(2px);
  transition: ${(p) => p.theme.transition};
  cursor: pointer;
  @media ${(p) => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }
  @media ${(p) => p.theme.media.desktop} {
    top: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
  :hover,
  :focus {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.hover};
    transform: scale(0.8);
    transition: ${(p) => p.theme.transition};
  }
  svg {
    width: 15.56px;
    height: 15.56px;
    @media ${(p) => p.theme.media.tablet} {
      width: 20px;
      height: 20px;
    }
  }
`;

export const FormPage = styled.div`
  ${(p) => {
    if (p.isHidden) {
      return `position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow-x: hidden;
    overflow-y: hidden;`;
    } else {
      return `
      position: relative;
      `;
    }
  }}
  display:flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 28px;
  }
  input,
  textarea {
    width: 240px;
    padding: 11px 11px 12px 14px;
    background: ${(p) => p.theme.colors.background};
    border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.accent};
    border-radius: ${(p) => p.theme.radii.large};
    margin-top: 8px;
    color: rgba(27, 27, 27, 0.6);
    &:focus,
    &:hover {
      outline: none;
    }
    @media ${(p) => p.theme.media.tablet} {
      margin-top: 12px;
      width: 100%;
    }
  }
  @media (max-width: 420px) {
    input[type="date"] {
      position: relative;
      height: 46px;
      &::after {
        content: ${(p) => (p.isEmpty ? `attr(placeholder)` : `""`)};
        color: rgba(27, 27, 27, 0.3);
        position: absolute;
        top: 12px;
        left: 14px;
        width: 150px;
      }
    }
  }

  textarea {
    height: 100px;
    border-radius: ${(p) => p.theme.radii.normal};
  }
`;

export const AddButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 182px;
  height: 182px;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: ${(p) => p.theme.radii.normal};
  cursor: pointer;
  @media ${(p) => p.theme.media.tablet} {
    border-radius: ${(p) => p.theme.radii.large};
  }

  svg {
    width: 48px;
    height: 48px;
    fill: ${(p) => p.theme.colors.muted};
  }

  span {
    margin-top: 35px;
    font-size: ${(p) => p.theme.fontSizes.xxs};
    color: ${(p) => p.theme.colors.muted};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${(p) => p.theme.media.tablet} {
    flex-direction: row;
    justify-content: center;
    margin-top: 12px;
  }
`;

export const AcseptButton = styled.button`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 7px 0 8px;
  margin-top: 24px;
  text-align: center;
  color: ${(p) => p.theme.colors.white};
  background: ${(p) => p.theme.colors.accent};
  border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.large};
  transition: ${(p) => p.theme.transition};
  cursor: pointer;
  :hover,
  :focus {
    color: ${(p) => p.theme.colors.white};
    background: ${(p) => p.theme.colors.hover};
    transform: scale(1.1);
    transition: ${(p) => p.theme.transition};
  }
  :hover:before {
    left: 100%;
    @media ${(p) => p.theme.media.mobileMax} {
      visibility: visible;
    }
  }
  @media ${(p) => p.theme.media.tablet} {
    width: 180px;
    height: 44px;
    margin-top: 0px;
    font-size: ${(p) => p.theme.fontSizes.xm};
  }
`;

export const BackButton = styled(AcseptButton)`
  color: ${(p) => p.theme.colors.black};
  background: ${(p) => p.theme.colors.white};
  border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.accent};
  order: 2;
  margin-top: 0;
  :hover,
  :focus {
    color: ${(p) => p.theme.colors.white};
    background: ${(p) => p.theme.colors.hover};
    border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.hover};
    transform: scale(1.1);
    transition: ${(p) => p.theme.transition};
  }
  :before {
    @media ${(p) => p.theme.media.mobileMax} {
      visibility: hidden;
    }
  }
  @media ${(p) => p.theme.media.tablet} {
    order: 0;

  }
  :hover,
  :focus {
    color: ${(p) => p.theme.colors.white};
    background: ${(p) => p.theme.colors.hover};
    border: ${(p) => p.theme.borders.normal} ${(p) => p.theme.colors.hover};
    transform: scale(1.1);
    transition: ${(p) => p.theme.transition};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.muted};
`;

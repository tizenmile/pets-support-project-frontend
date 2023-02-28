import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "../../media/menu_icon.svg";
import CloseIcon from "../../media/close_menu_icon.svg";
import AccIcon from "../../media/acc_icon.svg";
export const NavbarContainer = styled.nav`
  padding: 20px 16px 20px 16px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(p) => p.theme.colors.background};
  display: flex;
  flex-direction: column;

  @media (${(p) => p.theme.media.mobileMin}) and (max-width: 767px) {
    padding: 20px 16px 20px 16px;
  }

  @media (${(p) => p.theme.media.tablet}) and (max-width: 1280px) {
    padding: 24px 32px 24px 32px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const AuthContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: flex-start;
  margin-right: 0px;

  @media (max-width: 968px) {
    margin-right: 20px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavbarExtendedAuthContainer = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 60px;
  align-items: flex-start;
  @media (min-width: 599px) {
    display: none;
  }
`;

export const NavbarLinkExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
`;

export const NavbarLinkContainer = styled.ul`
  display: flex;
`;

export const NavbarLink = styled(NavLink)`
  color: ${(p) => p.theme.colors.mainText};
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-decoration: none;
  margin-left: 80px;
  transition: all 250ms;
  &.active {
    color: ${(p) => p.theme.colors.accent};
    text-decoration: underline;
  }

  @media (max-width: 968px) {
    display: none;
  }

  &:hover {
    color: ${(p) => p.theme.colors.accent};
    text-decoration: underline;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  color: ${(p) => p.theme.colors.mainText};
  text-decoration: none;
  transition: all 250ms;
  &.active {
    color: ${(p) => p.theme.colors.accent};
    text-decoration: underline;
  }
  &:not(:first-child) {
    margin-top: 40px;
  }
  &:hover {
    color: ${(p) => p.theme.colors.accent};
    text-decoration: underline;
  }

  @media (min-width: 600px) and (max-width: 968px) {
    &:not(:first-child) {
      margin-top: 60px;
    }
  }
`;

export const Logo = styled.img`
  width: 94px;
  height: 48px;
`;

export const OpenLinksButton = styled.button`
  background: none;
  border: none;
  color: ${(p) => p.theme.colors.mainText};
  font-size: 45px;
  margin-left: auto;
  cursor: pointer;

  @media (min-width: 968px) {
    display: none;
  }

  @media (max-width: 600px) {
    position: absolute;
    right: 16px;
    top: 22px;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 968px) {
    display: none;
  }

  @media (min-width: 600px) and (max-width: 968px) {
    margin-top: 88px;
  }
`;

export const OpenMenuIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${MenuIcon});
`;

export const CloseMenuIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${CloseIcon});

  @media (min-width: 600px) and (max-width: 1280px) {
    position: absolute;
    right: 38px;
    top: 30px;
  }
`;
export const LoginButtonStyled = styled(NavLink)`
  display: flex;
  background: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.large};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xm};
  color: ${(p) => p.theme.colors.white};
  text-decoration: none;
  padding: 12px 28px;
  cursor: pointer;
  transition: all 250ms;
  &:hover {
    background: ${(p) => p.theme.colors.hover};
  }
`;
export const RegisterButtonStyled = styled(Link)`
  display: flex;
  margin-left: 20px;
  background: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.large};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xm};
  color: ${(p) => p.theme.colors.mainText};
  border: 2px solid ${(p) => p.theme.colors.accent};
  text-decoration: none;
  padding: 10px 28px;
  cursor: pointer;
  transition: all 250ms;
  &:hover {
    background: ${(p) => p.theme.colors.hover};
    border: 2px solid ${(p) => p.theme.colors.hover};
    color: ${(p) => p.theme.colors.white};
  }
`;

export const AuthButtonStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.large};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xm};
  color: ${(p) => p.theme.colors.white};
  text-decoration: none;
  height: 47px;
  padding-left: 28px;
  padding-right: 28px;

  cursor: pointer;
  transition: all 250ms;
  &:hover {
    background: ${(p) => p.theme.colors.hover};
  }
  &:before {
    content: url(${AccIcon});
    width: 28px;
    height: 28px;
    margin-right: 12px;
  }
`;

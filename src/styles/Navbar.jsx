import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from "../media/menu_icon.svg";
import CloseIcon from "../media/close_menu_icon.svg";

export const NavbarContainer = styled.nav`
  padding: 20px 16px 20px 16px;
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fdf7f2;
  display: flex;
  flex-direction: column;

  @media (min-width: 280px) and (max-width: 767px) {
    padding: 20px 16px 20px 16px;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
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
  color: #111111;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  text-decoration: none;

  margin-left: 80px;

  &.active {
    color: #f59256;
    text-decoration: underline;
  }

  @media (max-width: 968px) {
    display: none;
  }

  &:hover {
    color: #f59256;
    text-decoration: underline;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  color: #181c27;
  text-decoration: none;

  &.active {
    color: #f59256;
    text-decoration: underline;
  }
  &:not(:first-child) {
    margin-top: 40px;
  }
  &:hover {
    color: #f59256;
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
  color: black;
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

  @media (min-width: 600px) and (max-width: 1248px) {
    position: absolute;
    right: 38px;
    top: 30px;
  }
`;

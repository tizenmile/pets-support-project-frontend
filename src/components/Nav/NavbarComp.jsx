import React, { useState } from "react";
import {
  NavbarContainer,
  LogoContainer,
  MenuContainer,
  AuthContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  MenuButtonContainer,
  NavbarExtendedAuthContainer,
  OpenMenuIcon,
  CloseMenuIcon,
  NavbarLinkExtendedContainer,
  LoginButtonStyled,
  RegisterButtonStyled,
} from "./NavbarCompStyle";
import LogoImg from "../../media/logo.svg";
import { NavLink, Link } from "react-router-dom";

const links = [
  { path: "/News", label: "News", exact: "false" },
  { path: "/FindPet", label: "Find pet", exact: "false" },
  { path: "/OurFriend", label: "Our friends", exact: "false" },
];

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LogoContainer to="/">
          <Logo src={LogoImg}></Logo>
        </LogoContainer>
        <MenuContainer>
          <NavbarLinkContainer>
            {links.map(({ path, label, exact }) => (
              <NavbarLink
                key={label}
                to={path}
                exact={exact}
                className="NavLinkStyle"
              >
                {label}
              </NavbarLink>
            ))}
          </NavbarLinkContainer>
        </MenuContainer>
        {!extendNavbar && (
          <AuthContainer>
            <LoginButtonStyled component={NavLink} to="/Login">
              Login
            </LoginButtonStyled>
            <RegisterButtonStyled component={Link} to="/Registration">
              Registration
            </RegisterButtonStyled>
          </AuthContainer>
        )}

        <MenuButtonContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((current) => !current);
            }}
          >
            {extendNavbar ? <CloseMenuIcon /> : <OpenMenuIcon />}
          </OpenLinksButton>
        </MenuButtonContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarExtendedAuthContainer>
            <LoginButtonStyled
              component={NavLink}
              to="/Login"
              onClick={() => {
                setExtendNavbar((current) => !current);
              }}
            >
              Login
            </LoginButtonStyled>
            <RegisterButtonStyled
              component={Link}
              to="/Registration"
              onClick={() => {
                setExtendNavbar((current) => !current);
              }}
            >
              Registration
            </RegisterButtonStyled>
          </NavbarExtendedAuthContainer>
          <NavbarLinkExtendedContainer>
            {links.map(({ path, label, exact }) => (
              <NavbarLinkExtended
                onClick={() => {
                  setExtendNavbar((current) => !current);
                }}
                key={label}
                to={path}
                exact={exact}
                className="NavLinkStyle"
              >
                {label}
              </NavbarLinkExtended>
            ))}
          </NavbarLinkExtendedContainer>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;

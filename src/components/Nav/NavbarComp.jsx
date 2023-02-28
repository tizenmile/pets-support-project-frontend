import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
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
  AuthButtonStyled,
} from "./NavbarCompStyle";
import LogoImg from "../../media/logo.svg";
import { NavLink, Link } from "react-router-dom";

const links = [
  { path: "/news", label: "News", exact: "false" },
  { path: "/notices/:sell", label: "Find pet", exact: "false" },
  { path: "/friends", label: "Our friends", exact: "false" },
];

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const { isLoggedIn } = useAuth();

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
            {isLoggedIn ? (
              <AuthButtonStyled component={NavLink} to="/user">
                Account
              </AuthButtonStyled>
            ) : (
              <>
                <LoginButtonStyled component={NavLink} to="/login">
                  Login
                </LoginButtonStyled>
                <RegisterButtonStyled component={Link} to="/register">
                  Registration
                </RegisterButtonStyled>
              </>
            )}
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
            {isLoggedIn ? (
              <AuthButtonStyled
                component={NavLink}
                to="/user"
                onClick={() => {
                  setExtendNavbar((current) => !current);
                }}
              >
                Account
              </AuthButtonStyled>
            ) : (
              <>
                <LoginButtonStyled
                  component={NavLink}
                  to="/login"
                  onClick={() => {
                    setExtendNavbar((current) => !current);
                  }}
                >
                  Login
                </LoginButtonStyled>
                <RegisterButtonStyled
                  component={Link}
                  to="/register"
                  onClick={() => {
                    setExtendNavbar((current) => !current);
                  }}
                >
                  Registration
                </RegisterButtonStyled>
              </>
            )}
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

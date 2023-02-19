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
} from "../../styles/Navbar";
import LogoImg from "../../media/logo.svg";
import { Link } from "react-router-dom";
import { LoginButton } from "../Auth/LoginButtonComp";
import { RegisterButton } from "../Auth/RegistrationButtonComp";
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
            <LoginButton />
            <RegisterButton />
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
            <LoginButton>
              {extendNavbar ? <CloseMenuIcon /> : <OpenMenuIcon />}Login
            </LoginButton>
            <RegisterButton>
              {extendNavbar ? <CloseMenuIcon /> : <OpenMenuIcon />}Registration
            </RegisterButton>
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

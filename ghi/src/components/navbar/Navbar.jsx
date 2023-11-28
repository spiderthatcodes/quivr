import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./style";
import LogoImg from "../../pictures/logo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
        <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/">Create Order</NavbarLink>
            <NavbarLink to="/">Order History</NavbarLink>
            <NavbarLink to="/">Order Detail</NavbarLink>
            <NavbarLink to="/">Cart</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
      <NavbarExtendedContainer>
      <NavbarLink to="/">Home</NavbarLink>
            <NavbarLinkExtended to="/">Create Order</NavbarLinkExtended>
            <NavbarLinkExtended to="/">Order History</NavbarLinkExtended>
            <NavbarLinkExtended to="/">Order Detail</NavbarLinkExtended>
            <NavbarLinkExtended to="/">Cart</NavbarLinkExtended>
      </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
export default Navbar;

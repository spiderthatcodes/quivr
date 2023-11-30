import React, { useState, useEffect } from "react";
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
  Button,
} from "./style";
import LogoImg from "../../pictures/logo.png";
import { useLogoutMutation } from "../../app/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [extendnavbar, setExtendNavbar] = useState(false);
  const [logout, logoutResponse] = useLogoutMutation();

    useEffect(() => {
        if (logoutResponse.data) navigate('/');
    }, [logoutResponse, navigate])

  return (
    <NavbarContainer extendnavbar={extendnavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
        <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/create-order">Create Order</NavbarLink>
            <NavbarLink to="/order-history">Order History</NavbarLink>
            <NavbarLink to="/users">User</NavbarLink>
            <Button onClick={()=>logout()}>Logout</Button>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendnavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendnavbar && (
      <NavbarExtendedContainer>
      <NavbarLink to="/">Home</NavbarLink>
            <NavbarLinkExtended to="/create-order">Create Order</NavbarLinkExtended>
            <NavbarLinkExtended to="/order-history">Order History</NavbarLinkExtended>
            <NavbarLinkExtended to="/users">User</NavbarLinkExtended>
      </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
export default Navbar;

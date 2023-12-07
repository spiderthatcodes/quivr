import React from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  Button,
} from "./style";
// import LogoImg from "../../images/logo.png";
import QuivrLogo from "../../images/Quivr_logo2.png";
import { useLogoutMutation, useGetTokenQuery } from "../../app/authSlice";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { data: account } = useGetTokenQuery();
  const [logout] = useLogoutMutation();

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={QuivrLogo}></Logo>
          {/* <Logo src={LogoImg}></Logo> */}
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <div className={account ? "vis" : "hidden"}>
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink to="/create-order">Create Order</NavbarLink>
              <NavbarLink to="/order-history">Order History</NavbarLink>
            </div>
            <div
              className={
                account && account?.role !== "customer" ? "vis" : "hidden"
              }
            >
              <NavbarLink to="/users">User</NavbarLink>
            </div>
            <div className={!account ? "vis" : "hidden"}>
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            </div>
            <div className={account ? "vis" : "hidden"}>
              <Button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </div>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}
export default Navbar;

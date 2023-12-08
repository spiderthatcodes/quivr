import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: space-evenly;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  .vis {
    display: flex;
  }
  .hidden {
    visibility: hidden;
  }
`;

export const NavbarLink = styled(Link)`
  color: #0d5274;
  font-size: 20px;
  text-decoration: none;
  margin: 30px;
  letter-spacing: 3px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  letter-spacing: 5px;
  text-decoration: none;
  margin: 30px;
  padding-right: 80px;
`;

export const Logo = styled.img`
  /* min-width: 100px; */
  /* height: 100%; */
  height: 80px;
  margin-left: 10px;
`;

export const Button = styled.a`
  background-color: none;
  color: #0d5274;
  font-size: larger;
  padding: 30px 15px;
  /* border-radius: 10px; */
  /* margin: 25px 0px; */
  cursor: pointer;
  border-color: white;

  a {
    text-decoration: none;
    color: #0d5274;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  /* font-weight: bold; */
  font-size: 30px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (mibn-width: 700px) {
    display: none;
  }
`;

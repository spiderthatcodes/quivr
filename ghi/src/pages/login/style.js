import styled from "styled-components";
import Background from "../../images/swellBackground.jpg";


export const LandBackground = styled.div`
  background-image: url(${Background});
  height: 60vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px 0;
`;

export const SignUp = styled.p`
  cursor: pointer;
  color: #df7357;
  text-align: center;
`;

export const AccountForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #0d5274;
  color: #f7e7be;
  text-align: center;
  align-items: center;
  padding: 32px 80px;
  border-radius: 8px;
  text-align: left;
  opacity:.75;

  h1 {
    text-align: center;
  }

  button {
    margin: 18px 0;
    background-color: rgb(253, 137, 64);
    padding: 12px 24px;
    color: #fff;
    border-radius: 4px;
    letter-spacing: 1px;
    font-weight: bold;
    border: none;
  }

  input {
    width: 20vw;
  }
`;

import styled from "styled-components";
import Background from "../../images/CreateOrder.jpg";

export const ImgBackground = styled.div`
  background-image: url(${Background});
  height: 60vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px 0;
`;

export const OrderForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #0d5274;
  color: #e3f5fd;
  text-align: center;
  align-items: center;
  padding: 32px 5rem;
  border-radius: 12px;
  text-align: left;
  opacity: 0.91;

  h1 {
    text-align: center;
    border-bottom: 1px solid #364043;
    color: #e2b842;
    font-size: 30px;
    font-weight: 600;
    padding: 0.5em 1em;
    text-align: left;
  }

  button {
    margin: 8px 0;
    background-color: rgb(253, 137, 64);
    padding: 8px 12px;
    color: #fff;
    border-radius: 8px;
    letter-spacing: 1px;
    font-weight: bold;
    border: none;
  }

  input {
    width: 8vw;
    height: 2vw;
    margin: 10px 0;
  }

  select {
    width: 10vw;
    height: 2.5vw;
    margin: 10px 0;
  }

  textarea {
    height: 5vw;
    width: 20vw;
  }
`;

export const Container1 = styled.div`
  /* flex: 50%; */
  display: flex;
  justify-content: flex-start;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Container3 = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledCart = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Container = styled.div`
  position: fixed;
  top: 20vh;
  bottom: 20vh;
  right: 0;
  width: 20em;
  background: #333;
  color: #eee;
  padding: 1em;
  border: 1px solid black;
  opacity: 0.75;
`;

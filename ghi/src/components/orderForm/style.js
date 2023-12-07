import styled from "styled-components";

export const OrderFormStyle = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #0d5274;
  color: #e3f5fd;
  text-align: center;
  align-items: center;
  padding: 20px;
  border-radius: 12px;

  img{
    height: 30vh;
  }

  h1 {
    text-align: center;
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
    width: 10vw;
    height: 2.2vw;
    margin: 10px 0;
    padding-left:4px;
  }

  select {
    width: 10vw;
    height: 2.5vw;
    margin: 10px 0;
    padding-left: 5px;
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

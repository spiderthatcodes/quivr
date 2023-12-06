import styled from "styled-components";
import Background from "../../images/pexels-pixabay-390051.jpg";

export const Title = styled.h1`
  text-align: center;
  font-family: sans-serif;
  font-size: 35px;
  letter-spacing: 3px;
  margin-bottom: 0px;
  margin-top: 0px;
  color: white;
`;

export const LandContainer = styled.div`
  #quote {
    text-align: center;
    font-family: "Luckiest Guy", cursive;
    font-size: 35px;
    margin: 0;
  }
`;

export const LandBackground = styled.div`
  background-image: url(${Background});
  height: 60vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px 0;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    height: 20vh;
    width: 20vh;
    margin: 8px;
    padding: 50px;
  }
`;

export const OurStory = styled.div`
  font-size: large;
  background-color: #e56a4b;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px 100px;
  gap: 110px;
  img {
    height: 30vh;
    width: 40vh;
    padding: 40px;
  }
  div {
    max-width: 75%;
  }
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 30px;
  line-height: 30px;
  background-color: #073e4f;
  color: white;
  margin-top: 15px;
  img {
    height: 70vh;
    width: 70vh;
  }
  div {
    max-width: 50%;
  }
`;

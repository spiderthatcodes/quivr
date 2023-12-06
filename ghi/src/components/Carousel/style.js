import styled from "styled-components";


export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #F7E7BE;
  .container {
    width: 50%;
    display: flex;
    gap: 100%;
    padding-left: 430px;
  }


`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  img {
    padding-top: 50px;
    padding-left: 26%;
    width: 100vh;

  }
`;

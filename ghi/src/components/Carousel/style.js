import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #f7e7be;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 57rem;
  padding-left: 28rem;

  @media (min-width:750px) {
    width: 100%;
    gap: 34rem;
    padding-left: 18rem;
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

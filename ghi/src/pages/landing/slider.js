import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Slider1 from "../../images/Slider1.png";
import Slider2 from "../../images/Slider2.png";
import Slider3 from "../../images/Slider3.png";


const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Adjust the height as needed */
  background-color: #ddd; /* Placeholder background color */
`;

const SlideContent = styled.div`
  text-align: center;
`;

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <SlideContainer>
        <SlideContent>
          {Slider1}
          <h3>Slide 1</h3>
        </SlideContent>
      </SlideContainer>
      <SlideContainer>
        <SlideContent>
          {Slider2}
          <h3>Slide 2</h3>
        </SlideContent>
      </SlideContainer>
      <SlideContainer>
        <SlideContent>
          {Slider3}
          <h3>Slide 3</h3>
        </SlideContent>
      </SlideContainer>
    </Slider>
  );
};

export default SliderComponent;

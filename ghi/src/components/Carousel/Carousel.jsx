import React, { useState } from "react";
import { CarouselContainer, CarouselWrapper, CarouselItem } from "./style";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { IconButton } from "@mui/material";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      <CarouselWrapper
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <img src={item} alt={`Slider ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselWrapper>
      <div className="container">
      <IconButton
        // style={{
        //   position: "absolute",
        //   top: "0",
        //   right: "0",
        // }}
        onClick={prevSlide}
      >
        <ArrowBackIosRoundedIcon fontSize="large" />
      </IconButton>
      <IconButton
        // style={{
        //   position: "absolute",
        //   top: "0",
        //   right: "0",
        // }}
        onClick={nextSlide}
      >
        <ArrowForwardIosRoundedIcon fontSize="large" />
      </IconButton>
      {/* <button onClick={prevSlide}>Prev</button> */}
      {/* <button onClick={nextSlide}>Next</button> */}
      </div>
    </CarouselContainer>
  );
};

export default Carousel;

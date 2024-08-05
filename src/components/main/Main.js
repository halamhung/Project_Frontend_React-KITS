import React, { useState } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import Header from "../header/Header";
import { Box } from "@mui/material";
import Footer from "../footer/Footer";

const banner = [
  {
    src: "../../assets/img/banner1.jpg",
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: "../../assets/img/banner1.jpg",
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: "../../assets/img/banner1.jpg",
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  }
]

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === banner.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? banner.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = banner.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-image" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={banner}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>

      </Box>
      <Footer />
    </>
  );
}
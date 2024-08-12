import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from 'reactstrap';
import Header from '../header/Header';
import './main.css'; // Import the CSS file
import Footer from '../footer/Footer';
import Product from '../product_category/Product_category';
import { Margin, Padding } from '@mui/icons-material';
import banner1 from '../../assets/img/banner/banner_1.jpg';
import banner2 from '../../assets/img/banner/banner_2.jpg';
import banner3 from '../../assets/img/banner/banner_3.jpg';
import { Grid, Typography } from '@mui/material';
import Voucher from '../voucher/Voucher';
import Product_category from '../product_category/Product_category';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS styles
import Product_list from '../product_list/Product_list';
import Product_item from '../product_list/Product_item';
import ProductListWrapper from '../ProductListWrapper';
const items = [
  {
    src: banner1,

    key: 1,
  },
  {
    src: banner2,

    key: 2,
  },
  {
    src: banner3,

    key: 3,
  },
];
AOS.init({ duration: 1000 });
function Main(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
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
      <Container className='mt-3'>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <CarouselIndicators
            items={items}
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
        <Product_category />
        <h2 className='uudai' data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" a
        ><span>ƯU ĐÃI CHO BẠN</span></h2>
        <Voucher />
        <h2 className='hangmoi' data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        ><span>Hàng mới</span></h2>
        <ProductListWrapper />
      </Container>


      <Footer />
    </>

  );
}

export default Main;
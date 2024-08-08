import React from "react";
import { Box, Card, CardMedia, Grid } from '@mui/material';
import { Container } from "reactstrap";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import './Product.css'; // Import the CSS file

export default function Product() {
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });

  const items = [
    { alt: "quanao", image: "//file.hstatic.net/1000253775/file/dao_pho_large.jpg", title: "quanao" },
    { alt: "quanao", image: "//file.hstatic.net/1000253775/file/dao_pho_large.jpg", title: "quanao" },
    { alt: "quanao", image: "//file.hstatic.net/1000253775/file/dao_pho_large.jpg", title: "quanao" },
    { alt: "quanao", image: "//file.hstatic.net/1000253775/file/dao_pho_large.jpg", title: "quanao" }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <Box className='mt-3'>
      {isSmallScreen ? (
        <div className="slick-container">
          <Slider className="slider" {...carouselSettings}>
            {items.map((item, index) => (
              <div key={index}>
                <Card>
                  <CardMedia
                    className="img-product"
                    component="img"
                    alt={item.alt}
                    image={item.image}
                    title={item.title}
                  />
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <Grid container spacing={3}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  ':hover': {
                    boxShadow: 20, // theme.shadows[20]

                  },
                }}>
                <CardMedia sx={{ cursor: "pointer" }}
                  component="img"
                  alt={item.alt}
                  image={item.image}
                  title={item.title}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
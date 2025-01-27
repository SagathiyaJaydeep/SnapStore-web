import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";
import Image1 from "../images/slider-img-01.avif";
import Image2 from "../images/slider-img-02.avif";
import Image3 from "../images/slider-img-03.avif";
import Image4 from "../images/slider-img-04.avif";
import { Link } from "react-router";

function SliderCmp() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Box
        sx={{
          width: "440px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Slider {...settings}>
          <Box>
            <Link to={"/"}>
              <img
                src={Image1}
                alt="Images"
                style={{
                  backgroundSize: "cover",
                  height: "240px",
                  width: "100%",
                }}
              />
            </Link>
          </Box>
          <Box>
            <Link to={"/"}>
              <img
                src={Image2}
                alt="Images"
                style={{
                  backgroundSize: "cover",
                  height: "240px",
                  width: "100%",
                }}
              />
            </Link>
          </Box>
          <Box>
            <Link to={"/"}>
              <img
                src={Image3}
                alt="Images"
                style={{
                  backgroundSize: "cover",
                  height: "240px",
                  width: "100%",
                }}
              />
            </Link>
          </Box>
          <Box>
            <Link to={"/"}>
              <img
                src={Image4}
                alt="Images"
                style={{
                  backgroundSize: "cover",
                  height: "240px",
                  width: "100%",
                }}
              />
            </Link>
          </Box>
        </Slider>
      </Box>
    </>
  );
}

export default SliderCmp;

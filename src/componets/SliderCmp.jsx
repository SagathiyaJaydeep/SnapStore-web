import React from "react";
import { Carousel } from "antd";
import { Box, Typography } from "@mui/material";
import Image1 from "../images/slider-img-01.avif";
import Image2 from "../images/slider-img-02.avif";
import Image3 from "../images/slider-img-03.avif";
import Image4 from "../images/slider-img-04.avif";

function SliderCmp() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <Box
        sx={{
          width: "440px",
          height: "240px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Carousel autoplay>
          <Box>
            <img
              src={Image1}
              alt="Images"
              style={{ contentStyle, backgroundSize: "cover", width: "100%" }}
            />
          </Box>
          <Box>
            <img
              src={Image2}
              alt="Images"
              style={{ contentStyle, backgroundSize: "cover", width: "100%" }}
            />
          </Box>
          <Box>
            <img
              src={Image3}
              alt="Images"
              style={{ contentStyle, backgroundSize: "cover", width: "100%" }}
            />
          </Box>
          <Box>
            <img
              src={Image4}
              alt="Images"
              style={{ contentStyle, backgroundSize: "cover", width: "100%" }}
            />
          </Box>
        </Carousel>
      </Box>
    </>
  );
}

export default SliderCmp;

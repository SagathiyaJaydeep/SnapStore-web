import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SliderCmp from "./SliderCmp";



const HomePageData = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ padding: "20px 0" }}>
          <Typography
            component={"p"}
            sx={{ marginBottom: "15px", fontSize: "14px", color: "#334155" }}
          >
            HOT SALE
          </Typography>

          {/* HERO TOP DATA */}
          <Box>
            <SliderCmp />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePageData;

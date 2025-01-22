import React from "react";
import brand from "../images/brand.svg";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Box sx={{ height: "100px", width: "100px" }}>
        <img src={brand} alt="" />
      </Box>
      <Typography sx={{ fontSize: "40px" }}>Navbar</Typography>
    </>
  );
};

export default Navbar;

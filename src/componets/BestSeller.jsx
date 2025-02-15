import { Box, Typography } from "@mui/material";
import React from "react";
import Apple from "../images/apple_icon.png";
import Xiaomi from "../images/xiaomi_icon.png";

const BestSeller = () => {
  return (
    <>
      <Box
        sx={{
          paddingLeft: "20px",
          display: "flex",
          justifyContent: "stretch",
          flexDirection: "column",
          rowGap: "10px",
          borderLeft:"1px solid #ccc"
        }}
      >
        <Typography sx={{ color: "#A1A1AA", fontSize: "10px" }}>
          BEST SELLERS
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
          <img
            src={Apple}
            style={{ height: "32px", width: "32px" }}
            alt="Apple"
          />
          <Box>
            <Typography sx={{ fontSize: "12px" }}>Apple</Typography>
            <Typography
              sx={{
                fontSize: "10px",
                padding: "0 4px",
                border: "1px solid rgb(209 213 219)",
                borderRadius: "6px",
              }}
            >
              96%
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "10px",
          }}
        >
          <img
            src={Xiaomi}
            style={{ height: "32px", width: "32px" }}
            alt="Xiaomi"
          />
          <Box>
            <Typography sx={{ fontSize: "12px" }}>Xiaomi</Typography>
            <Typography
              sx={{
                fontSize: "10px",
                padding: "0 4px",
                border: "1px solid rgb(209 213 219)",
                borderRadius: "6px",
              }}
            >
              97%
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
          <img
            src={Apple}
            style={{ height: "32px", width: "32px" }}
            alt="Apple"
          />
          <Box>
            <Typography sx={{ fontSize: "12px" }}>Apple</Typography>
            <Typography
              sx={{
                fontSize: "10px",
                padding: "0 4px",
                border: "1px solid rgb(209 213 219)",
                borderRadius: "6px",
              }}
            >
              96%
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BestSeller;

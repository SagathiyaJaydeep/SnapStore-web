import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  Drawer,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";

const SideDrawer = () => {
  let [data, setData] = useState([
    "tv",
    "audio",
    "laptop",
    "mobile",
    "gaming",
    "appliances",
  ]);

  const showData = async (el) => {
    try {
      await axios.get(`https://fakestoreapi.in/api/products/category`);
      // setData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showData();
  }, []);
  return (
    <Box>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            border: "none",
            width: 160,
            boxSizing: "border-box",
            marginTop: "66px",
            background:
              "linear-gradient(to bottom,rgb(255, 212, 216),rgb(255, 255, 255))",
          },
        }}
        variant="permanent"
      >
        <Divider />
        <List sx={{ marginTop: "15px" }}>
          <Typography
            component="p"
            sx={{
              paddingLeft: "22px",
              fontSize: "16px",
              fontWeight: "bolder",
              color: "#000",
            }}
          >
            Categories
          </Typography>

          {data.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => showData(text)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#fdeef0",
                  },
                }}
              >
                <ListItemText
                  primary={text}
                  sx={{
                    paddingLeft: "16px",
                    "& .MuiTypography-root": {
                      fontSize: "14px",
                      fontWeight: "550",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;

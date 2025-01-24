import React from "react";
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

const drawerWidth = 160;

const SideDrawer = () => {
  return (
    <Box>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            border: "none",
            width: drawerWidth,
            boxSizing: "border-box",
            position: "fixed",
            marginTop: "66px",
            background:
              "linear-gradient(to bottom,rgb(255, 212, 216),rgb(255, 255, 255))",
          },
        }}
        variant="permanent"
        anchor="left"
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

          {["Tv", "Audio", "Laptop", "Mobile", "Gaming", "Appliances"].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
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
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;

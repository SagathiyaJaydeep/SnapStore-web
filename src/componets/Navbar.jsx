import React, { useState } from "react";
import "../css/Navbar.css";
import brand from "../images/brand.svg";
import {
  AiOutlineShoppingCart,
  AiFillBell,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  Badge,
  Box,
  Container,
  IconButton,
  Link,
  TextField,
} from "@mui/material";
import {
  AuthenticationContext,
  SessionContext,
} from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";

const demoSession = {
  user: {
    name: "Bharat Kashyap",
    email: "bharatkashyap@outlook.com",
    image: "https://avatars.githubusercontent.com/u/19550456",
  },
};

const Navbar = () => {
  const [session, setSession] = useState(demoSession);

  return (
    <>
      <header>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Link>
                <img
                  src={brand}
                  alt="Logo"
                  style={{ height: "35px", width: "32px" }}
                />
              </Link>
            </Box>

            <Box sx={{ width: "55%", maxWidth: "100%" }}>
              <TextField
                fullWidth
                placeholder="Search the product"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <Box
                      component="span"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <AiOutlineSearch
                        style={{
                          height: "26px",
                          width: "26px",
                          color: "black",
                        }}
                      />
                    </Box>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px", // Rounded corners like in the image
                  },
                  "& .MuiInputLabel-root": {
                    display: "none", // Hides the label
                  },
                  "& .MuiInputBase-input::placeholder": {
                    fontWeight: "600", // Make placeholder text bold
                    color: "rgba(0, 0, 0, 0.6)", // Optional: Adjust placeholder color
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <IconButton>
                <Badge color="secondary">
                  <AiFillBell style={{ color: "#a0e629" }} />
                </Badge>
              </IconButton>

              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <AiOutlineShoppingCart style={{ color: "black" }} />
                </Badge>
              </IconButton>

              <AuthenticationContext.Provider value={session}>
                <SessionContext.Provider value={session}>
                  <Account />
                </SessionContext.Provider>
              </AuthenticationContext.Provider>
            </Box>
          </Box>
        </Container>
      </header>
    </>
  );
};

export default Navbar;

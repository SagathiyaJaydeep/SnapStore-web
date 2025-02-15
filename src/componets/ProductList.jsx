import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

function ProductList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ marginTop: "32px" }}>
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
        </Tabs>
      </Box>
    </>
  );
}

export default ProductList;

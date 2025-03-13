import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [allProductData, setAllProductData] = useState([]);
  const showAllProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.in/api/products");
      setAllProductData(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showAllProductData();
  }, []);
  return (
    <>
      <Box sx={{ marginTop: "32px" }}>
        <Tabs defaultValue={0}>
          <TabsList>
            <Tab value={0}>All</Tab>
            <Tab value={1}>Popular</Tab>
            <Tab value={2}>Cheap</Tab>
            <Tab value={3}>Expensive</Tab>
            <Tab value={4}>Sale</Tab>
          </TabsList>

          {/* Tab1 : AllProducts */}
          <TabPanel value={0}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                flexWrap: "wrap",
                gap: "1.25rem",
              }}
            >
              {allProductData.map((el, i) => (
                <Card
                  key={i}
                  sx={{
                    maxWidth: 245,
                    boxShadow: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <CardActionArea>
                    <Box
                      sx={{
                        borderRadius: "0 0 12px 12px ",
                        boxShadow:
                          "0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1)",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={el.image}
                        alt={el.title}
                        sx={{
                          width: 244,
                          height: 244,
                          objectFit: "contain",
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.07)",
                          },
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography>{el.title.slice(0, 30)}...</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </TabPanel>

          <TabPanel value={1}>lorem*50</TabPanel>
          <TabPanel value={2}>Cheap Product</TabPanel>
          <TabPanel value={3}>Expensive Product</TabPanel>
          <TabPanel value={4}>Sale</TabPanel>
        </Tabs>
      </Box>
    </>
  );
}

const Tab = styled(BaseTab)`
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  padding: 4px 8px;
  border: none;
  border-radius: 9999px;
  display: flex;

  &.${tabClasses.selected} {
    background-color: #3f3f46;
    color: white;
    transition: 0.5s ease;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  font-size: 14px;
  padding: 12px 8px;
  border-radius: 12px;
  `
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap:1rem;
  place-content: space-between start;
  `
);

export default ProductList;

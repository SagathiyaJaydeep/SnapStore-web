import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import React from "react";

function ProductList() {
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
          <TabPanel value={0}>All Product</TabPanel>
          <TabPanel value={1}>Popular Product</TabPanel>
          <TabPanel value={2}>Cheap Product</TabPanel>
          <TabPanel value={3}>Expensive Product</TabPanel>
          <TabPanel value={4}>Sale</TabPanel>
        </Tabs>
      </Box>
    </>
  );
}

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

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
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.6;
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

import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Breadcrumbs } from "@mui/material";
import SliderCmp from "./SliderCmp";
import BestSeller from "./BestSeller";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ProductList from "./ProductList";

const HomePageData = () => {
  let [data, setData] = useState([]);
  const FetchData = async () => {
    try {
      let res = await axios.get(
        "https://fakestoreapi.in/api/products/category?type=mobile"
      );
      setData(res.data.products);
      // console.log(res.data.products);
      toast.success("Data Fetch Successfully !!");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong !!");
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            padding: "20px 0",
            position: "absolute",
            top: 60,
            right: 30,
            left: 190,
            zIndex: -1,
          }}
        >
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: "16px" }}>
            <Typography
              sx={{ fontSize: "14px", color: "black", fontWeight: "600" }}
            >
              HOT SALE
            </Typography>
          </Breadcrumbs>

          {/* HERO TOP DATA */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "240px",
            }}
          >
            <SliderCmp />
            <BestSeller />
          </Box>

          {/* PRODUCTS */}
          {/* <table border={1} width={"100%"}>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Brand</th>
                <th scope="col">category</th>
                <th scope="col">description</th>
                <th scope="col">discount</th>
                <th scope="col">model</th>
                <th scope="col">price</th>
                <th scope="col">title</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.brand}</td>
                  <td>{el.category}</td>
                  <td>{el.description}</td>
                  <td>{el.discount}</td>
                  <td>{el.model}</td>
                  <td>{el.price}</td>
                  <td>{el.title}</td>
                  <td>
                    <img
                      style={{
                        height: "100px",
                        width: "100px",
                        backgroundSize: "cover",
                      }}
                      src={el.image}
                      alt="image"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <ProductList />
        </Box>
        <Toaster />
      </Container>
    </>
  );
};

export default HomePageData;

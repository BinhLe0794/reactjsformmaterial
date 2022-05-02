import { Box } from "@mui/material";
import Footer from "components/Common/Footer/Footer";
import Header from "components/Common/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "rgb(244,244,244)" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;

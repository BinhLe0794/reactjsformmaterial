import { Box, Container, Grid, LinearProgress, Paper } from "@mui/material";
import React from "react";
import { Outlet, useParams } from "react-router-dom";
import AddToCardForm from "../components/AddToCardForm";
import ProductInfo from "../components/ProductInfo";
import ProductMenu from "../components/ProductMenu";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/userProductDetail";

const DetailPage = (props) => {
  const params = useParams();
  const productId = params.id;

  const { product, loading } = useProductDetail(productId);
  const handleAddToCardSubmit = (formValue) => {
    console.log("formValue", formValue);
  };
  return (
    <Box>
      {loading && <LinearProgress />}
      <Container>
        {!loading && (
          <Paper elevation={0}>
            <Grid container>
              <Grid item sm={3} sx={{ borderRight: "1px solid gray" }}>
                <ProductThumbnail product={product} />
              </Grid>
              <Grid item sm={6} sx={{ marginTop: 5, marginLeft: 5 }}>
                <ProductInfo product={product} />
                <AddToCardForm onSubmit={handleAddToCardSubmit} />
              </Grid>
            </Grid>
          </Paper>
        )}
        <ProductMenu />
        <Outlet context={product} />
      </Container>
    </Box>
  );
};
DetailPage.propTypes = {};

export default DetailPage;

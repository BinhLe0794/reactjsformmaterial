import { Box, Container, Grid, LinearProgress, Paper } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import AddToCardForm from "../components/AddToCardForm";
import ProductInfo from "../components/ProductInfo";
import ProductMenu from "../components/ProductMenu";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/userProductDetail";
import { addToCart } from "../../Cart/cartSlice";

const DetailPage = (props) => {
  const params = useParams();
  const productId = params.id;
  const dispatch = useDispatch();
  //Call API
  const { product, loading } = useProductDetail(productId);

  // destructuring formValues
  const handleAddToCardSubmit = ({ quantity }) => {
    // console.log("formValue", formValue);
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    console.log(action);
    dispatch(action);
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

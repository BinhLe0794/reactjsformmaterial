import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const ProductList = ({ data = [] }) => {
  console.log("productList: ", data);
  return (
    <Box>
      <Grid container>
        {data.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Link to={product.id.toString()}>
              <Product product={product} height={118} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

ProductList.propTypes = {
  data: PropTypes.array,
};
export default ProductList;

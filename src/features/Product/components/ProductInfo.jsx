import React from "react";
import PropTypes from "prop-types";
import { Box, palette } from "@mui/system";
import { Typography } from "@mui/material";
import { formatPrice } from "utils";

const ProductInfo = ({ product = {} }) => {
  const { name, shortDescription, originalPrice, salePrice, promotionPercent } =
    product;
  //console.log(product);
  return (
    <Box
      sx={{
        paddingBottom: 2,
        borderBottom: "1px solid gray",
      }}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" sx={{}}>
        {shortDescription}
      </Typography>
      <Box sx={{ padding: 2, backgroundColor: palette.grey }}>
        <Box
          component="span"
          sx={{ fontSize: "2rem", marginRight: 3, fontWeight: "bold" }}>
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box
              component="span"
              sx={{ marginRight: 2, textDecoration: "line-through" }}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span" sx={{}}>
              {`-${promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

ProductInfo.prototype = {
  product: PropTypes.object,
};
export default ProductInfo;

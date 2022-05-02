import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants";
import PropTypes from "prop-types";
import React from "react";
import { formatPrice } from "utils";

const Product = ({ product }) => {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <>
      <Box padding={1}>
        <Box padding={1} minHeight="118px">
          <img src={thumbnailUrl} alt={product.name} width="100%" />
        </Box>
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {formatPrice(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
        </Typography>
        {/* <Typography variant='body2'>{product.originalPrice}</Typography> */}
      </Box>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};
export default Product;

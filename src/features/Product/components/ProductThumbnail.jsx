import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { STATIC_HOST } from "constants";
import { THUMBNAIL_PLACEHOLDER } from "constants";

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
}

ProductThumbnail.propTypes = {
  product: PropTypes.object,
};

export default ProductThumbnail;

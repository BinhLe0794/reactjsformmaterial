import React from "react";
import { useOutletContext } from "react-router-dom";
import { Paper } from "@mui/material";
import DOMPurify from "dompurify";

const ProductDescription = () => {
  const product = useOutletContext();
  // clean html using library
  const safeDescription = DOMPurify.sanitize(product.description);
  //console.log(product);
  return (
    <Paper elevation={0} sx={{ padding: 2 }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
    </Paper>
  );
};

ProductDescription.propTypes = {};

export default ProductDescription;

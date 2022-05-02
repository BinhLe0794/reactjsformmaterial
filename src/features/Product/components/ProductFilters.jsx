import React from "react";
import PropTypes from "prop-types";
import FilterByCategory from "./Filters/FilterByCategory";
import { Box } from "@mui/material";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

const ProductFilters = ({ filters, onChange }) => {
  const handleCategoryChange = (newCategoryId) => {
    console.log("newCategoryId: ", newCategoryId);
    //kiem tra function duoc truyen xuong tu cha co bi null ?
    if (!onChange) return;

    // giu lai cac filters cu va cap nhat filter moi
    const newFilters = {
      categoryId: newCategoryId,
    };

    onChange(newFilters); //<== onchange tu component cha
  };

  const handleChange = (values) => {
    console.log("newPriceChange: ", values);
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
};

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default ProductFilters;

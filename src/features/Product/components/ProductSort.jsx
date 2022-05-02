import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

const ProductSort = ({ currentSort, onChange }) => {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      value={currentSort}
      onChange={handleSortChange}
      textColor='secondary'
      indicatorColor='secondary'>
      <Tab label='Price low to high' value='salePrice:asc'></Tab>
      <Tab label='Price high to low' value='salePrice:desc'></Tab>
    </Tabs>
  );
};

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default ProductSort;

import { Box, Button, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";

const FilterByPrice = ({ onChange }) => {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: [value],
    }));
  };
  const handleSubmit = () => {
    console.log("price submit", values);
    if (onChange) onChange(values);
  };

  return (
    <Box
      sx={{
        padding: 2,
        borderTop: `1px solid gray`,
      }}>
      <Typography variant="subtitle2">Price</Typography>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          marginTop: 1,
          marginBottom: 1,
        }}>
        <TextField
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Apply
      </Button>
    </Box>
  );
};

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

export default FilterByPrice;

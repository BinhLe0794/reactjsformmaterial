import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const FilterByService = ({ filters = {}, onChange }) => {
  // const [values, setValues] = useState({
  //   isPromotion: Boolean(filters.isPromotion),
  //   isFreeShip: Boolean(filters.isFreeShip),
  // });

  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    // setValues((prevValues) => ({
    //   ...prevValues,
    //   [name]: [checked],
    // }));

    if (onChange) onChange({ [name]: checked });
  };

  return (
    <Box
      sx={{
        padding: 2,
        borderTop: `1px solid gray`,
      }}>
      <Typography variant="subtitle2">Service</Typography>
      <ul>
        {[
          { value: "isPromotion", label: "Sale Off" },
          { value: "isFreeShip", label: "Delivery" },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
};

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

export default FilterByService;

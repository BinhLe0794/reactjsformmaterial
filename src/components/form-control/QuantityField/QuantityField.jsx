import { AddCircleOutlined, RemoveCircleOutline } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

function QuantityField(props) {
  const { form, name, label, disabled } = props;

  const { errors, setValue } = form;

  const hasError = !!errors[name];

  return (
    <FormControl
      fullWidth
      size="small"
      margin="normal"
      variant="outlined"
      error={hasError}>
      <Typography pl={1}>{label}</Typography>
      <Controller
        name={name}
        control={form.control}
        render={({ name, value, onChange, onBlur }) => (
          <Box
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              maxWidth: "170px",
            }}>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }>
              <RemoveCircleOutline />
            </IconButton>
            <OutlinedInput
              id={name}
              type="number"
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                )
              }>
              <AddCircleOutlined />
            </IconButton>
          </Box>
        )}></Controller>
      <FormHelperText variant="outlined" id={name}>
        {errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default QuantityField;

import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

function InputField(props) {
  const { form, name, label, disabled, type } = props;

  const { errors } = form;

  const hasError = !!errors[name];

  //console.log(`render ${name}`);

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ name, value, onChange, onBlur }) => (
        <TextField
          name={name}
          type={type}
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={errors[name]?.message}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
}

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;

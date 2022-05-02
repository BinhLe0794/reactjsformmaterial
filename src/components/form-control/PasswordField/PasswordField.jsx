import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

function PasswordField(props) {
  const { form, name, label, disabled } = props;

  const { errors } = form;

  const hasError = !!errors[name];

  const [showPassword, setShowPassword] = useState(false);

  const toogleShowPassword = () => {
    setShowPassword((preState) => !preState);
  };
  //console.log(`render ${name}`);
  return (
    <FormControl fullWidth margin="normal" variant="outlined" error={hasError}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        render={({ name, value, onChange, onBlur }) => (
          <OutlinedInput
            id={name}
            type={showPassword ? "text" : "password"}
            label={label}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toogleShowPassword}
                  edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        )}></Controller>
      <FormHelperText variant="outlined" id={name}>
        {errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PasswordField;

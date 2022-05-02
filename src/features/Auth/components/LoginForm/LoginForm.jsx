import { yupResolver } from "@hookform/resolvers/yup";
import { LoginOutlined } from "@mui/icons-material";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import InputField from "components/form-control/InputField/InputField";
import PasswordField from "components/form-control/PasswordField/PasswordField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function LoginForm(props) {
  const schema = yup
    .object()
    .shape({
      identifier: yup
        .string()
        .required("Please input the Email")
        .email("Please enter the valid Email"),
      password: yup.string().required("Please input your Password"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    // kiem tra pros tu component cha truyen xuong ? func => submit
    if (props.onSubmit) {
      await props.onSubmit(values);
    }

    form.formState.isSubmitted ? form.reset() : form.trigger();
  };

  const { isSubmitting } = form.formState;

  return (
    <div sx={{ position: "relative", paddingTop: 2 }}>
      <Avatar
        sx={{
          margin: "0 auto",
          backgroundColor: "primary.main",
        }}>
        <LoginOutlined></LoginOutlined>
      </Avatar>

      <Typography component="h3" variant="h5">
        LOGIN
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" form={form} label="Username" />
        <PasswordField name="password" form={form} label="Password" />

        <Button
          sx={{ mx: 0, my: (theme) => theme.spacing(3) }}
          type="submit"
          fullWidth
          disabled={isSubmitting}
          variant="contained">
          Sign In
        </Button>
      </form>
      {isSubmitting && <LinearProgress sx={{ position: "absolute", top: 1 }} />}
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;

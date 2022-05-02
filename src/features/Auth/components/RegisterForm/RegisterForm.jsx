import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import InputField from "components/form-control/InputField/InputField";
import PasswordField from "components/form-control/PasswordField/PasswordField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function RegisterForm(props) {
  const schema = yup
    .object()
    .shape({
      fullName: yup.string().required("Please input the Name"),
      email: yup
        .string()
        .required("Please input the Email")
        .email("Please enter the valid Email"),
      password: yup.string().required("Please input your Password"),
      retypePassword: yup
        .string()
        .required("Please retype your Password")
        .oneOf([yup.ref("password")], "Password does not match"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
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
    <div sx={{ position: "relative", spacing: 2 }}>
      <Avatar sx={{ margin: "0 auto", bgcolor: "primary.main" }}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography
        sx={{ textAlign: "center", margin: "2 0 3 0 " }}
        component="h3"
        variant="h5">
        Create an Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" form={form} label="Full Name" />
        <InputField name="email" form={form} label="Email" />
        <PasswordField name="password" form={form} label="Password" />
        <PasswordField
          name="retypePassword"
          form={form}
          label="Confirm Password"
        />

        <Button
          type="submit"
          sx={{ margin: "13 0 3 0" }}
          fullWidth
          disabled={isSubmitting}
          variant="contained">
          Submit
        </Button>
      </form>
      {isSubmitting && <LinearProgress />}
    </div>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RegisterForm;

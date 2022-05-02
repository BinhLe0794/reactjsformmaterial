import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      console.log("Form Login", values);

      const action = login(values);
      const resultAction = await dispatch(action);

      const user = unwrapResult(resultAction);
      console.log("Unwrap Result: ", user);
      // enqueueSnackbar("Login Successfully ", { variant: "success" });

      const { onCloseDialog } = props;

      if (onCloseDialog) onCloseDialog();
    } catch (error) {
      enqueueSnackbar(`Login ${error.message}`, { variant: "error" });
      // console.log(error);
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
}

Login.propTypes = {
  onCloseDialog: PropTypes.func,
};

export default Login;

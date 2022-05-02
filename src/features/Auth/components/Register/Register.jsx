// import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "features/Auth/userSlice";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm/RegisterForm";

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      values.username = values.email;

      console.log("Form submit Value", values);

      const action = register(values);
      dispatch(action);

      // const resultAction = await dispatch(action);
      // const user = unwrapResult(resultAction);

      enqueueSnackbar("Register Successfully ", { variant: "success" });

      const { onCloseDialog } = props;

      if (onCloseDialog) onCloseDialog();
    } catch (error) {
      enqueueSnackbar(`Register ${error.message}`, { variant: "error" });
      // console.log(error);
    }
  };

  return <RegisterForm onSubmit={handleSubmit} />;
}

Register.propTypes = {
  onCloseDialog: PropTypes.func,
};

export default Register;

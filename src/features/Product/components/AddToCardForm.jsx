import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import QuantityField from "components/form-control/QuantityField/QuantityField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const AddToCardForm = ({ onSubmit = null }) => {
  const schema = yup
    .object()
    .shape({
      quantity: yup
        .number()
        .min(1, "Please enter at least 1")
        .max(50, "Maximum 50")
        .required("Please enter the quantity")
        .typeError("Please enter a number"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    // kiem tra pros tu component cha truyen xuong ? func => submit
    if (onSubmit) {
      await onSubmit(values);
    }

    form.formState.isSubmitted ? form.reset() : form.trigger();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form} />
      <Button
        sx={{ width: "250px" }}
        type="submit"
        size="large"
        variant="contained">
        Add to Cart
      </Button>
    </form>
  );
};

AddToCardForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddToCardForm;

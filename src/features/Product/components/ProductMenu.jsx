import { Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",

    padding: 0,
    listStyleType: "none",

    "& > li ": {
      padding: theme.spacing(2, 4),
    },

    "& > li > a": {
      color: theme.palette.grey[700],
      textDecoration: "none",
    },

    "& > li > a.active": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
    },
  },
}));

const ProductMenu = () => {
  const classes = useStyles();

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to="" end>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} to="additional">
          Additional Information
        </Link>
      </li>
      <li>
        <Link component={NavLink} to="reviews">
          Reviews
        </Link>
      </li>
    </Box>
  );
};

export default ProductMenu;

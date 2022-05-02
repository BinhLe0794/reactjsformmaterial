import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import categoryApi from "api/categoryApi";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    "& > li": {
      marginTop: theme.spacing(1),
      transition: "all .025s",
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.main,
      }, // & dai dien cho vi tri hien tai
    },
  },
}));

const FilterByCategory = ({ onChange }) => {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const getCatogoryApi = async () => {
      try {
        const list = await categoryApi.getAll();

        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log("category error: ", error);
      }
    };

    getCatogoryApi();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CATEGORIES</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li
            key={category.id}
            variant="body2"
            onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2"> {category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

export default FilterByCategory;

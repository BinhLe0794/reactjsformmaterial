import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import productApi from "api/productApi";
import React, { useEffect, useState } from "react";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import ProductSort from "../components/ProductSort";

const useStyles = makeStyles((theme) => ({
  root: {},
  left: { width: "250px" },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    paddingBottom: "18px",
  },
}));

const ListPage = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState();
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    _sort: "salePrice:asc",
  });
  const [pagination, setPagination] = useState({
    total: 10,
    limit: 10,
    page: 1,
  });
  //call API
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);

        setProductList(data);
        setPagination(pagination);
        console.log("response API: ", data, pagination);
      } catch (error) {
        //enqueueSnackbar(`Network ${error.message}`, { variant: "error" });
        console.log("productApiError:", error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newValue) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _sort: newValue,
    }));
  };
  const handleFiltersChange = (newFilters) => {
    setFilters((preFilters) => ({
      ...preFilters,
      ...newFilters,
    }));
  };
  return (
    <Box pt={4}>
      <Container>
        <Grid container spacing={1}>
          {/* Col left: filters */}
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          {/* Col Right: list of product */}
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {/*  skeleton & product list*/}
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}></ProductSort>
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList} />
              )}
              <Box className={classes.pagination}>
                <Pagination
                  onChange={handlePageChange}
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ListPage;

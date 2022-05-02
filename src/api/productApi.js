import axiosClient from "./axiosClient";

const productApi = {
  async getAll(params) {
    //Transform _page to _start
    const newParams = { ...params };
    //if _page <= 1 or hok truyen => 0
    //
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 50);
    //remove un-needed key
    delete newParams._page;
    //Fetch product list + count
    const productList = await axiosClient.get("/products", {
      params: newParams,
    });
    const count = await axiosClient.get("/products/count", {
      params: newParams,
    });
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;

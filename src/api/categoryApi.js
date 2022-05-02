import axiosClient from "./axiosClient";

const categoryApi = {
  async getAll() {
    const responce = await axiosClient.get("/categories");
    return responce;
  },
};

export default categoryApi;

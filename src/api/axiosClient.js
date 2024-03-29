import axios from "axios";
import { STATIC_HOST } from "constants";

const axiosClient = axios.create({
  baseURL: STATIC_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    console.log("interceptor API:", error.response);

    const { config, status, data } = error.response;
    const URLs = ["/auth/local/register", "/auth/local/"];
    if (URLs.includes(config.url) && status === 400) {
      const errorList = data.data || [];
      const firstError = errorList.length > 0 ? errorList[0] : {};
      const messageList = firstError.messages || [];
      const firstMessage = messageList.length > 0 ? messageList[0] : {};

      throw Error(firstMessage.message);
    }
    return Promise.reject(error);
  }
);
export default axiosClient;

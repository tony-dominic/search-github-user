import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    switch (status) {
      case 404:
        console.error("Error: Resource not found");
        break;
      case 500:
        console.error("Error: Internal Server Error");
        break;
      default:
        console.error("Error: Something went wrong");
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

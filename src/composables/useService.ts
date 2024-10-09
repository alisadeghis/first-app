import axios from "axios";

export const API_KEY = "384ac7b4fe0f440e97b203716240810";
const baseURL = `http://api.weatherapi.com/v1/`;

export const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user");
    if (token) {
      // set Authorization
    }
    return config;
  },
  (error) => Promise.reject(error)
);

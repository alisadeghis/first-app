import axios from "axios";

export const API_KEY = "e60a8955e0767eca7eca53ec88fd500d";
const baseURL = `https://api.openweathermap.org/data/2.5`;

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

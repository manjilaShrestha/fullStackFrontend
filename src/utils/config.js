// export const BASE_URL = "http://localhost:3000/api";

// import axios from "axios";
// import Cookies from "js-cookie";

// export const publicAPI = axios.create({
//     baseURL: "http://localhost:3000/api",
//     withCredentials: true,
// });

// export const privateAPI = axios.create({
//     baseURL: "http://localhost:3000/api",
//     withCredentials: true,
// });

// privateAPI.interceptors.request.use((config) => {
//     const token = Cookies.get("token");
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// src/utils/config.js
import axios from "axios";
import Cookies from "js-cookie";

export const BASE_URL = "http://localhost:3000/api";

export const publicAPI = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const privateAPI = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

privateAPI.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

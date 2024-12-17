import axios from "axios";
import { SERVER_PORT } from "../config";
const api = axios.create({
  // baseURL: `https://solana-pumpfun-website.render.com/api`,
  baseURL: `http://localhost:${SERVER_PORT}/v1/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (tmp) => {
    // Get the current endpoint from the request URL
    const endpoint = tmp.url;

    // Skip token for login and register endpoints
    if (
      endpoint?.includes("/auth/login") ||
      endpoint?.includes("/auth/register")
    ) {
      return tmp;
    }

    // For all other requests, add the JWT token
    const token = localStorage.getItem("token");
    if (token) {
      tmp.headers.Authorization = `Bearer ${token}`;
    }
    return tmp;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

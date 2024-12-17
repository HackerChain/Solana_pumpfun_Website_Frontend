import axios from "axios";
const api = axios.create({
  // baseURL: `https://solana-pumpfun-website.render.com/api`,
  baseURL: "http://localhost:3000/v1/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

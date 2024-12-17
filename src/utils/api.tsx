import axios from "axios";
import { SERVER_PORT } from "../config";
const api = axios.create({
  // baseURL: `https://solana-pumpfun-website.render.com/api`,
  baseURL: `http://localhost:${SERVER_PORT}/v1/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

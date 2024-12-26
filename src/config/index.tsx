export const config = {
  VITE_SERVER_URL: import.meta.env.VITE_SERVER_URL || "http://localhost:5000",
  apiVersion: "v1",
};

export const FETCH_CYCLE = 5 * 60 * 1000;

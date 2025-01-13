import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://your-api-base-url.com",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
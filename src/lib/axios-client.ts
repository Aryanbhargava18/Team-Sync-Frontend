import { CustomError } from "@/types/custom-error.type";
import axios from "axios";

// const baseURL = import.meta.env.VITE_API_BASE_URL;

const options = {
    baseURL: "https://team-sync-bankend.onrender.com/api",
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const response = error.response;
    if (response) {
      const { data, status } = response;

      if (data === "Unauthorized" && status === 401) {
        window.location.href = "/";
      }

      const customError: CustomError = {
        ...error,
        errorCode: data?.errorCode || "UNKNOWN_ERROR",
      };

      return Promise.reject(customError);
    }

    // Handle errors without response (network errors, etc.)
    return Promise.reject(error);
  }
);


export default API;

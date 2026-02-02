// src/lib/api.ts
import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

// Axios instance
export const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  baseURL: 'https://open-heaven-portal-web-api.onrender.com',
  // baseURL: 'http://localhost:3000',
  timeout: 15000,
});

// Optional response error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

// HTTP helpers
export const get = async <T>(url: string, params?: object): Promise<T> => {
  const res = await api.get<T>(url, { params });
  return res.data;
};

export const post = async <T>(
  url: string,
  data?: unknown
): Promise<T> => {
  const res = await api.post<T>(url, data);
  return res.data;
};

// React Query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

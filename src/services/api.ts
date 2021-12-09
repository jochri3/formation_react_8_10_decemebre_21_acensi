import axios, { AxiosRequestConfig, AxiosError } from "axios";

const API = () => {
  const baseConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
  };

  const instance = axios.create(baseConfig);

  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
  });

  return instance;
};

export default API();

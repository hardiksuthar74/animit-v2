import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";

const config = {
  JIKAN: "https://api.jikan.moe/v4",
};

const options = {
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
};

export const api = axios.create({
  baseURL: config.JIKAN,
  ...options,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    const errorCode = error?.response?.status;

    if (errorCode === 404) {
      toast.error("Something went wrong!");
    }
    return Promise.reject(error);
  }
);

export const fetchTopAnimes = () => {
  return api.get(`/top/anime?type=tv&limit=10&filter=airing`);
};

export const fetchAnime = (id: number) => {
  return api.get(`/anime/${id}`);
};

export const fetchFeaturesAnime = (status: string, order_by: string) => {
  return api.get(
    `/anime?status=${status}&order_by=${order_by}&limit=5&type=tv`
  );
};

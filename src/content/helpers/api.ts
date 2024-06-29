import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export const apiClient = {
  get: <T>(
    route: string,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> => axios.get(route, { params: config?.params }),
  post: <T>(route: string, data: any): Promise<AxiosResponse<T>> =>
    axios.post(route, data),
  put: <T>(route: string, data: any): Promise<AxiosResponse<T>> =>
    axios.put(route, data),
  patch: <T>(route: string, data: any): Promise<AxiosResponse<T>> =>
    axios.patch(route, data),
};

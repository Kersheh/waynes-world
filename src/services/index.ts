import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { RequestData, ResponseData } from 'types';

export * from './library';
export * from './spotify';

const formatErrorResponse = (err: {
  config: {
    url: string;
  };
  status: number;
  data?: {
    [key: string]: any;
  };
}) => ({
  url: err.config.url,
  status: err.status,
  data: err?.data ?? {}
});

export const getRequest = async (
  url: string,
  options = {
    responseType: 'json'
  } as AxiosRequestConfig
) => {
  try {
    return await axios.get<AxiosResponse<ResponseData>>(url, options);
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('API Error:', formatErrorResponse(err.response));
    }

    return formatErrorResponse(err.response);
  }
};

export const postRequest = async (
  url: string,
  data: RequestData,
  options = {
    responseType: 'json'
  } as AxiosRequestConfig
) => {
  try {
    return await axios.post<AxiosResponse<ResponseData>>(url, data, options);
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('API Error:', formatErrorResponse(err.response));
    }

    return formatErrorResponse(err.response);
  }
};

export const putRequest = async (
  url: string,
  data: RequestData,
  options = {
    responseType: 'json'
  } as AxiosRequestConfig
) => {
  try {
    return await axios.put<AxiosResponse<ResponseData>>(url, data, options);
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('API Error:', formatErrorResponse(err.response));
    }

    return formatErrorResponse(err.response);
  }
};

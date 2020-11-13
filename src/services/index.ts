import axios, { AxiosRequestConfig } from 'axios';

import { RequestData } from 'types';

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
  url: err?.config?.url ?? 'Unknown url',
  status: err?.status ?? '500',
  data: err?.data ?? {}
});

export const getRequest = async (
  url: string,
  options = {
    responseType: 'json'
  } as AxiosRequestConfig
) => {
  try {
    return await axios.get(url, options);
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
    return await axios.post(url, data, options);
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
    return await axios.put(url, data, options);
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('API Error:', formatErrorResponse(err.response));
    }

    return formatErrorResponse(err.response);
  }
};

export const deleteRequest = async (
  url: string,
  options = {
    responseType: 'json'
  } as AxiosRequestConfig
) => {
  try {
    return await axios.delete(url, options);
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('API Error:', formatErrorResponse(err.response));
    }

    return formatErrorResponse(err.response);
  }
};

// for external calls
export const getArrayBufferRequest = async (url: string) => {
  try {
    const res = await fetch(url);
    return await res.arrayBuffer();
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('getArrayBufferRequest failed', err);
    }

    return err;
  }
};

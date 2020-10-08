import axios, { AxiosRequestConfig } from 'axios';

import { RequestData } from 'types';

export * from './spotify';

export const getRequest = async (url: string, options?: AxiosRequestConfig) => {
  try {
    const res = await axios.get(url, options);

    if (process.env.NODE_ENV !== 'production') {
      console.log('API Res:', res);
    }

    return res;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('API Error:', error);
    }

    throw error;
  }
};

export const postRequest = async (
  url: string,
  data: RequestData,
  options?: AxiosRequestConfig
) => {
  try {
    const res = await axios.post(url, data, options);

    if (process.env.NODE_ENV !== 'production') {
      console.log('API Res:', res);
    }

    return res;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('API Error:', error);
    }

    throw error;
  }
};

export const putRequest = async (
  url: string,
  data: RequestData,
  options?: AxiosRequestConfig
) => {
  try {
    const res = await axios.put(url, data, options);

    if (process.env.NODE_ENV !== 'production') {
      console.log('API Res:', res);
    }

    return res;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('API Error:', error);
    }

    throw error;
  }
};

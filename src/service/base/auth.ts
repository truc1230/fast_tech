/** @format */

import { API_URL } from '../api_url';
import axiosInstance from '../axiosInstance';
type TypeLoginPayload = {
  username: string;
  password: string;
};
export const authService = {
  login: (payload: TypeLoginPayload) => {
    const rs = axiosInstance.get(API_URL.auth);
    console.log(rs)
    return rs 
  },
};

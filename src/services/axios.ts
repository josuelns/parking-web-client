import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = import.meta.env.VITE_API_URL ?? 'https://parking-lot-to-pfz.herokuapp.com';

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('parking-token');

  if (token) {
    config.headers.Authorization = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
  }

  return config;
});

export default api;

export const setAuthToken = (token: string) => {
  Cookies.set('parking-token', token, { sameSite: 'strict' });
};

export const clearAuthToken = () => {
  Cookies.remove('parking-token');
};

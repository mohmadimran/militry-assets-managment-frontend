import axios from 'axios';

const API = axios.create({
  baseURL: 'https://militry-assets-managment.onrender.com/',
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);

// Employee
export const commonDashbordApi = (params) => API.get('/api/dashboard', { params });

export default API;

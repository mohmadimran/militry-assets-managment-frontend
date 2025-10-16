// import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
// });

// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default API;

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://resignation-backend.onrender.com/api',
});

// Attach token for each request
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
export const submitResignation = (data) => API.post('/user/resign', data);
export const submitExitResponses = (data) => API.post('/user/responses', data);

// Admin
export const getAllResignations = () => API.get('/admin/resignations');
export const concludeResignation = (data) => API.put('/admin/conclude_resignation', data);
export const getAllExitResponses = () => API.get('/admin/exit_responses');

export default API;

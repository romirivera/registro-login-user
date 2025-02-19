import axios from 'axios';
const api = axios.create({
  baseUrl: 'http://localhost:5173', //cambia según el servidor
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;

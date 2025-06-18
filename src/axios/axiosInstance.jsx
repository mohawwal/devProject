import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://wallydevapi.onrender.com/api/v1',
  withCredentials: true,
});

export default axiosInstance;

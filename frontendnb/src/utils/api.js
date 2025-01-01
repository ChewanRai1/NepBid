// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4444/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:5678/api',
  timeout: 1000,
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export default client;

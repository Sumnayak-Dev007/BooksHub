import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://books.divinezon.com/api/', // Books API 
});

export default apiClient;
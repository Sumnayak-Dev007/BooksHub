import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://divinezon-booksapi.onrender.com/api/', // Books API 
});

export default apiClient;
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6276ea862f94a1d706082f31.mockapi.io/',
});

export default api;

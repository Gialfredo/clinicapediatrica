import axios from 'axios';

// Configuración de Axios
const api = axios.create({
  baseURL: 'http://172.16.16.100:5000/api', // Cambia esta URL a la de tu backend
});

export default api;

import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api', // Porta 8000 para o seu server PHP local
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;

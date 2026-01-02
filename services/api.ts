import axios from 'axios';

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const api = axios.create({
    baseURL: isLocal
        ? (import.meta.env.VITE_API_URL || 'http://localhost:8000/api')
        : 'https://gta-tech-backend.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;

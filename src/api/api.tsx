import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// eslint-disable-next-line react-refresh/only-export-components
export default API;

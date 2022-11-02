import axios from 'axios';
const api = axios.create({
    baseURL: "https://63611d89af66cc87dc2375fd.mockapi.io/api/"
});

export default api;

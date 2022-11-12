import axios from 'axios';

const provider = axios.create({
    baseURL: process.env.BASE_URL
});

export default provider;
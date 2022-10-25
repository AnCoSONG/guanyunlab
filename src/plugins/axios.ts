import axios from 'axios';

const request = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000
})

request.interceptors.request.use(
    req => {
        req.data = JSON.stringify(req.data);
        req.headers = {
            'Content-Type': 'application/json'
        }
        return req;
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default request;

import axios from "axios";

const $host = axios.create({ // для обычных запросов который не требует авторизации
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({ // для авторизаванных запросов 
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}


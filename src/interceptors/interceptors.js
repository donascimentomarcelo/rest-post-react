import Axios from "axios";

export const reqInterceptor = config => {
    if (!config.url.endsWith('login') || !config.url.endsWith('refresh')) {
        const token = JSON.parse(localStorage.getItem('token'));
        config.headers.Authorization = token;
    }

    return config;
}

export const resInterceptor = response => {
    return response;
}

export const callbackErrorReq = error => {
    console.log(error)
}

export const callbackErrorRes = error => {
    const requestConfig = error.config;

    if (error.response.status === 401) {     
        return Axios(requestConfig);
    }

    if (error.response.status === 403) {
        localStorage.setItem('token', null);
        return Axios(requestConfig);
    }
    
    return Promise.reject(error);
}
import Axios from "axios";
const api_url = 'http://localhost:8080/api';

export function getList() {
    const req = Axios.get(`${api_url}/categories`);
    return {
        type: 'CATEGORIES_FETCHED',
        payload: req
    }
}

export function create(values) {
    Axios.post(`${api_url}/categories`, values);
    return {
        type: 'TEMP'
    }
}
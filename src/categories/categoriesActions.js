import Axios from "axios";
const api_url = 'http://localhost:8080/api';

export function getList() {
    const req = Axios.get(`${api_url}/categories`);
    return {
        type: 'CATEGORIES_FETCHED',
        payload: req
    }
}
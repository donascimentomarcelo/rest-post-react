import Axios from "axios";

const api_url = 'http://localhost:8080/api';
const path = '/subcategories';

export function getAll() {
    const req = Axios.get(`${api_url}${path}`);
    return {
        type: 'LIST',
        payload: req
    };
}

export function update(subcategory) { console.log(subcategory); } 
export function remove(subcategory) { console.log(subcategory); }

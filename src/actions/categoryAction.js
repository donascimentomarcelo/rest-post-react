import Axios from "axios";
import * as env from './../environment/environment';

const path = '/categories';

export function getAllCategories() {
    const req = Axios.get(`${env.API_URL}${path}`);
    return {
        type: 'CATEGORIES_FETCHED',
        payload: req
    };
}

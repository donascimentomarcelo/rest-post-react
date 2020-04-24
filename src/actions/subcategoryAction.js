import Axios from "axios";
import * as ENV from './../environment/environment';
import * as PATH from './../helpers/constants';

export function getAllSubcategories() {
    const req = Axios.get(`${ENV.API_URL}${PATH.SUBCATEGORIES}`);
    return {
        type: 'SUBCATEGORIES_FETCHED',
        payload: req
    };
}
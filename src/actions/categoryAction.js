import Axios from "axios";
import * as ENV from './../environment/environment';
import * as PATH from './../helpers/constants';
import { initialize } from "redux-form";

export function getAllCategories() {
    const req = Axios.get(`${ENV.API_URL}${PATH.CATEGORIES}`);
    return {
        type: 'CATEGORIES_FETCHED',
        payload: req
    };
}

export function saveCategory(values) {
    const req = Axios.post(`${ENV.API_URL}${PATH.CATEGORIES}`, values);
    return {
        type: 'CATEGORY_CREATED',
        payload: req
    };
}

export function initCategoryForm() {
    return [
        initialize('categoryForm')
    ];
}
import Axios from "axios";
import * as ENV from './../environment/environment';
import * as PATH from './../helpers/constants';
import * as REDUCERS from './../helpers/reducers';
import { initialize } from "redux-form";

export function getAllCategories() {
    const req = Axios.get(`${ENV.API_URL}${PATH.CATEGORIES}`);
    return {
        type: REDUCERS.CATEGORIES_FETCHED,
        payload: req
    };
}

export function saveCategory(category) {
    const req = Axios.post(`${ENV.API_URL}${PATH.CATEGORIES}`, category);
    return {
        type: REDUCERS.CATEGORY_CREATED,
        payload: req
    };
}

export function updateCategory(category, id) {
    const req = Axios.put(`${ENV.API_URL}${PATH.CATEGORIES}/${id}`, category);
    return {
        type: REDUCERS.CATEGORY_UPDATED,
        payload: req
    };
}

export function deleteCategory(id) {
    const req = Axios.delete(`${ENV.API_URL}${PATH.CATEGORIES}/${id}`);
    return {
        type: REDUCERS.CATEGORY_DELETED,
        payload: req
    };
}

export function findByCategoryName(name) {
    const req = Axios.get(`${ENV.API_URL}${PATH.CATEGORIES}/findByName?name=${name}`);
    return {
        type: REDUCERS.CATEGORY_SEARCHED,
        payload: req
    };
}

export function setCategoryId(categoryId) {
    return {
        type: REDUCERS.SET_CATEGORYID,
        payload: categoryId
    };
}

export function openModal(show) {
    return  {
        type: REDUCERS.SET_CATEGORY_MODAL,
        payload: show
    }
}

export function resetCategoriesSearched() { 
    return {
        type: REDUCERS.CATEGORY_SEARCHED,
        payload: []
    };
}

export function removeCategoryFromSearch(id) {
    return {
        type: REDUCERS.REMOVE_CATEGORY_FROM_SEARCH,
        payload: id
    }
}

export function resetCategoryFieldSearch() {
    return [
        initialize('categorySearchForm')
    ];
}

export function initCategoryForm() {
    return [
        initialize('categoryForm')
    ];
}

export function setCategoryForm(category) {
    return [
        initialize('categoryForm', category)
    ];
}
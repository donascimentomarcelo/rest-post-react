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

export function saveCategory(category) {
    const req = Axios.post(`${ENV.API_URL}${PATH.CATEGORIES}`, category);
    return {
        type: 'CATEGORY_CREATED',
        payload: req
    };
}

export function updateCategory(category, id) {
    const req = Axios.put(`${ENV.API_URL}${PATH.CATEGORIES}/${id}`, category);
    return {
        type: 'CATEGORY_UPDATED',
        payload: req
    };
}

export function deleteCategory(id) {
    const req = Axios.delete(`${ENV.API_URL}${PATH.CATEGORIES}/${id}`);
    return {
        type: 'CATEGORY_DELETED',
        payload: req
    };
}

export function findByCategoryName(name) {
    const req = Axios.get(`${ENV.API_URL}${PATH.CATEGORIES}/findByName?name=${name}`);
    return {
        type: 'CATEGORY_SEARCHED',
        payload: req
    };
}

export function setCategoryId(categoryId) {
    return {
        type: 'SET_CATEGORYID',
        payload: categoryId
    };
}

export function openModal(show) {
    return  {
        type: 'SET_CATEGORY_MODAL',
        payload: show
    }
}

export function resetCategoriesSearched() { 
    return {
        type: 'CATEGORY_SEARCHED',
        payload: []
    };
}

export function removeCategoryFromSearch(id) {
    return {
        type: 'REMOVE_CATEGORY_FROM_SEARCH',
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
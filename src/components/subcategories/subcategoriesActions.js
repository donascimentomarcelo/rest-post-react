import Axios from "axios";
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';

const api_url = 'http://localhost:8080/api';
const path = '/subcategories';

export function getAll() {
    const req = Axios.get(`${api_url}${path}`);
    return {
        type: 'LIST',
        payload: req
    };
}

export function paginate(linesPerPage, page) {
    const req = Axios.get(`${api_url}${path}/paginate?linesPerPage=${linesPerPage}&page=${page}`);
    return {
        type: 'PAGINATE',
        payload: req
    }
}

export function findOne(id) {
    const req = Axios.get(`${api_url}${path}/${id}`);
    return {
        type: 'SUBCATEGORY',
        payload: req
    }
}

export function create(values) {
    return dispatch => {
        Axios.post(`${api_url}${path}`, values)
            .then(() => {
                dispatch(actionsAfterSuccess('Subcategoria salva com sucesso!'));
            })
            .catch(error => console.log(error));
    }
}

export function init() {
    return [
        initialize('subcategoriesForm')
    ];
}

export function actionsAfterSuccess(msg) {
    toastr.success('Sucesso!', msg);
}

export function update(subcategory, id) { 
    return dispatch => {
        Axios.put(`${api_url}${path}/${id}`, subcategory)
            .then(() => {
                dispatch(actionsAfterSuccess('Subcategoria alterada com sucesso!'));
            })
            .catch(error => console.log(error));
    }
 } 
export function remove(subcategory) {
    return dispatch => {
        Axios.delete(`${api_url}${path}/${subcategory.id}`)
            .then(() => {
                actionsAfterSuccess('Subcategoria removida com sucesso!')
                dispatch(getAll());
            })
            .catch(error => console.log(error))
    }
 }

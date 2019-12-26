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
                dispatch(actionsAfterSuccess());
            })
            .catch(error => console.log(error));
    }
}

export function init() {
    return [
        initialize('subcategoriesForm')
    ];
}

export function actionsAfterSuccess() {
    toastr.success('Sucesso!','Operação realizada com sucesso!');
}

export function update(subcategory) { console.log(subcategory); } 
export function remove(subcategory) { console.log(subcategory); }

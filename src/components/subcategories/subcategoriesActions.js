import Axios from "axios";
import { toastr } from 'react-redux-toastr';
import { createBrowserHistory } from 'history';

const api_url = 'http://localhost:8080/api';
const path = '/subcategories';

export function getAll() {
    const req = Axios.get(`${api_url}${path}`);
    return {
        type: 'LIST',
        payload: req
    };
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

export function actionsAfterSuccess() {
    toastr.success('Sucesso!','Operação realizada com sucesso!');
    createBrowserHistory().push('/subcategories')
}

export function update(subcategory) { console.log(subcategory); } 
export function remove(subcategory) { console.log(subcategory); }

import Axios from "axios";
import { initialize } from 'redux-form';
import environment from "../../environment/environment";
import { toastr } from 'react-redux-toastr';

const api_url = environment();
const path = '/posts';
const messageCreate = 'Post salva com sucesso!'

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
        type: 'POST',
        payload: req
    }
}

export function setPage(linesPerPage, page) {
    return {
        type: 'SETPAGE',
        payload: {
            linesPerPage,
            page
        }
    }
}

export function create(post) {
    return dispatch => {
        Axios.post(`${api_url}${path}`, post)
        .then(() => dispatch(acionsAfterSuccess(messageCreate)))
        .catch(error => console.log(error));
    }
}

export function resetCategory() {
    return {
        type: 'RESETCATEGORY'
    }
}

function acionsAfterSuccess(messageCreate) {
    toastr.success('Sucesso!', messageCreate);
}

export function init() {
    return [
        initialize('postsForm')
    ]
}
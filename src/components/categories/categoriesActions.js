import Axios from "axios";
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from "../../common/tab/tabActions";

const api_url = 'http://localhost:8080/api';
const INITIAL_VALUES = { subcategories: [{}] };

export function getList() {
    const req = Axios.get(`${api_url}/categories`);
    return {
        type: 'CATEGORIES_FETCHED',
        payload: req
    }
}

export function paginate(linesPerPage, page) {
    const req = Axios.get(`${api_url}/categories/paginate?linesPerPage=${linesPerPage}&page=${page}`);
    return {
        type: 'CATEGORY_PAGINATE',
        payload: req
    }
}

export function create(values) {
    return submit(values, 'post');
}

export function update(values) {
    return submit(values, 'put');
}

export function remove(values) {
    return submit(values, 'delete');
}

function submit(values, method) {
    const id = values.id ? values.id : '';
    return dispatch => {
        Axios[method](`${api_url}/categories/${id}`, values)
            .then(() => {
                toastr.success('Sucesso!','Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(error => console.log(error));
    }
}

export function showUpdate(category) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('categoriesForm', category)
    ];
}

export function showDelete(category) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('categoriesForm', category)
    ];
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('categoriesForm', INITIAL_VALUES)
    ];
}

export function setPage(linesPerPage, page) {
    return {
        type: 'CATEGORY_SETPAGE',
        payload: {
            linesPerPage,
            page
        }
    }
}
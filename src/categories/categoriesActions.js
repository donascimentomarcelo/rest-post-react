import Axios from "axios";
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from "../common/tab/tabActions";

const api_url = 'http://localhost:8080/api';

export function getList() {
    const req = Axios.get(`${api_url}/categories`);
    return {
        type: 'CATEGORIES_FETCHED',
        payload: req
    }
}

export function create(values) {
    return dispatch => {
        Axios.post(`${api_url}/categories`, values)
            .then(resp => {
                toastr.success('Sucesso!','Operação realizada com sucesso!')
                dispatch([
                    resetForm('categoriesForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export function showUpdate(category) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('categoriesForm', category)
    ]
}
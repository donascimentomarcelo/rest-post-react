import Axios from "axios";
import toastr from 'react-redux-toastr';

const api_url = 'http://localhost:8080/api';

export function getList() {
    const req = Axios.get(`${api_url}/categories`);
    return {
        type: 'CATEGORIES_FETCHED',
        payload: req
    }
}

export function create(values) {
    Axios.post(`${api_url}/categories`, values)
        .then(resp => {
            toastr.success('Sucesso!','Operação realizada com sucesso!')
        })
        .catch(error => {
            console.log(error);
        })
    return {
        type: 'TEMP'
    }
}
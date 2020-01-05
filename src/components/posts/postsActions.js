import Axios from "axios";
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';
import environment from "../../environment/environment";

const api_url = environment();
const path = '/posts';

export function paginate(linesPerPage, page) {
    const req = Axios.get(`${api_url}${path}/paginate?linesPerPage=${linesPerPage}&page=${page}`);
    return {
        type: 'PAGINATE',
        payload: req
    }
}
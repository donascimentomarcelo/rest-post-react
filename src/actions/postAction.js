import Axios from 'axios';
import * as CONST from './../helpers/constants';
import * as REDUCERS from './../helpers/reducers';
import * as ENV from './../environment/environment'

export function getAllPosts() {
    const req = Axios.get(`${ENV.API_URL}${CONST.POSTS}`);
    return {
        type: REDUCERS.POSTS_FETCHED,
        payload: req
    }
}
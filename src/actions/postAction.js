import Axios from 'axios';
import * as CONST from './../helpers/constants';
import * as REDUCERS from './../helpers/reducers';
import * as ENV from './../environment/environment'
import { initialize } from 'redux-form';

export function getAllPosts() {
    const req = Axios.get(`${ENV.API_URL}${CONST.POSTS}`);
    return {
        type: REDUCERS.POSTS_FETCHED,
        payload: req
    }
}

export function createPost(post) {
    const req = Axios.post(`${ENV.API_URL}${CONST.POSTS}`, post);
    return {
        type: REDUCERS.POST_CREATED,
        payload: req
    }
}

export function findPostById(id) {
    const req = Axios.get(`${ENV.API_URL}${CONST.POSTS}/${id}`);
    return {
        type: REDUCERS.POST_FETCHED,
        payload: req
    }
}

export function setPostForm(post) {
    return [
        initialize(CONST.POST_FORM, post)
    ];
}
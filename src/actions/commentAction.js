import Axios from 'axios'
import { initialize } from 'redux-form';
import * as REDUCERS from './../helpers/reducers'
import * as ENV from './../environment/environment'
import * as CONST from './../helpers/constants'

export function createComment(comment) {
    const req = Axios.post(`${ENV.API_URL}${CONST.COMMENTS}`, comment);
    return {
        payload: req,
        type: REDUCERS.COMMENTS_FETCHED
    }
}

export function addComment(comment) {
    return {
        type: REDUCERS.ADD_COMMENT,
        payload: comment
    }
}

export function resetCommentForm() {
    return [
        initialize(CONST.COMMENT_FORM)
    ];
}
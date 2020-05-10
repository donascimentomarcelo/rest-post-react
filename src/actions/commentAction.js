import * as REDUCERS from './../helpers/reducers'

export function addComment(comment) {
    return {
        type: REDUCERS.ADD_COMMENT,
        payload: comment
    }
}
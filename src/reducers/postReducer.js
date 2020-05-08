import * as REDUCERS from './../helpers/reducers';

const INITIAL_STATE = {
    buttonNew: true,
    posts: [],
    post: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REDUCERS.POSTS_FETCHED :
            return {
                ...state,
                posts: action.payload.data
            }

        case REDUCERS.POST_FETCHED :
            return {
                ...state,
                post: action.payload.data
            }

        default:
            return state;
    }
}
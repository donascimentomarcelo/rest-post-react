import * as REDUCERS from './../helpers/reducers';

const INITIAL_STATE = {
    posts: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REDUCERS.POSTS_FETCHED :
            return {
                ...state,
                posts: action.payload.data
            }
            
        default:
            return state;
    }
}
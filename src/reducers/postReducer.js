import * as REDUCERS from './../helpers/reducers';

const INITIAL_STATE = {
    buttonNew: true,
    posts: [],
    post: null,
    comments: []
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
                post: action.payload.data,
                comments: action.payload.data.comments
            }
            
        case REDUCERS.ADD_COMMENT:
            return { 
                ...state ,
                comments: [...state.comments, action.payload]
            }

        default:
            return state;
    }
}
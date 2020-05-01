import * as REDUCERS from './../helpers/reducers';

const INITIAL_STATE = {
    categories: [],
    categoriesSearched: [],
    buttonNew: true,
    buttonSearch: true,
    buttonReload: true,
    show: false,
    category: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REDUCERS.CATEGORIES_FETCHED :
            return {
                ...state,
                categories: action.payload.data,
            }

        case REDUCERS.SET_CATEGORYID :
            return {
                ...state,
                categoryId: action.payload,
            }

        case REDUCERS.SET_CATEGORY_MODAL :
            return {
                ...state,
                show: action.payload,
            }
        
        case REDUCERS.CATEGORY_DELETED :
            return {
                ...state,
            }
        
        case REDUCERS.CATEGORY_SEARCHED :
            return {
                ...state,
                categoriesSearched: action.payload.data,
            }

        case REDUCERS.CATEGORY_FETCHED :
            return {
                ...state,
                category: action.payload.data,
            }
        
        case REDUCERS.REMOVE_CATEGORY_FROM_SEARCH :
            return {
                ...state,
                categoriesSearched: state.categoriesSearched.filter(category => category.id !== state.categoryId)
            }
    
        default:
            return state;
    }
}

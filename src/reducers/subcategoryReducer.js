import * as REDUCERS from './../helpers/reducers';

const INITIAL_STATE = {
    subcategories: [],
    subcategoriesSearched: [],
    subcategorySetForm: null,
    buttonNew: true,
    buttonSearch: true,
    buttonReload: true,
    show: false,
    subcategoryId: null,
    subcategory: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REDUCERS.SUBCATEGORIES_FETCHED :
            return {
                ...state,
                subcategories: action.payload.data,
            }

        case REDUCERS.SET_SUBCATEGORYID :
            return {
                ...state,
                subcategoryId: action.payload,
            }

        case REDUCERS.SET_SUBCATEGORY_MODAL :
            return {
                ...state,
                show: action.payload,
            }

        case REDUCERS.SET_SUBCATEGORY_SEARCH_LIST :
            return {
                ...state,
                subcategoriesSearched: action.payload,
            }

        case REDUCERS.SUBCATEGORIES_FETCHED_BY_PARAMS :
            return {
                ...state,
                subcategoriesSearched: action.payload.data,
            }

        case REDUCERS.FIND_BY_CAREGORY :
            return {
                ...state,
                subcategories: action.payload.data,
            }

        case REDUCERS.SUBCATEGORY_FETCHED :
            return {
                ...state,
                subcategory: action.payload.data,
            }

        case REDUCERS.SUBCATEGORY_DELETED :
            return {
                ...state,
            }

        default:
            return state;
    }
}

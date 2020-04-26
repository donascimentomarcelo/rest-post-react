const INITIAL_STATE = {
    subcategories: [],
    subcategoriesSearched: [],
    subcategorySetForm: null,
    buttonNew: true,
    buttonSearch: true,
    buttonReload: true,
    show: false,
    subcategoryId: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SUBCATEGORIES_FETCHED':
            return {
                ...state,
                subcategories: action.payload.data,
            }

        case 'SET_SUBCATEGORYID':
            return {
                ...state,
                subcategoryId: action.payload,
            }

        default:
            return state;
    }
}

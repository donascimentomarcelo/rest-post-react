const INITIAL_STATE = {
    subcategories: [],
    subcategoriesSearched: [],
    buttonNew: true,
    buttonSearch: true,
    buttonReload: true,
    show: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SUBCATEGORIES_FETCHED':
            return {
                ...state,
                subcategories: action.payload.data,
            }

        default:
            return state;
    }
}

const INITIAL_STATE = {
    categories: [],
    categoriesSearched: [],
    buttonNew: true,
    buttonSearch: true,
    buttonReload: true,
    show: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CATEGORIES_FETCHED':
            return {
                ...state,
                categories: action.payload.data,
            }

        case 'SET_CATEGORYID':
            return {
                ...state,
                categoryId: action.payload,
            }

        case 'SET_CATEGORY_MODAL':
            return {
                ...state,
                show: action.payload,
            }
        
        case 'CATEGORY_DELETED':
            return {
                ...state,
            }
        
        case 'CATEGORY_SEARCHED':
            return {
                ...state,
                categoriesSearched: action.payload.data,
            }
    
        default:
            return state;
    }
}

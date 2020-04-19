const INITIAL_STATE = {
    categories: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CATEGORIES_FETCHED':
            return {
                ...state,
                categories: action.payload.data
            }

        case 'SET_CATEGORYID':
            return {
                ...state,
                categoryId: action.payload
            }
        
        case 'CATEGORY_DELETED':
            return {
                ...state
            }
    
        default:
            return state;
    }
}

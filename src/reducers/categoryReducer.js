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
    
        default:
            return state;
    }
}

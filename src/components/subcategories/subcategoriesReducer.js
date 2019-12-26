const INITIAL_STATE = {
    list: [], 
    subcategory: null 
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LIST':
            return {...state, list: action.payload.data};
        case 'SUBCATEGORY':
            return {...state, subcategory: action.payload.data};
        default:
            return state;
    }
}
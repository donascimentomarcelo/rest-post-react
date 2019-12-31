const INITIAL_STATE = {
    list: [],
    content: null,
    last: null,
    totalPages: null,
    totalElements: null,
    size: null,
    number: null,
    first: null,
    numberOfElements: null,
    linesPerPage: 10,
    page: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CATEGORIES_FETCHED':
            return { ...state, list: action.payload.data };
        case 'CATEGORY_PAGINATE':
            return {
                ...state,
                content: action.payload.data.content,
                last: action.payload.data.last,
                totalPages: action.payload.data.totalPages,
                totalElements: action.payload.data.totalElements,
                size: action.payload.data.size,
                number: action.payload.data.number,
                first: action.payload.data.first,
                numberOfElements: action.payload.data.numberOfElements,
            };
        case 'CATEGORY_SETPAGE':
            return {
                ...state,
                linesPerPage: action.payload.linesPerPage,
                page: action.payload.page,
            };
        default:
            return state;
    }
}
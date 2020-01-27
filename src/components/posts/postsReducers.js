const INITIAL_STATE = {
    list: [],
    post: null,
    posts: null,
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
    categoryId: '',
    show: false,
    search: '',
    listFindedByTitle: [],
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'PAGINATE' :
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
            }
        case 'SETPAGE':
            return {
                ...state,
                linesPerPage: action.payload.linesPerPage,
                page: action.payload.page,
            }
        case 'SETSELECTCATEGORIES': 
            return {
                ...state,
                categoryId: action.payload.categoryId,
            }
        case 'POST':
            return {
                ...state,
                post: action.payload.data,
            }
        case 'RESETCATEGORY': 
            return {
                ...state,
                categoryId: null,
            }
        case 'SETPOSTMODAL':
            return {
                ...state,
                show: action.payload.show
            }
        case 'SETSEARCHFIELDPOST':
            return {
                ...state,
                search: action.payload.search
            }
        case 'FINDBYPOSTITLE':
            return {
                ...state,
                listFindedByTitle: action.payload.data
            }

        default:
            return state;
    }
}

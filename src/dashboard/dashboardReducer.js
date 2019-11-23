const INITIAL_STATE = { summary: { categories: 0, subcategories: 0, wikis: 0 }};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DASHBOARD_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state;
    }
}
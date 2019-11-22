import { combineReducers } from "redux";

const rootReducer = combineReducers({
    dashboard: () => ({ summary: { value: 100 }})
});

export default rootReducer;
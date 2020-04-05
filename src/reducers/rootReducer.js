import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form";

import loginReducer from "./loginReducer";

const RootReducer = combineReducers({
    form: formReducer,
    loginReducer,
});

export default RootReducer;

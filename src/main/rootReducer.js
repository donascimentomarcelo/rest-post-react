import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form";

import loginReducer from "../reducers/loginReducer";

const RootReducer = combineReducers({
    form: formReducer,
    loginReducer,
});

export default RootReducer;

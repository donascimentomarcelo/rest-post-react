import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form";

import loginReducer from "./loginReducer";
import appReducer from "./appReducer";

const RootReducer = combineReducers({
    form: formReducer,
    loginReducer,
    appReducer,
});

export default RootReducer;

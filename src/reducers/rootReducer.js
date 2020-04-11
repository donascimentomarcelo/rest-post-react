import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form";

import loginReducer from "./loginReducer";
import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";

const RootReducer = combineReducers({
    form: formReducer,
    loginReducer,
    appReducer,
    categoryReducer,
});

export default RootReducer;

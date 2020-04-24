import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from 'react-redux-toastr';

import loginReducer from "./loginReducer";
import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";
import subcategoryReducer from "./subcategoryReducer";

const RootReducer = combineReducers({
    toastr: toastrReducer,
    form: formReducer,
    loginReducer,
    appReducer,
    categoryReducer,
    subcategoryReducer,
});

export default RootReducer;

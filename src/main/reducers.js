import { combineReducers } from "redux";
import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/tabReducer";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from 'react-redux-toastr';
import CategoriesReducer from "../components/categories/categoriesReducer";
import SubcategoriesReducer from "../components/subcategories/subcategoriesReducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
    categories: CategoriesReducer,
    subcategories: SubcategoriesReducer,
});

export default rootReducer;
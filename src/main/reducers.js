import { combineReducers } from "redux";
import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/tabReducer";
import CategoriesReducer from "../categories/categoriesReducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    categories: CategoriesReducer,
});

export default rootReducer;
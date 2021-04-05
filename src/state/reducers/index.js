import { combineReducers } from "redux";
import product from "./productReducer";
import category from "./categoryReducer";
import blog from "./blogReducer";
import order from "./orderReducer";
import web from "./webReducer";

const rootReducer = combineReducers({
  product,
  category,
  blog,
  order,
  web,
});

export default rootReducer;

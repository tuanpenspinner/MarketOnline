import { combineReducers } from "redux";
import product from "./productReducer";
import category from "./categoryReducer";
import blog from "./blogReducer";
import web from "./webReducer";

const rootReducer = combineReducers({
  product,
  category,
  blog,
  web,
});

export default rootReducer;

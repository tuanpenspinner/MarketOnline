import { combineReducers } from "redux";
import product from "./productReducer";
import category from "./categoryReducer";
import blog from "./blogReducer";
import order from "./orderReducer";
import comment from "./commentReducer";
import contact from "./contactReducer";
import web from "./webReducer";

const rootReducer = combineReducers({
  product,
  category,
  blog,
  order,
  comment,
  contact,
  web,
});

export default rootReducer;

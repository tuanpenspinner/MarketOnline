import { combineReducers } from "redux";
import product from "./productReducer";
import category from "./categoryReducer";
import web from "./webReducer";

const rootReducer = combineReducers({
  product,
  category,
  web,
});

export default rootReducer;

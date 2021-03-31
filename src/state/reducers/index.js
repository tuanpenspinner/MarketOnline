import { combineReducers } from "redux";
import product from "./productReducer";
import category from "./categoryReducer";

const rootReducer = combineReducers({
  product,
  category,
});

export default rootReducer;

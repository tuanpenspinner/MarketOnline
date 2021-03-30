import * as types from "./index";

export const getCategoryAction = (params) => {
  return {
    type: types.CATEGORIES.REQUEST,
    params,
  };
};

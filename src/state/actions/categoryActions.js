import * as types from "./index";

export const getCategoryAction = (params) => {
  return {
    type: types.GET_CATEGORY.REQUEST,
    payload: { params },
  };
};

export const createCategoryAction = (params) => {
  return {
    type: types.CREATE_CATEGORY.REQUEST,
    payload: { params },
  };
};

export const updateCategoryAction = (params) => {
  return {
    type: types.UPDATE_CATEGORY.REQUEST,
    payload: { params },
  };
};

export const updateActiveCategoryAction = (params) => {
  return {
    type: types.UPDATE_ACTIVE_CATEGORY.REQUEST,
    payload: { params },
  };
};

export const deleteCategoryAction = (params) => {
  return {
    type: types.DELETE_CATEGORY.REQUEST,
    payload: { params },
  };
};

import * as types from "./index";

export const getProductAction = (params) => {
  return {
    type: types.GET_PRODUCT.REQUEST,
    payload: { params },
  };
};

export const createProductAction = (params) => {
  return {
    type: types.CREATE_PRODUCT.REQUEST,
    payload: { params },
  };
};

export const updateProductAction = (params) => {
  return {
    type: types.UPDATE_PRODUCT.REQUEST,
    payload: { params },
  };
};

export const updateActiveProductAction = (params) => {
  return {
    type: types.UPDATE_ACTIVE_PRODUCT.REQUEST,
    payload: { params },
  };
};

export const deleteProductAction = (params) => {
  return {
    type: types.DELETE_PRODUCT.REQUEST,
    payload: { params },
  };
};

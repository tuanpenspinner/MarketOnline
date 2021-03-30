import * as types from "./index";

export const getProductAction = (params) => {
  return {
    type: types.GET_PRODUCT.REQUEST,
    params,
  };
};

export const createProductAction = (params) => {
  return {
    type: types.CREATE_PRODUCT.REQUEST,
    params,
  };
};

export const updateProductAction = (params) => {
  return {
    type: types.UPDATE_PRODUCT.REQUEST,
    params,
  };
};

export const updateActiveProductAction = (params) => {
  return {
    type: types.UPDATE_ACTIVE_PRODUCT.REQUEST,
    params,
  };
};

export const deleteProductAction = (params) => {
  return {
    type: types.DELETE_PRODUCT.REQUEST,
    params,
  };
};

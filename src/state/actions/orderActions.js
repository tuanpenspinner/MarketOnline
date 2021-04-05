import * as types from "./index";

export const getOrderAction = (params) => {
  return {
    type: types.GET_ORDER.REQUEST,
    payload: { params },
  };
};

export const createOrderAction = (params) => {
  return {
    type: types.CREATE_ORDER.REQUEST,
    payload: { params },
  };
};

export const updateActiveOrderAction = (params) => {
  return {
    type: types.UPDATE_ACTIVE_ORDER.REQUEST,
    payload: { params },
  };
};

export const deleteOrderAction = (params) => {
  return {
    type: types.DELETE_ORDER.REQUEST,
    payload: { params },
  };
};

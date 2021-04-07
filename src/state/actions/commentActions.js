import * as types from "./index";

export const getCommentAction = (params) => {
  return {
    type: types.GET_CMT.REQUEST,
    payload: { params },
  };
};

export const createCommentAction = (params) => {
  return {
    type: types.CREATE_CMT.REQUEST,
    payload: { params },
  };
};

export const updateCommentAction = (params) => {
  return {
    type: types.UPDATE_CMT.REQUEST,
    payload: { params },
  };
};

export const updateActiveCommentAction = (params) => {
  return {
    type: types.UPDATE_ACTIVE_CMT.REQUEST,
    payload: { params },
  };
};

export const deleteCommentAction = (params) => {
  return {
    type: types.DELETE_CMT.REQUEST,
    payload: { params },
  };
};

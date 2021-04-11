import * as types from "./index";

export const getContactAction = (params) => {
  return {
    type: types.GET_CONTACT.REQUEST,
    payload: { params },
  };
};

export const deleteContactAction = (params) => {
  return {
    type: types.DELETE_CONTACT.REQUEST,
    payload: { params },
  };
};

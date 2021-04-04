/* eslint-disable import/no-anonymous-default-export */
export default {
  GET_PRODUCT: "/api/product",
  CREATE_PRODUCT: "/api/product/create",
  UPDATE_PRODUCT: (id) => `/api/product/update/${id}`,
  UPDATE_ACTIVE_PRODUCT: (id) => `/api/product/updateActive/${id}`,
  UPDATE_HIGHLIGHT_PRODUCT: (id) => `/api/product/updateHighLight/${id}`,
  DELETE_PRODUCT: (id) => `/api/product/delete/${id}`,
};

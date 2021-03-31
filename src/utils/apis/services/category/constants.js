/* eslint-disable import/no-anonymous-default-export */
export default {
  GET_CATEGORY: "/api/category",
  CREATE_CATEGORY: "/api/category/create",
  UPDATE_CATEGORY: (id) => `/api/category/update/${id}`,
  UPDATE_ACTIVE_CATEGORY: (id) => `/api/category/delete/${id}`,
  DELETE_CATEGORY: (id) => `/api/category/updateActive/${id}`,
};

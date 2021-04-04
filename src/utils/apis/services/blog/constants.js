/* eslint-disable import/no-anonymous-default-export */
export default {
  GET_BLOG: "/api/blog",
  CREATE_BLOG: "/api/blog/create",
  UPDATE_BLOG: (id) => `/api/blog/update/${id}`,
  UPDATE_ACTIVE_BLOG: (id) => `/api/blog/updateActive/${id}`,
  DELETE_BLOG: (id) => `/api/blog/delete/${id}`,
};

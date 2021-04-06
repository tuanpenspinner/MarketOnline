/* eslint-disable import/no-anonymous-default-export */
export default {
  GET_CMT: "/api/comment",
  UPDATE_ACTIVE_CMT: (id) => `/api/comment/updateActive/${id}`,
  DELETE_CMT: (id) => `/api/comment/delete/${id}`,
};

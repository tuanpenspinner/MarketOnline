/* eslint-disable import/no-anonymous-default-export */
export default {
  GET_ORDER: "/api/order",
  CREATE_ORDER: "/api/order/create",
  UPDATE_ACTIVE_ORDER: (id) => `/api/order/updateStatus/${id}`,
  DELETE_ORDER: (id) => `/api/order/delete/${id}`,
};

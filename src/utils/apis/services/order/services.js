/* eslint-disable import/no-anonymous-default-export */
import makeRequest, { HTTP_METHOD } from "../..";
import ACC_URL from "./constants";

export default {
  getOrders: async (data) => {
    const result = await makeRequest(ACC_URL.GET_ORDER, HTTP_METHOD.POST, data);
    return result;
  },
  createOrder: async (data) => {
    const result = await makeRequest(ACC_URL.CREATE_ORDER, HTTP_METHOD.POST, data);
    return result;
  },
  updateActiveOrder: async (data) => {
    const result = await makeRequest(ACC_URL.UPDATE_ACTIVE_ORDER(data.id), HTTP_METHOD.PUT, data);
    return result;
  },
  deleteOrder: async (data) => {
    const result = await makeRequest(ACC_URL.DELETE_ORDER(data.id), HTTP_METHOD.DELETE);
    return result;
  },
};

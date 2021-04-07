/* eslint-disable import/no-anonymous-default-export */
import makeRequest, { HTTP_METHOD } from "../..";
import ACC_URL from "./constants";

export default {
  getComments: async (data) => {
    const result = await makeRequest(ACC_URL.GET_CMT, HTTP_METHOD.POST, data);
    return result;
  },
  updateActiveComment: async (data) => {
    const result = await makeRequest(ACC_URL.UPDATE_ACTIVE_CMT(data.id), HTTP_METHOD.PUT, data);
    return result;
  },
  deleteComment: async (data) => {
    const result = await makeRequest(ACC_URL.DELETE_CMT(data.id), HTTP_METHOD.DELETE);
    return result;
  },
};

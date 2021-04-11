/* eslint-disable import/no-anonymous-default-export */
import makeRequest, { HTTP_METHOD } from "../..";
import ACC_URL from "./constants";

export default {
  getContacts: async (data) => {
    const result = await makeRequest(ACC_URL.GET_BLOG, HTTP_METHOD.POST, data);
    return result;
  },
  deleteContact: async (data) => {
    const result = await makeRequest(ACC_URL.DELETE_BLOG(data.id), HTTP_METHOD.DELETE);
    return result;
  },
};

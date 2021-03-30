/* eslint-disable import/no-anonymous-default-export */
import makeRequest, { HTTP_METHOD } from "../../../apis";
import ACC_URL from "./constants";

export default {
  getAccomdoms: async (data) => {
    const result = await makeRequest(
      ACC_URL.GET_ACCOMDOMS,
      HTTP_METHOD.GET,
      data
    );
    return result;
  },
  deleteAccomdom: async (id) => {
    const result = await makeRequest(
      ACC_URL.DELETE_ACCOMDOM(id),
      HTTP_METHOD.DELETE
    );
    return result;
  },
  updateAccomdom: async (data) => {
    const result = await makeRequest(
      ACC_URL.UPDATE_ACCOMDOM(data.id),
      HTTP_METHOD.PUT,
      data
    );
    return result;
  },
  createAccomdom: async (data) => {
    const result = await makeRequest(
      ACC_URL.CREATE_ACCOMDOM,
      HTTP_METHOD.POST,
      data
    );
    return result;
  },
  getTypes: async (data) => {
    const result = await makeRequest(ACC_URL.GET_TYPES, HTTP_METHOD.GET, data);
    return result;
  },
};

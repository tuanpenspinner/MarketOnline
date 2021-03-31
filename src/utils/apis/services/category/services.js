/* eslint-disable import/no-anonymous-default-export */
import makeRequest, { HTTP_METHOD } from "../..";
import ACC_URL from "./constants";

export default {
  getCategories: async (data) => {
    const result = await makeRequest(
      ACC_URL.GET_CATEGORY,
      HTTP_METHOD.POST,
      data
    );
    return result;
  },
  createCategory: async (data) => {
    const result = await makeRequest(
      ACC_URL.CREATE_CATEGORY,
      HTTP_METHOD.POST,
      data
    );
    return result;
  },
  updateCategory: async (data) => {
    const result = await makeRequest(
      ACC_URL.UPDATE_CATEGORY(data.id),
      HTTP_METHOD.PUT,
      data
    );
    return result;
  },
  updateActiveCategory: async (data) => {
    const result = await makeRequest(
      ACC_URL.UPDATE_ACTIVE_CATEGORY(data.id),
      HTTP_METHOD.PUT,
      data
    );
    return result;
  },
  deleteCategory: async (data) => {
    const result = await makeRequest(
      ACC_URL.DELETE_CATEGORY(data.id),
      HTTP_METHOD.DELETE
    );
    return result;
  },
};

/* eslint-disable import/no-anonymous-default-export */
import makeRequest, { HTTP_METHOD } from "../../../apis";
import ACC_URL from "./constants";

export default {
  getProducts: async (data) => {
    const result = await makeRequest(
      ACC_URL.GET_PRODUCT,
      HTTP_METHOD.POST,
      data
    );
    return result;
  },
  createProduct: async (data) => {
    const result = await makeRequest(
      ACC_URL.CREATE_PRODUCT,
      HTTP_METHOD.POST,
      data
    );
    return result;
  },
  updateProduct: async (data) => {
    const result = await makeRequest(
      ACC_URL.UPDATE_PRODUCT(data.id),
      HTTP_METHOD.PUT,
      data
    );
    return result;
  },
  updateActiveProduct: async (data) => {
    const result = await makeRequest(
      ACC_URL.UPDATE_ACTIVE_PRODUCT(data.id),
      HTTP_METHOD.PUT,
      data
    );
    return result;
  },
  deleteProduct: async (data) => {
    const result = await makeRequest(
      ACC_URL.DELETE_PRODUCT(data.id),
      HTTP_METHOD.DELETE
    );
    return result;
  },
};

/* eslint-disable import/no-anonymous-default-export */
import makeRequest, { HTTP_METHOD } from "../..";
import ACC_URL from "./constants";

export default {
  getProductPage: async (data) => {
    const result = await makeRequest(ACC_URL.GET_PRODUCT_PAGE, HTTP_METHOD.POST, data);
    return result;
  },
  getListCategory: async (data) => {
    const result = await makeRequest(ACC_URL.GET_LIST_CATEGORY, HTTP_METHOD.POST, data);
    return result;
  },
  getListProduct: async (data) => {
    const result = await makeRequest(ACC_URL.GET_LIST_PRODUCT, HTTP_METHOD.POST, data);
    return result;
  },
  getDetailProduct: async (data) => {
    const result = await makeRequest(ACC_URL.GET_DETAIL_PRODUCT, HTTP_METHOD.POST, data);
    return result;
  },
  sendProductComment: async (data) => {
    const result = await makeRequest(ACC_URL.SEND_PRODUCT_COMMENT, HTTP_METHOD.POST, data);
    return result;
  },
  getListBlog: async (data) => {
    const result = await makeRequest(ACC_URL.GET_LIST_BLOG, HTTP_METHOD.POST, data);
    return result;
  },
  getDetailBlog: async (data) => {
    const result = await makeRequest(ACC_URL.GET_DETAIL_BLOG, HTTP_METHOD.POST, data);
    return result;
  },
};

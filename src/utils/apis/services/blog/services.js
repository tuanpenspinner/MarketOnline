/* eslint-disable import/no-anonymous-default-export */
import makeRequest, { HTTP_METHOD } from "../..";
import ACC_URL from "./constants";

export default {
  getBlogs: async (data) => {
    const result = await makeRequest(ACC_URL.GET_BLOG, HTTP_METHOD.POST, data);
    return result;
  },
  createBlog: async (data) => {
    const result = await makeRequest(ACC_URL.CREATE_BLOG, HTTP_METHOD.POST, data);
    return result;
  },
  updateBlog: async (data) => {
    const result = await makeRequest(ACC_URL.UPDATE_BLOG(data.id), HTTP_METHOD.PUT, data);
    return result;
  },
  updateActiveBlog: async (data) => {
    const result = await makeRequest(ACC_URL.UPDATE_ACTIVE_BLOG(data.id), HTTP_METHOD.PUT, data);
    return result;
  },
  deleteBlog: async (data) => {
    const result = await makeRequest(ACC_URL.DELETE_BLOG(data.id), HTTP_METHOD.DELETE);
    return result;
  },
};

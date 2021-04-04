import * as types from "./index";

export const getBlogAction = (params) => {
  return {
    type: types.GET_BLOG.REQUEST,
    payload: { params },
  };
};

export const createBlogAction = (params) => {
  return {
    type: types.CREATE_BLOG.REQUEST,
    payload: { params },
  };
};

export const updateBlogAction = (params) => {
  return {
    type: types.UPDATE_BLOG.REQUEST,
    payload: { params },
  };
};

export const updateActiveBlogAction = (params) => {
  return {
    type: types.UPDATE_ACTIVE_BLOG.REQUEST,
    payload: { params },
  };
};

export const deleteBlogAction = (params) => {
  return {
    type: types.DELETE_BLOG.REQUEST,
    payload: { params },
  };
};

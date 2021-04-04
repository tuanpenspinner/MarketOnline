import * as types from "./index";

export const getListProductPage = (params) => {
  return {
    type: types.GET_PRODUCT_PAGE.REQUEST,
    params,
  };
};

export const getListCategory = (params) => {
  return {
    type: types.GET_LIST_CATEGORY.REQUEST,
    params,
  };
};

export const getListProduct = (params) => {
  return {
    type: types.GET_LIST_PRODUCT.REQUEST,
    params,
  };
};

export const getDetailProduct = (params) => {
  return {
    type: types.GET_DETAIL_PRODUCT.REQUEST,
    params,
  };
};
export const sendProductComment = (params) => {
  return {
    type: types.SEND_PRODUCT_COMMENT.REQUEST,
    params,
  };
};

export const getListBlog = (params) => {
  return {
    type: types.GET_LIST_BLOG.REQUEST,
    params,
  };
};
export const getDetailBlog = (params) => {
  return {
    type: types.GET_DETAIL_BLOG.REQUEST,
    params,
  };
};

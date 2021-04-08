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

export const getListProduct = (params, callback) => {
  return {
    type: types.GET_LIST_PRODUCT.REQUEST,
    params,
    callback,
  };
};

export const getDetailProduct = (params) => {
  return {
    type: types.GET_DETAIL_PRODUCT.REQUEST,
    params,
  };
};
export const sendProductComment = (params, callback) => {
  return {
    type: types.SEND_PRODUCT_COMMENT.REQUEST,
    params,
    callback,
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

export const getListCommunity = (params) => {
  return {
    type: types.GET_LIST_COMMUNITY.REQUEST,
    params,
  };
};

export const getDetailCommunity = (params) => {
  return {
    type: types.GET_DETAIL_COMMUNITY.REQUEST,
    params,
  };
};

export const setProductCart = (params) => {
  return {
    type: types.SET_PRODUCT_CART.REQUEST,
    params,
  };
};

export const orderProduct = (params, callback) => {
  return {
    type: types.ORDER_PRODUCT.REQUEST,
    params,
    callback,
  };
};

export const sendContact = (params, callback) => {
  return {
    type: types.SEND_CONTACT.REQUEST,
    params,
    callback,
  };
};

export const registerNotification = (params, callback) => {
  return {
    type: types.REGISTER_NOTIFICATION.REQUEST,
    params,
    callback,
  };
};


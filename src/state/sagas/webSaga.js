import { call, put } from "redux-saga/effects";
import webServices from "../../utils/apis/services/web";
import * as types from "../actions";

const {
  getProductPage,
  getListCategory,
  getListProduct,
  getDetailProduct,
  sendProductComment,
  getListBlog,
  getDetailBlog,
  getListCommunity,
  getDetailCommunity,
} = webServices;

export function* getProductPageSaga() {
  try {
    const results = yield call(getProductPage, {});
    yield put({
      type: types.GET_PRODUCT_PAGE.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_PRODUCT_PAGE.FAILURE,
    });
  }
}
export function* getListCategorySaga() {
  try {
    const results = yield call(getListCategory, {});
    yield put({
      type: types.GET_LIST_CATEGORY.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_LIST_CATEGORY.FAILURE,
    });
  }
}
export function* getListProductSaga({ params }) {
  try {
    const results = yield call(getListProduct, { payload: params });
    yield put({
      type: types.GET_LIST_PRODUCT.SUCCESS,
      payload: {
        data: results.data.items,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_LIST_PRODUCT.FAILURE,
    });
  }
}
export function* getDetailProductSaga({ params }) {
  try {
    const results = yield call(getDetailProduct, { payload: params });
    yield put({
      type: types.GET_DETAIL_PRODUCT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_DETAIL_PRODUCT.FAILURE,
    });
  }
}
export function* sendProductCommentSaga(params) {
  try {
    const results = yield call(sendProductComment, { payload: params.params });
    yield put({
      type: types.SEND_PRODUCT_COMMENT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
    params.callback(results.httpCode === 200 ? true : false);
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SEND_PRODUCT_COMMENT.FAILURE,
    });
  }
}
export function* getListBlogSaga({ params }) {
  try {
    const results = yield call(getListBlog, { payload: params });
    yield put({
      type: types.GET_LIST_BLOG.SUCCESS,
      payload: {
        data: results.data.items,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_LIST_BLOG.FAILURE,
    });
  }
}
export function* getDetailBlogSaga({ params }) {
  try {
    const results = yield call(getDetailBlog, { payload: params });
    yield put({
      type: types.GET_DETAIL_BLOG.SUCCESS,
      payload: {
        data: results.data.items,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_DETAIL_BLOG.FAILURE,
    });
  }
}
export function* getListCommunitySaga({ params }) {
  try {
    const results = yield call(getListCommunity, { payload: params });
    yield put({
      type: types.GET_LIST_COMMUNITY.SUCCESS,
      payload: {
        data: results.data.items,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_LIST_COMMUNITY.FAILURE,
    });
  }
}
export function* getDetailCommunitySaga({ params }) {
  try {
    const results = yield call(getDetailCommunity, { payload: params });
    yield put({
      type: types.GET_DETAIL_COMMUNITY.SUCCESS,
      payload: {
        data: results.data.items,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_DETAIL_COMMUNITY.FAILURE,
    });
  }
}
export function* setProductCartSaga({ params }) {
  yield put({
    type: types.SET_PRODUCT_CART.SUCCESS,
    payload: {
      data: params,
    },
  });
}

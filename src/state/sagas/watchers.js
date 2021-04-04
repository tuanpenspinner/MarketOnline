import { takeLatest } from "redux-saga/effects";
import { createProductSaga, getProductSaga } from "./productSaga";
import { getCategorySaga } from "./categorySaga";
import {
  getProductPageSaga,
  getListCategorySaga,
  setProductCartSaga,
  getListProductSaga,
  getDetailProductSaga,
  sendProductCommentSaga,
  getListBlogSaga,
  getDetailBlogSaga,
  getListCommunitySaga,
  getDetailCommunitySaga,
} from "./webSaga";

import * as types from "../actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_PRODUCT.REQUEST, getProductSaga);
  yield takeLatest(types.CREATE_PRODUCT.REQUEST, createProductSaga);
  yield takeLatest(types.GET_CATEGORY.REQUEST, getCategorySaga);

  //web
  yield takeLatest(types.GET_PRODUCT_PAGE.REQUEST, getProductPageSaga);
  yield takeLatest(types.GET_LIST_CATEGORY.REQUEST, getListCategorySaga);
  yield takeLatest(types.SET_PRODUCT_CART.REQUEST, setProductCartSaga);
  yield takeLatest(types.GET_LIST_PRODUCT.REQUEST, getListProductSaga);
  yield takeLatest(types.GET_DETAIL_PRODUCT.REQUEST, getDetailProductSaga);
  yield takeLatest(types.SEND_PRODUCT_COMMENT.REQUEST, sendProductCommentSaga);
  yield takeLatest(types.GET_LIST_BLOG.REQUEST, getListBlogSaga);
  yield takeLatest(types.GET_DETAIL_BLOG.REQUEST, getDetailBlogSaga);
  yield takeLatest(types.GET_LIST_COMMUNITY.REQUEST, getListCommunitySaga);
  yield takeLatest(types.GET_DETAIL_COMMUNITY.REQUEST, getDetailCommunitySaga);
}

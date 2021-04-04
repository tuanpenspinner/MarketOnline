import { takeLatest } from "redux-saga/effects";
import {
  createProductSaga,
  getProductSaga,
  updateProductSaga,
  deleteProductSaga,
  updateProductActiveSaga,
  updateProductHighLightSaga,
} from "./productSaga";
import {
  getCategorySaga,
  createCategorySaga,
  deleteCategorySaga,
  updateCategoryActiveSaga,
  updateCategorySaga,
} from "./categorySaga";
import { getProductPageSaga, getListCategorySage } from "./webSaga";

import * as types from "../actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_PRODUCT.REQUEST, getProductSaga);
  yield takeLatest(types.CREATE_PRODUCT.REQUEST, createProductSaga);
  yield takeLatest(types.UPDATE_PRODUCT.REQUEST, updateProductSaga);
  yield takeLatest(types.UPDATE_ACTIVE_PRODUCT.REQUEST, updateProductActiveSaga);
  yield takeLatest(types.DELETE_PRODUCT.REQUEST, deleteProductSaga);
  yield takeLatest(types.UPDATE_HIGHLIGHT_PRODUCT.REQUEST, updateProductHighLightSaga);

  // category
  yield takeLatest(types.GET_CATEGORY.REQUEST, getCategorySaga);
  yield takeLatest(types.CREATE_CATEGORY.REQUEST, createCategorySaga);
  yield takeLatest(types.UPDATE_CATEGORY.REQUEST, updateCategorySaga);
  yield takeLatest(types.UPDATE_ACTIVE_CATEGORY.REQUEST, updateCategoryActiveSaga);
  yield takeLatest(types.DELETE_CATEGORY.REQUEST, deleteCategorySaga);

  //web
  yield takeLatest(types.GET_PRODUCT_PAGE.REQUEST, getProductPageSaga);
  yield takeLatest(types.GET_LIST_CATEGORY.REQUEST, getListCategorySage);
}

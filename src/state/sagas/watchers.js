import { takeLatest } from "redux-saga/effects";
import {
  createProductSaga,
  getProductSaga,
  updateProductSaga,
  deleteProductSaga,
  updateProductActiveSaga,
  updateProductHighLightSaga,
} from "./productSaga";
import { getCategorySaga } from "./categorySaga";

import * as types from "../actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_PRODUCT.REQUEST, getProductSaga);
  yield takeLatest(types.CREATE_PRODUCT.REQUEST, createProductSaga);
  yield takeLatest(types.UPDATE_PRODUCT.REQUEST, updateProductSaga);
  yield takeLatest(types.UPDATE_ACTIVE_PRODUCT.REQUEST, updateProductActiveSaga);
  yield takeLatest(types.UPDATE_HIGHLIGHT_PRODUCT.REQUEST, updateProductHighLightSaga);
  yield takeLatest(types.DELETE_PRODUCT.REQUEST, deleteProductSaga);

  // category
  yield takeLatest(types.GET_CATEGORY.REQUEST, getCategorySaga);
}

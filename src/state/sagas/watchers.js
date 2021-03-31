import { takeLatest } from "redux-saga/effects";
import { createProductSaga, getProductSaga } from "./productSaga";
import { getCategorySaga } from "./categorySaga";

import * as types from "../actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_PRODUCT.REQUEST, getProductSaga);
  yield takeLatest(types.CREATE_PRODUCT.REQUEST, createProductSaga);
  yield takeLatest(types.GET_CATEGORY.REQUEST, getCategorySaga);
}

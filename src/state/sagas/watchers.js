import { takeLatest } from "redux-saga/effects";
import { getProductSaga } from "./productSaga";

import * as types from "../actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_PRODUCT.REQUEST, getProductSaga);
}

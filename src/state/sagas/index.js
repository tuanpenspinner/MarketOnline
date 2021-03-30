import { takeLatest } from "redux-saga/effects";
import * as types from "../actions";

import { getProductSaga } from "./productSaga";

export default function* watchUserAuthentication() {
  yield takeLatest(types.PRODUCT.REQUEST, getProductSaga);
}

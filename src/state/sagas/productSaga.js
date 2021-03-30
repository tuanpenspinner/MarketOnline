import { put } from "redux-saga/effects";
import productServices from "../../utils/apis/services/product";
import * as types from "../actions";

const {} = productServices;

export function* getProductSaga({ params }) {
  try {
    yield put({});
  } catch (error) {
    yield put({});
  } finally {
    yield put({});
  }
}

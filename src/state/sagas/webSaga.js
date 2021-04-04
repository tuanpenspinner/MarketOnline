import { call, put } from "redux-saga/effects";
import webServices from "../../utils/apis/services/web";
import * as types from "../actions";

const { getProductPage, getListCategory } = webServices;

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
export function* getListCategorySage() {
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

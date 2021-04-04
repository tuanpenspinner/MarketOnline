import { call, put } from "redux-saga/effects";
import productServices from "../../utils/apis/services/product";
import * as types from "../actions";

const { getProducts, createProduct, updateProduct, updateActiveProduct, deleteProduct, updateHighlightProduct } = productServices;

export function* getProductSaga({ payload }) {
  console.log("saga", payload);
  try {
    const results = yield call(getProducts, payload.params);

    yield put({
      type: types.GET_PRODUCT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_PRODUCT.FAILURE,
    });
  }
}

export function* createProductSaga({ payload }) {
  try {
    const results = yield call(createProduct, payload.params);

    yield put({
      type: types.CREATE_PRODUCT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.CREATE_PRODUCT.FAILURE,
    });
  } finally {
    yield put({
      type: types.CREATE_PRODUCT.REFRESH,
    });
  }
}

export function* updateProductSaga({ payload }) {
  try {
    const results = yield call(updateProduct, payload.params);

    yield put({
      type: types.UPDATE_PRODUCT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.UPDATE_PRODUCT.FAILURE,
    });
  } finally {
    yield put({
      type: types.UPDATE_PRODUCT.REFRESH,
    });
  }
}

export function* deleteProductSaga({ payload }) {
  try {
    const results = yield call(deleteProduct, payload.params);

    yield put({
      type: types.DELETE_PRODUCT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.DELETE_PRODUCT.FAILURE,
    });
  } finally {
    yield put({
      type: types.DELETE_PRODUCT.REFRESH,
    });
  }
}

export function* updateProductActiveSaga({ payload }) {
  try {
    const results = yield call(updateActiveProduct, payload.params);

    yield put({
      type: types.UPDATE_ACTIVE_PRODUCT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.UPDATE_ACTIVE_PRODUCT.FAILURE,
    });
  } finally {
    yield put({
      type: types.UPDATE_ACTIVE_PRODUCT.REFRESH,
    });
  }
}

export function* updateProductHighLightSaga({ payload }) {
  try {
    const results = yield call(updateHighlightProduct, payload.params);

    yield put({
      type: types.UPDATE_HIGHLIGHT_PRODUCT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.UPDATE_HIGHLIGHT_PRODUCT.FAILURE,
    });
  } finally {
    yield put({
      type: types.UPDATE_HIGHLIGHT_PRODUCT.REFRESH,
    });
  }
}

import { call, put } from "redux-saga/effects";
import productServices from "../../utils/apis/services/product";
import * as types from "../actions";

const {
  getProducts,
  createProduct,
  // updateProduct,
  // updateActiveProduct,
  // deleteProduct,
} = productServices;

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
    console.log(results);

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
  }
}

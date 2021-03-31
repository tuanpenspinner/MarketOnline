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

export function* getProductSaga({ params }) {
  try {
    const results = yield call(getProducts, params);

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

export function* createProductSaga({ params }) {
  console.log("params", params);
  try {
    const results = yield call(createProduct, params);
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

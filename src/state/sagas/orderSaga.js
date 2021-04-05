import { call, put } from "redux-saga/effects";
import orderServices from "../../utils/apis/services/order";
import * as types from "../actions";

const { createOrder, deleteOrder, getOrders, updateActiveOrder } = orderServices;

export function* getOrderSaga({ payload }) {
  try {
    const results = yield call(getOrders, payload.params);
    yield put({
      type: types.GET_ORDER.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.GET_ORDER.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  }
}

export function* createOrderSaga({ payload }) {
  try {
    const results = yield call(createOrder, payload.params);

    yield put({
      type: types.CREATE_ORDER.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.CREATE_ORDER.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.CREATE_ORDER.REFRESH,
    });
  }
}

export function* deleteOrderSaga({ payload }) {
  try {
    const results = yield call(deleteOrder, payload.params);

    yield put({
      type: types.DELETE_ORDER.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.DELETE_ORDER.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.DELETE_ORDER.REFRESH,
    });
  }
}

export function* updateOrderActiveSaga({ payload }) {
  try {
    const results = yield call(updateActiveOrder, payload.params);

    yield put({
      type: types.UPDATE_ACTIVE_ORDER.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_ACTIVE_ORDER.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.UPDATE_ACTIVE_ORDER.REFRESH,
    });
  }
}

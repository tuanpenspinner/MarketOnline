import { call, put } from "redux-saga/effects";
import categoryServices from "../../utils/apis/services/category";
import * as types from "../actions";

const { getCategories, createCategory, deleteCategory, updateActiveCategory, updateCategory } = categoryServices;

export function* getCategorySaga({ payload }) {
  try {
    const results = yield call(getCategories, payload.params);
    yield put({
      type: types.GET_CATEGORY.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.GET_CATEGORY.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  }
}

export function* createCategorySaga({ payload }) {
  try {
    const results = yield call(createCategory, payload.params);

    yield put({
      type: types.CREATE_CATEGORY.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.CREATE_CATEGORY.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.CREATE_CATEGORY.REFRESH,
    });
  }
}

export function* updateCategorySaga({ payload }) {
  try {
    const results = yield call(updateCategory, payload.params);

    yield put({
      type: types.UPDATE_CATEGORY.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_CATEGORY.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.UPDATE_CATEGORY.REFRESH,
    });
  }
}

export function* deleteCategorySaga({ payload }) {
  try {
    const results = yield call(deleteCategory, payload.params);

    yield put({
      type: types.DELETE_CATEGORY.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.DELETE_CATEGORY.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.DELETE_CATEGORY.REFRESH,
    });
  }
}

export function* updateCategoryActiveSaga({ payload }) {
  try {
    const results = yield call(updateActiveCategory, payload.params);

    yield put({
      type: types.UPDATE_ACTIVE_CATEGORY.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_ACTIVE_CATEGORY.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.UPDATE_ACTIVE_CATEGORY.REFRESH,
    });
  }
}

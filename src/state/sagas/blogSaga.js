import { call, put } from "redux-saga/effects";
import categoryServices from "../../utils/apis/services/blog";
import * as types from "../actions";

const { createBlog, deleteBlog, getBlogs, updateActiveBlog, updateBlog } = categoryServices;

export function* getBlogSaga({ payload }) {
  try {
    const results = yield call(getBlogs, payload.params);
    yield put({
      type: types.GET_BLOG.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.GET_BLOG.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  }
}

export function* createBlogSaga({ payload }) {
  try {
    const results = yield call(createBlog, payload.params);

    yield put({
      type: types.CREATE_BLOG.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.CREATE_BLOG.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.CREATE_BLOG.REFRESH,
    });
  }
}

export function* updateBlogSaga({ payload }) {
  try {
    const results = yield call(updateBlog, payload.params);

    yield put({
      type: types.UPDATE_BLOG.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_BLOG.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.UPDATE_BLOG.REFRESH,
    });
  }
}

export function* deleteBlogSaga({ payload }) {
  try {
    const results = yield call(deleteBlog, payload.params);

    yield put({
      type: types.DELETE_BLOG.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.DELETE_BLOG.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.DELETE_BLOG.REFRESH,
    });
  }
}

export function* updateBlogActiveSaga({ payload }) {
  try {
    const results = yield call(updateActiveBlog, payload.params);

    yield put({
      type: types.UPDATE_ACTIVE_BLOG.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_ACTIVE_BLOG.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.UPDATE_ACTIVE_BLOG.REFRESH,
    });
  }
}

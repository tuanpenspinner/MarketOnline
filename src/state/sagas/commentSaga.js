import { call, put } from "redux-saga/effects";
import commentServices from "../../utils/apis/services/comment";
import * as types from "../actions";

const { getComments, deleteComment, updateActiveComment } = commentServices;

export function* getCommentSaga({ payload }) {
  try {
    const results = yield call(getComments, payload.params);
    yield put({
      type: types.GET_CMT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.GET_CMT.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  }
}

export function* deleteCommentSaga({ payload }) {
  try {
    const results = yield call(deleteComment, payload.params);

    yield put({
      type: types.DELETE_CMT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.DELETE_CMT.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.DELETE_CMT.REFRESH,
    });
  }
}

export function* updateCommentActiveSaga({ payload }) {
  try {
    const results = yield call(updateActiveComment, payload.params);

    yield put({
      type: types.UPDATE_ACTIVE_CMT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_ACTIVE_CMT.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.UPDATE_ACTIVE_CMT.REFRESH,
    });
  }
}

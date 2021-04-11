import { call, put } from "redux-saga/effects";
import contactServices from "../../utils/apis/services/contact";
import * as types from "../actions";

const { getContacts, deleteContact } = contactServices;

export function* getContactSaga({ payload }) {
  try {
    const results = yield call(getContacts, payload.params);
    yield put({
      type: types.GET_CONTACT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.GET_CONTACT.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  }
}

export function* deleteContactSaga({ payload }) {
  try {
    const results = yield call(deleteContact, payload.params);

    yield put({
      type: types.DELETE_CONTACT.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    yield put({
      type: types.DELETE_CONTACT.FAILURE,
      payload: {
        error: error.response.data,
        httpCode: error.response.status,
      },
    });
  } finally {
    yield put({
      type: types.DELETE_CONTACT.REFRESH,
    });
  }
}

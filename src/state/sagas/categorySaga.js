import { call, put } from "redux-saga/effects";
import categoryServices from "../../utils/apis/services/category";
import * as types from "../actions";

const { getCategories } = categoryServices;

export function* getCategorySaga({ params }) {
  try {
    const results = yield call(getCategories, params);

    yield put({
      type: types.GET_CATEGORY.SUCCESS,
      payload: {
        data: results.data,
        httpCode: results.httpCode,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_CATEGORY.FAILURE,
    });
  }
}

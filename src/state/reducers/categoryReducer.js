import * as types from "../actions";

const initState = {
  loading: false,
  error: false,
  httpCode: undefined,
  data: {
    list: [],
    total: 0,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.GET_CATEGORY.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CATEGORY.SUCCESS:
      return {
        ...state,
        loading: false,
        httpCode: payload.httpCode,
        data: {
          ...state.data,
          list: payload.data.items,
          total: payload.data.total,
        },
      };
    case types.GET_CATEGORY.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

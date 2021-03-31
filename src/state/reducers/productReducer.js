import * as types from "../actions";

const initState = {
  loading: false,
  error: false,
  httpCode: undefined,
  data: {
    list: [],
    total: 0,
  },
  created: {
    loading: false,
    error: false,
    httpCode: undefined,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.GET_PRODUCT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCT.SUCCESS:
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
    case types.GET_PRODUCT.FAILURE:
      return {
        ...state,
        loading: false,
      };

    case types.CREATE_PRODUCT.REQUEST:
      return {
        ...state,
        created: {
          ...state.created,
          loading: true,
        },
      };
    case types.CREATE_PRODUCT.SUCCESS:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.CREATE_PRODUCT.FAILURE:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    default:
      return state;
  }
}

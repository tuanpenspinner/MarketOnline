import * as types from "../actions";

const initState = {
  loading: false,
  error: false,
  httpCode: undefined,
  data: {
    list: [],
    total: 0,
  },

  deleted: {
    loading: false,
    error: false,
    httpCode: undefined,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.GET_CONTACT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CONTACT.SUCCESS:
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
    case types.GET_CONTACT.FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        httpCode: payload.httpCode,
      };

    case types.DELETE_CONTACT.REQUEST:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: true,
        },
      };
    case types.DELETE_CONTACT.SUCCESS:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_CONTACT.FAILURE:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_CONTACT.REFRESH:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    default:
      return state;
  }
}

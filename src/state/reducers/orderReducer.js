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
  active: {
    loading: false,
    error: false,
    httpCode: undefined,
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
    case types.GET_ORDER.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ORDER.SUCCESS:
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
    case types.GET_ORDER.FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        httpCode: payload.httpCode,
      };

    case types.CREATE_ORDER.REQUEST:
      return {
        ...state,
        created: {
          ...state.created,
          loading: true,
        },
      };
    case types.CREATE_ORDER.SUCCESS:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.CREATE_ORDER.FAILURE:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.CREATE_ORDER.REFRESH:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.DELETE_ORDER.REQUEST:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: true,
        },
      };
    case types.DELETE_ORDER.SUCCESS:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_ORDER.FAILURE:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_ORDER.REFRESH:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.UPDATE_ACTIVE_ORDER.REQUEST:
      return {
        ...state,
        active: {
          ...state.active,
          loading: true,
        },
      };
    case types.UPDATE_ACTIVE_ORDER.SUCCESS:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_ORDER.FAILURE:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_ORDER.REFRESH:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    default:
      return state;
  }
}

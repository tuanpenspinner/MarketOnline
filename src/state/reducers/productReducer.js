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
  updated: {
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
  highlight: {
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
        error: payload.error,
        httpCode: payload.httpCode,
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
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.CREATE_PRODUCT.REFRESH:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.UPDATE_PRODUCT.REQUEST:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: true,
        },
      };
    case types.UPDATE_PRODUCT.SUCCESS:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_PRODUCT.FAILURE:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_PRODUCT.REFRESH:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.DELETE_PRODUCT.REQUEST:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: true,
        },
      };
    case types.DELETE_PRODUCT.SUCCESS:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_PRODUCT.FAILURE:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_PRODUCT.REFRESH:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.UPDATE_ACTIVE_PRODUCT.REQUEST:
      return {
        ...state,
        active: {
          ...state.active,
          loading: true,
        },
      };
    case types.UPDATE_ACTIVE_PRODUCT.SUCCESS:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_PRODUCT.FAILURE:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_PRODUCT.REFRESH:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.UPDATE_HIGHLIGHT_PRODUCT.REQUEST:
      return {
        ...state,
        highlight: {
          ...state.highlight,
          loading: true,
        },
      };
    case types.UPDATE_HIGHLIGHT_PRODUCT.SUCCESS:
      return {
        ...state,
        highlight: {
          ...state.highlight,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_HIGHLIGHT_PRODUCT.FAILURE:
      return {
        ...state,
        highlight: {
          ...state.highlight,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_HIGHLIGHT_PRODUCT.REFRESH:
      return {
        ...state,
        highlight: {
          ...state.highlight,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };
    default:
      return state;
  }
}

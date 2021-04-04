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

    case types.CREATE_CATEGORY.REQUEST:
      return {
        ...state,
        created: {
          ...state.created,
          loading: true,
        },
      };
    case types.CREATE_CATEGORY.SUCCESS:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.CREATE_CATEGORY.FAILURE:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.CREATE_CATEGORY.REFRESH:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.UPDATE_CATEGORY.REQUEST:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: true,
        },
      };
    case types.UPDATE_CATEGORY.SUCCESS:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_CATEGORY.FAILURE:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_CATEGORY.REFRESH:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.DELETE_CATEGORY.REQUEST:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: true,
        },
      };
    case types.DELETE_CATEGORY.SUCCESS:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_CATEGORY.FAILURE:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_CATEGORY.REFRESH:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.UPDATE_ACTIVE_CATEGORY.REQUEST:
      return {
        ...state,
        active: {
          ...state.active,
          loading: true,
        },
      };
    case types.UPDATE_ACTIVE_CATEGORY.SUCCESS:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_CATEGORY.FAILURE:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_CATEGORY.REFRESH:
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
